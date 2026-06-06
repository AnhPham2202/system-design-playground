import { useCallback } from 'react';
import {
  addEdge,
  useEdgesState,
  useNodesState,
  type Connection,
  type Edge,
  type Node,
} from 'reactflow';
import { initialEdges } from '../data/initialEdges';
import { initialNodes } from '../data/initialNodes';
import type { SystemNodeData } from '../types/playground.types';
import { validateSystemConnection } from '../utils/connectionValidation';

export function usePlaygroundFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState<SystemNodeData>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection: Connection) => {
      if (!validateSystemConnection(connection, nodes).isValid) {
        return;
      }

      setEdges((currentEdges: Edge[]) => addEdge({ ...connection, animated: true }, currentEdges));
    },
    [nodes, setEdges],
  );

  const isValidConnection = useCallback(
    (connection: Connection) => validateSystemConnection(connection, nodes).isValid,
    [nodes],
  );

  const updateNodes = useCallback(
    (nextNodes: Array<Node<SystemNodeData>>) => {
      setNodes(nextNodes);
    },
    [setNodes],
  );

  return {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    isValidConnection,
    setNodes: updateNodes,
    setEdges,
  };
}
