import type { Node } from 'reactflow';
import type { SystemNodeData } from '../types/playground.types';

export const initialNodes: Array<Node<SystemNodeData>> = [
  {
    id: 'user',
    type: 'user',
    position: { x: 40, y: 180 },
    data: {
      name: 'Web User',
      type: 'user',
      status: 'healthy',
      metric: { label: 'Requests', value: '1.2k/min' },
    },
  },
  {
    id: 'gateway',
    type: 'gateway',
    position: { x: 330, y: 180 },
    data: {
      name: 'API Gateway',
      type: 'gateway',
      status: 'healthy',
      metric: { label: 'RPS', value: '420' },
    },
  },
  {
    id: 'server',
    type: 'server',
    position: { x: 620, y: 180 },
    data: {
      name: 'Order Service',
      type: 'server',
      status: 'healthy',
      metric: { label: 'Latency', value: '48 ms' },
    },
  },
  {
    id: 'database',
    type: 'database',
    position: { x: 930, y: 40 },
    data: {
      name: 'Primary DB',
      type: 'database',
      status: 'healthy',
      metric: { label: 'Queries', value: '310 qps' },
    },
  },
  {
    id: 'cache',
    type: 'cache',
    position: { x: 930, y: 180 },
    data: {
      name: 'Redis Cache',
      type: 'cache',
      status: 'idle',
      metric: { label: 'Hit Rate', value: '92%' },
    },
  },
  {
    id: 'queue',
    type: 'queue',
    position: { x: 930, y: 320 },
    data: {
      name: 'Event Queue',
      type: 'queue',
      status: 'degraded',
      metric: { label: 'Queue Size', value: '1,840' },
    },
  },
];
