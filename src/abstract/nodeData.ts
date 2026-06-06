import type {
  Capability,
  SystemNodeData,
  SystemNodeDefinition,
  SystemNodeStatus,
  SystemNodeType,
} from '../features/playground/types/playground.types';

export type { Capability, SystemNodeData, SystemNodeDefinition, SystemNodeStatus, SystemNodeType };

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

export const systemNodeDefinitions: Record<SystemNodeType, SystemNodeDefinition> = {
  user: {
    label: 'User',
    capabilities: ['emit_request'],
  },
  gateway: {
    label: 'Gateway',
    capabilities: ['emit_request', 'receive_request'],
  },
  server: {
    label: 'Service',
    capabilities: ['emit_request', 'receive_request', 'emit_query', 'publish_message', 'compute'],
  },
  database: {
    label: 'Database',
    capabilities: ['receive_query', 'persistent_storage'],
  },
  cache: {
    label: 'Cache',
    capabilities: ['receive_query', 'cache_storage'],
  },
  queue: {
    label: 'Queue',
    capabilities: ['receive_message', 'message_broker'],
  },
};

export const nodeTypeLabels: Record<SystemNodeType, string> = {
  user: systemNodeDefinitions.user.label,
  gateway: systemNodeDefinitions.gateway.label,
  server: systemNodeDefinitions.server.label,
  database: systemNodeDefinitions.database.label,
  cache: systemNodeDefinitions.cache.label,
  queue: systemNodeDefinitions.queue.label,
};
