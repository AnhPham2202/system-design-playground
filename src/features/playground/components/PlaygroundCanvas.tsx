import { useCallback, useRef, type DragEvent } from 'react';
import ReactFlow, { Background, Controls, MiniMap, Panel, type ReactFlowInstance, type Node } from 'reactflow';
import { usePlaygroundFlow } from '../hooks/usePlaygroundFlow';
import { nodeTypes } from '../../../abstract/nodeTypes';
import type { SystemNodeData } from '../types/playground.types';
import { PLAYGROUND_NODE_DRAG_TYPE, type SidebarNodeDragData } from './Sidebar';

export function PlaygroundCanvas() {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const reactFlowInstance = useRef<ReactFlowInstance<SystemNodeData> | null>(null);
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, isValidConnection, setNodes } = usePlaygroundFlow();

  const onDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      const rawNodeData = event.dataTransfer.getData(PLAYGROUND_NODE_DRAG_TYPE);
      const bounds = reactFlowWrapper.current?.getBoundingClientRect();
      const flowInstance = reactFlowInstance.current;

      if (!rawNodeData || !bounds || !flowInstance) {
        return;
      }

      const droppedNode = JSON.parse(rawNodeData) as SidebarNodeDragData;
      const position = flowInstance.project({
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
      });

      const nextNode: Node<SystemNodeData> = {
        id: `${droppedNode.type}-${Date.now()}`,
        type: droppedNode.type,
        position,
        data: {
          name: droppedNode.name,
          type: droppedNode.type,
          kind: droppedNode.kind,
          status: 'idle',
          metric: droppedNode.metric,
        },
      };

      setNodes([...nodes, nextNode]);
    },
    [nodes, setNodes],
  );

  return (
    <div ref={reactFlowWrapper} className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={(instance) => {
          reactFlowInstance.current = instance;
        }}
        onDrop={onDrop}
        onDragOver={onDragOver}
        isValidConnection={isValidConnection}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        proOptions={{ hideAttribution: true }}
      >
        <Panel position="top-left" className="rounded-lg border border-[var(--border-soft)] bg-white px-4 py-3 shadow-sm">
          <p className="text-sm font-semibold text-[var(--text-primary)]">System Design Playground</p>
          <p className="mt-1 text-xs text-[var(--text-secondary)]">
            Drag nodes and connect only compatible inputs and outputs.
          </p>
        </Panel>
        <Background color="#cbd5e1" gap={18} size={1} />
        <Controls />
        <MiniMap
          nodeColor="#6366f1"
          maskColor="rgba(15, 23, 42, 0.08)"
          pannable
          zoomable
          className="!border !border-[var(--border-soft)] !bg-white"
        />
      </ReactFlow>
    </div>
  );
}
