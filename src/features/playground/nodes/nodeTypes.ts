import type { NodeTypes } from 'reactflow';
import { CacheNode } from './CacheNode';
import { DatabaseNode } from './DatabaseNode';
import { GatewayNode } from './GatewayNode';
import { QueueNode } from './QueueNode';
import { ServerNode } from './ServerNode';
import { UserNode } from './UserNode';

export const nodeTypes = {
  user: UserNode,
  gateway: GatewayNode,
  server: ServerNode,
  database: DatabaseNode,
  cache: CacheNode,
  queue: QueueNode,
} satisfies NodeTypes;
