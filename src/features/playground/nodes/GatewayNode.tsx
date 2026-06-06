import type { NodeProps } from 'reactflow';
import { BaseSystemNode } from './BaseSystemNode';
import type { SystemNodeData } from '../../../abstract/nodeData';

export function GatewayNode(props: NodeProps<SystemNodeData>) {
  return <BaseSystemNode {...props} accentClassName="bg-primary-600" icon="GW" />;
}
