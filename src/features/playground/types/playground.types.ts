export type SystemNodeType = 'user' | 'gateway' | 'server' | 'database' | 'cache' | 'queue';

export type SystemNodeStatus = 'healthy' | 'degraded' | 'idle';

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
