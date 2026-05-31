import type { SystemNodeData, SystemNodeStatus, SystemNodeType } from '../types/playground.types';

export type { SystemNodeData, SystemNodeStatus, SystemNodeType };

export const statusLabels: Record<SystemNodeStatus, string> = {
  healthy: 'Healthy',
  degraded: 'Degraded',
  idle: 'Idle',
};

export const statusClasses: Record<SystemNodeStatus, string> = {
  healthy: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  degraded: 'bg-amber-50 text-amber-700 ring-amber-200',
  idle: 'bg-slate-100 text-slate-600 ring-slate-200',
};

export const nodeTypeLabels: Record<SystemNodeType, string> = {
  user: 'User',
  gateway: 'Gateway',
  server: 'Service',
  database: 'Database',
  cache: 'Cache',
  queue: 'Queue',
};
