import type { Edge } from 'reactflow';

export const initialEdges: Edge[] = [
  { id: 'user-gateway', source: 'user', target: 'gateway', animated: true },
  { id: 'gateway-server', source: 'gateway', target: 'server', animated: true },
  { id: 'server-database', source: 'server', target: 'database' },
  { id: 'server-cache', source: 'server', target: 'cache' },
  { id: 'server-queue', source: 'server', target: 'queue' },
];
