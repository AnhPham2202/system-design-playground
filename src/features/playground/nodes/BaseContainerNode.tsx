import { Handle, Position, type NodeProps } from 'reactflow';
import { cn } from '../../../lib/cn';
import type { SystemNodeData } from './nodeData';
import { nodeTypeLabels, statusClasses, statusLabels } from './nodeData';

type BaseContainerNodeProps = NodeProps<SystemNodeData> & {
  accentClassName?: string;
  icon: string;
  inputHandleId?: string;
  outputHandleId?: string;
  showSource?: boolean;
  showTarget?: boolean;
};

export function BaseContainerNode({
  data,
  selected,
  accentClassName = 'bg-primary-600',
  icon,
  inputHandleId = 'container-input',
  outputHandleId = 'container-output',
  showSource = true,
  showTarget = true,
}: BaseContainerNodeProps) {
  return (
    <section
      className={cn(
        'relative flex h-full min-h-72 w-full min-w-[34rem] flex-col rounded-lg border bg-[var(--bg-section)]/80 p-3 pl-16 shadow-sm transition',
        selected ? 'border-primary-500 ring-2 ring-primary-100' : 'border-[var(--border-soft)]',
      )}
    >
      <div className="absolute left-0 top-1/2 z-10 flex h-16 w-12 -translate-y-1/2 items-center justify-center rounded-r-md border-y border-r border-[var(--border-soft)] bg-[var(--bg-card)] shadow-sm">
        <span className="text-[10px] font-semibold uppercase text-[var(--text-muted)]">IN</span>
      </div>

      {showTarget ? <Handle id={inputHandleId} type="target" position={Position.Left} className="!top-1/2 !z-20" /> : null}
      <Handle id={outputHandleId} type="source" position={Position.Left} className="!left-12 !top-1/2 !z-20" />

      <div className="flex items-start justify-between gap-3 border-b border-[var(--border-light)] pb-3">
        <div className="flex min-w-0 items-start gap-3">
          <div
            className={cn(
              'flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-sm font-semibold text-white',
              accentClassName,
            )}
            aria-hidden="true"
          >
            {icon}
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="truncate text-sm font-semibold text-[var(--text-primary)]">{data.name}</h3>
              <span
                className={cn('shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ring-1', statusClasses[data.status])}
              >
                {statusLabels[data.status]}
              </span>
            </div>
            <p className="mt-0.5 text-xs text-[var(--text-secondary)]">{nodeTypeLabels[data.type]}</p>
          </div>
        </div>

        <div className="shrink-0 rounded-md border border-[var(--border-light)] bg-[var(--bg-card)] px-3 py-2 text-right">
          <p className="text-[10px] font-medium uppercase text-[var(--text-muted)]">{data.metric.label}</p>
          <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">{data.metric.value}</p>
        </div>
      </div>

      <div className="pointer-events-none flex-1 rounded-b-md bg-[linear-gradient(90deg,rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(rgba(148,163,184,0.16)_1px,transparent_1px)] bg-[size:24px_24px]" />

      {showSource ? <Handle type="source" position={Position.Right} /> : null}
    </section>
  );
}
