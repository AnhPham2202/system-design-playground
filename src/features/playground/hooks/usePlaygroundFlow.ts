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

export function usePlaygroundFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState<SystemNodeData>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((currentEdges: Edge[]) => addEdge({ ...connection, animated: true }, currentEdges));
    },
    [setEdges],
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
    setNodes: updateNodes,
    setEdges,
  };
}
