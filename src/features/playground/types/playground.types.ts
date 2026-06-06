export type SystemNodeType = 'user' | 'gateway' | 'server' | 'database' | 'cache' | 'queue';

export type SystemNodeStatus = 'healthy' | 'degraded' | 'idle';

export type DatabaseKind =
  | 'relational_db'
  | 'document_db'
  | 'key_value_db'
  | 'wide_column_db'
  | 'search_db'
  | 'graph_db';

export type MessagingKind = 'message_queue' | 'pub_sub' | 'stream';

export type ComputeKind = 'application_server' | 'worker' | 'scheduled_job';

export type EdgeKind = 'cdn' | 'load_balancer' | 'api_gateway';

export type ClientKind = 'web_client' | 'mobile_client' | 'external_system';

export type SystemNodeKind = DatabaseKind | MessagingKind | ComputeKind | EdgeKind | ClientKind;

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
  kind?: SystemNodeKind;
  status: SystemNodeStatus;
  metric: SystemNodeMetric;
};
