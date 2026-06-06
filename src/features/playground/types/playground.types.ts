export type SystemNodeType = 'user' | 'gateway' | 'server' | 'database' | 'cache' | 'queue';

export type SystemNodeStatus = 'healthy' | 'degraded' | 'idle';

export type Capability =
  | 'emit_request'
  | 'receive_request'
  | 'emit_query'
  | 'receive_query'
  | 'publish_message'
  | 'receive_message'
  | 'persistent_storage'
  | 'cache_storage'
  | 'message_broker'
  | 'compute';

export type SystemNodeDefinition = {
  label: string;
  capabilities: Capability[];
};

export type SystemNodeMetric = {
  label: string;
  value: string;
};

export type SystemNodeData = {
  name: string;
  type: SystemNodeType;
  status: SystemNodeStatus;
  metric: SystemNodeMetric;
};
