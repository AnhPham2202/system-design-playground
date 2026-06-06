import type { NodeTypes } from 'reactflow';
import { CacheNode } from '../features/playground/nodes/CacheNode';
import { DatabaseNode } from '../features/playground/nodes/DatabaseNode';
import { GatewayNode } from '../features/playground/nodes/GatewayNode';
import { QueueNode } from '../features/playground/nodes/QueueNode';
import { ServerNode } from '../features/playground/nodes/ServerNode';
import { UserNode } from '../features/playground/nodes/UserNode';

export const nodeTypes = {
  user: UserNode,
  gateway: GatewayNode,
  server: ServerNode,
  database: DatabaseNode,
  cache: CacheNode,
  queue: QueueNode,
} satisfies NodeTypes;
