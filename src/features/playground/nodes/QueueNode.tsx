import type { NodeProps } from 'reactflow';
import { BaseSystemNode } from './BaseSystemNode';
import type { SystemNodeData } from '../../../abstract/nodeData';

export function QueueNode(props: NodeProps<SystemNodeData>) {
  return <BaseSystemNode {...props} accentClassName="bg-violet-600" icon="Q" showSource={false} />;
}
