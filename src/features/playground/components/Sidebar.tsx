import { nodeTypeLabels } from '../nodes/nodeData';

const sidebarItems = [
  { type: 'user', metric: 'Requests' },
  { type: 'gateway', metric: 'RPS' },
  { type: 'server', metric: 'Latency' },
  { type: 'database', metric: 'Queries' },
  { type: 'cache', metric: 'Hit Rate' },
  { type: 'queue', metric: 'Queue Size' },
] as const;

export function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-[var(--border-light)] bg-[var(--bg-card)] px-5 py-6 lg:block">
      <div>
        <p className="text-xs font-semibold uppercase text-primary-600">Playground</p>
        <h1 className="mt-2 text-xl font-semibold text-[var(--text-primary)]">System canvas</h1>
        <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
          Initial building blocks for modeling request flow through common infrastructure.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-sm font-semibold text-[var(--text-primary)]">Node catalog</h2>
        <div className="mt-3 space-y-2">
          {sidebarItems.map((item) => (
            <div key={item.type} className="rounded-lg border border-[var(--border-soft)] bg-[var(--bg-section)] px-3 py-2">
              <p className="text-sm font-medium text-[var(--text-primary)]">{nodeTypeLabels[item.type]}</p>
              <p className="mt-1 text-xs text-[var(--text-secondary)]">{item.metric} placeholder</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
