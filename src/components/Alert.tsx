import type { HTMLAttributes, ReactNode } from 'react';

export type AlertProps = HTMLAttributes<HTMLDivElement> & {
  tone?: 'info' | 'success' | 'warning' | 'danger';
  title?: string;
  children: ReactNode;
};

export function Alert({ tone = 'info', title, children, className = '', role, ...props }: AlertProps) {
  const liveRole = role ?? (tone === 'danger' || tone === 'warning' ? 'alert' : 'status');
  return (
    <div className={`sh-alert sh-alert--${tone} ${className}`.trim()} role={liveRole} {...props}>
      <span className="sh-alert__marker" aria-hidden="true" />
      <div className="sh-alert__content">
        {title && <strong className="sh-alert__title">{title}</strong>}
        <div>{children}</div>
      </div>
    </div>
  );
}
