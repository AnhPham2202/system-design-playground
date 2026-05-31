import ReactFlow, { Background, Controls, MiniMap, Panel } from 'reactflow';
import { usePlaygroundFlow } from '../hooks/usePlaygroundFlow';
import { nodeTypes } from '../nodes/nodeTypes';

export function PlaygroundCanvas() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = usePlaygroundFlow();

  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        proOptions={{ hideAttribution: true }}
      >
        <Panel position="top-left" className="rounded-lg border border-[var(--border-soft)] bg-white px-4 py-3 shadow-sm">
          <p className="text-sm font-semibold text-[var(--text-primary)]">System Design Playground</p>
          <p className="mt-1 text-xs text-[var(--text-secondary)]">Drag nodes and inspect service relationships.</p>
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
