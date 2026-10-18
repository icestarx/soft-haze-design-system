import type { HTMLAttributes, ReactNode } from 'react';

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  padded?: boolean;
};

export function Card({ children, padded = true, className = '', ...props }: CardProps) {
  return <div className={`sh-card ${padded ? 'sh-card--padded' : ''} ${className}`.trim()} {...props}>{children}</div>;
}
