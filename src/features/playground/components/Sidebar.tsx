import { useState, type DragEvent } from 'react';
import type { SystemNodeKind, SystemNodeMetric, SystemNodeType } from '../types/playground.types';

export const PLAYGROUND_NODE_DRAG_TYPE = 'application/system-design-node';

export type SidebarNodeDragData = {
  type: SystemNodeType;
  kind: SystemNodeKind;
  name: string;
  metric: SystemNodeMetric;
};

type SidebarNodeItem = SidebarNodeDragData & {
  description: string;
};

type SidebarNodeGroup = {
  id: string;
  label: string;
  items: SidebarNodeItem[];
};

const nodeGroups: SidebarNodeGroup[] = [
  {
    id: 'client',
    label: 'Client',
    items: [
      {
        type: 'user',
        kind: 'web_client',
        name: 'Web Client',
        metric: { label: 'Requests', value: '1.2k/min' },
        description: 'Browser traffic',
      },
      {
        type: 'user',
        kind: 'mobile_client',
        name: 'Mobile Client',
        metric: { label: 'Requests', value: '840/min' },
        description: 'Native app traffic',
      },
      {
        type: 'user',
        kind: 'external_system',
        name: 'External System',
        metric: { label: 'Requests', value: '320/min' },
        description: 'Internal or partner API calls',
      },
    ],
  },
  {
    id: 'edge',
    label: 'Edge',
    items: [
      {
        type: 'gateway',
        kind: 'load_balancer',
        name: 'Load Balancer',
        metric: { label: 'RPS', value: '1.5k' },
        description: 'Distributes inbound traffic',
      },
      {
        type: 'gateway',
        kind: 'api_gateway',
        name: 'API Gateway',
        metric: { label: 'RPS', value: '950' },
        description: 'Routing, auth, rate limits',
      },
    ],
  },
  {
    id: 'compute',
    label: 'Compute',
    items: [
      {
        type: 'server',
        kind: 'application_server',
        name: 'Application Server',
        metric: { label: 'Latency', value: '48 ms' },
        description: 'Synchronous request handling',
      },
      {
        type: 'server',
        kind: 'worker',
        name: 'Worker Service',
        metric: { label: 'Jobs', value: '260/min' },
        description: 'Async background processing',
      },
      {
        type: 'server',
        kind: 'scheduled_job',
        name: 'Scheduled Job',
        metric: { label: 'Runs', value: '24/day' },
        description: 'Cron or periodic background task',
      },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    items: [
      {
        type: 'database',
        kind: 'relational_db',
        name: 'Relational Database',
        metric: { label: 'Queries', value: '310 qps' },
        description: 'Relational SQL database',
      },
      {
        type: 'database',
        kind: 'document_db',
        name: 'MongoDB',
        metric: { label: 'Ops', value: '420/sec' },
        description: 'Document NoSQL database',
      },
      {
        type: 'database',
        kind: 'key_value_db',
        name: 'DynamoDB',
        metric: { label: 'Ops', value: '1.2k/sec' },
        description: 'Persistent key-value store',
      },
      {
        type: 'database',
        kind: 'wide_column_db',
        name: 'Cassandra',
        metric: { label: 'Writes', value: '1.8k/sec' },
        description: 'Wide-column distributed store',
      },
      {
        type: 'database',
        kind: 'search_db',
        name: 'Search Index',
        metric: { label: 'Searches', value: '160 qps' },
        description: 'Elasticsearch/OpenSearch style reads',
      },
      {
        type: 'database',
        kind: 'graph_db',
        name: 'Graph DB',
        metric: { label: 'Traversals', value: '90 qps' },
        description: 'Neo4j-style relationship queries',
      },
    ],
  },
  {
    id: 'cache',
    label: 'Cache',
    items: [
      {
        type: 'cache',
        kind: 'key_value_db',
        name: 'Cache',
        metric: { label: 'Hit Rate', value: '92%' },
        description: 'In-memory key-value/data structures',
      },
      {
        type: 'cache',
        kind: 'cdn',
        name: 'CDN',
        metric: { label: 'Hit Rate', value: '96%' },
        description: 'Cache static/content near users',
      },
    ],
  },
  {
    id: 'messaging',
    label: 'Messaging',
    items: [
      {
        type: 'queue',
        kind: 'stream',
        name: 'Event Stream',
        metric: { label: 'Lag', value: '240 msg' },
        description: 'Durable event streaming log',
      },
      {
        type: 'queue',
        kind: 'message_queue',
        name: 'Message Queue',
        metric: { label: 'Queue Size', value: '1.1k' },
        description: 'Brokered work queues',
      },
      {
        type: 'queue',
        kind: 'message_queue',
        name: 'SQS Queue',
        metric: { label: 'Queue Size', value: '840' },
        description: 'Managed pull-based queue',
      },
      {
        type: 'queue',
        kind: 'pub_sub',
        name: 'Pub/Sub Topic',
        metric: { label: 'Messages', value: '2.4k/min' },
        description: 'Fan-out event distribution',
      },
    ],
  },
];

export function Sidebar() {
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});

  const toggleGroup = (groupId: string) => {
    setCollapsedGroups((current) => ({ ...current, [groupId]: !current[groupId] }));
  };

  const handleDragStart = (event: DragEvent<HTMLButtonElement>, item: SidebarNodeItem) => {
    const dragData: SidebarNodeDragData = {
      type: item.type,
      kind: item.kind,
      name: item.name,
      metric: item.metric,
    };

    event.dataTransfer.setData(PLAYGROUND_NODE_DRAG_TYPE, JSON.stringify(dragData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className="hidden w-72 shrink-0 border-r border-[var(--border-light)] bg-[var(--bg-card)] px-4 py-5 lg:block">
      <div>
        <p className="text-xs font-semibold uppercase text-primary-600">System Design Playground</p>
        <h1 className="mt-1 text-lg font-semibold text-[var(--text-primary)]">Node palette</h1>
        <p className="mt-2 text-xs leading-5 text-[var(--text-secondary)]">Drag a node onto the canvas.</p>
      </div>

      <div className="mt-5 space-y-2">
        {nodeGroups.map((group) => {
          const isCollapsed = collapsedGroups[group.id] ?? false;

          return (
            <section key={group.id} className="rounded-lg border border-[var(--border-soft)] bg-[var(--bg-section)]">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 px-3 py-2 text-left"
                aria-expanded={!isCollapsed}
                onClick={() => toggleGroup(group.id)}
              >
                <span className="text-sm font-semibold text-[var(--text-primary)]">{group.label}</span>
                <span className="text-xs font-semibold text-[var(--text-muted)]" aria-hidden="true">
                  {isCollapsed ? '+' : '-'}
                </span>
              </button>

              {!isCollapsed ? (
                <div className="space-y-1 border-t border-[var(--border-light)] p-2">
                  {group.items.map((item) => (
                    <button
                      key={`${group.id}-${item.name}`}
                      type="button"
                      draggable
                      onDragStart={(event) => handleDragStart(event, item)}
                      className="flex w-full cursor-grab items-center justify-between gap-3 rounded-md border border-transparent bg-[var(--bg-card)] px-2.5 py-2 text-left shadow-sm transition hover:border-primary-400 hover:bg-white active:cursor-grabbing"
                    >
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-medium text-[var(--text-primary)]">{item.name}</span>
                        <span className="block truncate text-[11px] text-[var(--text-secondary)]">{item.description}</span>
                      </span>
                      <span className="shrink-0 rounded bg-[var(--bg-section)] px-1.5 py-0.5 text-[10px] font-medium text-[var(--text-muted)]">
                        {item.kind}
                      </span>
                    </button>
                  ))}
                </div>
              ) : null}
            </section>
          );
        })}
      </div>
    </aside>
  );
}
