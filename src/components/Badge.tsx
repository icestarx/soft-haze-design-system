import type { HTMLAttributes, ReactNode } from 'react';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  tone?: 'brand' | 'warm' | 'success';
};

export function Badge({ children, tone = 'brand', className = '', ...props }: BadgeProps) {
  const toneClass = tone === 'brand' ? '' : `sh-badge--${tone}`;
  return <span className={`sh-badge ${toneClass} ${className}`.trim()} {...props}>{children}</span>;
}
