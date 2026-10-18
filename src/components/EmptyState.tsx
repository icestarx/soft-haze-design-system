import type { HTMLAttributes, ReactNode } from 'react';

export type EmptyStateProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
};

export function EmptyState({ title, description, icon, action, className = '', ...props }: EmptyStateProps) {
  return (
    <div className={`sh-empty-state ${className}`.trim()} {...props}>
      {icon && <div className="sh-empty-state__icon" aria-hidden="true">{icon}</div>}
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {action && <div className="sh-empty-state__action">{action}</div>}
    </div>
  );
}
