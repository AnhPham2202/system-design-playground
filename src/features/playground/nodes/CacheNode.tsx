import type { NodeProps } from 'reactflow';
import { BaseSystemNode } from './BaseSystemNode';
import type { SystemNodeData } from '../../../abstract/nodeData';

export function CacheNode(props: NodeProps<SystemNodeData>) {
  return <BaseSystemNode {...props} accentClassName="bg-cyan-600" icon="C" showSource={false} />;
}
