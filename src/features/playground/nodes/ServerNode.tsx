import type { NodeProps } from 'reactflow';
import { BaseSystemNode } from './BaseSystemNode';
import type { SystemNodeData } from '../../../abstract/nodeData';

export function ServerNode(props: NodeProps<SystemNodeData>) {
  return <BaseSystemNode {...props} accentClassName="bg-sky-600" icon="S" />;
}
