import type { NodeProps } from 'reactflow';
import { BaseSystemNode } from './BaseSystemNode';
import type { SystemNodeData } from '../../../abstract/nodeData';

export function UserNode(props: NodeProps<SystemNodeData>) {
  return <BaseSystemNode {...props} accentClassName="bg-secondary-700" icon="U" showTarget={false} />;
}
