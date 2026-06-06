import { Handle, Position, type NodeProps } from 'reactflow';
import { cn } from '../../../lib/cn';
import type { SystemNodeData } from '../../../abstract/nodeData';
import { nodeTypeLabels, statusClasses, statusLabels } from '../../../abstract/nodeData';

type BaseSystemNodeProps = NodeProps<SystemNodeData> & {
  accentClassName?: string;
  icon: string;
  showSource?: boolean;
  showTarget?: boolean;
};

export function BaseSystemNode({
  data,
  selected,
  accentClassName = 'bg-primary-600',
  icon,
  showSource = true,
  showTarget = true,
}: BaseSystemNodeProps) {
  return (
    <article
      className={cn(
        'w-56 rounded-lg border bg-[var(--bg-card)] p-3 shadow-sm transition',
        selected ? 'border-primary-500 ring-2 ring-primary-100' : 'border-[var(--border-soft)]',
      )}
    >
      {showTarget ? <Handle type="target" position={Position.Left} /> : null}

      <div className="flex items-start gap-3">
        <div
          className={cn(
            'flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-sm font-semibold text-white',
            accentClassName,
          )}
          aria-hidden="true"
        >
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="truncate text-sm font-semibold text-[var(--text-primary)]">{data.name}</h3>
            <span className={cn('rounded-full px-2 py-0.5 text-[10px] font-medium ring-1', statusClasses[data.status])}>
              {statusLabels[data.status]}
            </span>
          </div>
          <p className="mt-0.5 text-xs text-[var(--text-secondary)]">{nodeTypeLabels[data.type]}</p>
        </div>
      </div>

      <div className="mt-3 rounded-md border border-[var(--border-light)] bg-[var(--bg-section)] px-3 py-2">
        <p className="text-[10px] font-medium uppercase text-[var(--text-muted)]">{data.metric.label}</p>
        <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">{data.metric.value}</p>
      </div>

      {showSource ? <Handle type="source" position={Position.Right} /> : null}
    </article>
  );
}
