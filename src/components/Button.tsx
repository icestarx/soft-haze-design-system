import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'soft' | 'quiet' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  children: ReactNode;
};

export function Button({ variant = 'secondary', size = 'medium', loading = false, disabled, className = '', children, ...props }: ButtonProps) {
  const variantClass = variant === 'secondary' ? '' : `sh-button--${variant}`;
  const sizeClass = size === 'medium' ? '' : `sh-button--${size}`;
  return (
    <button
      {...props}
      className={`sh-button ${variantClass} ${sizeClass} ${loading ? 'sh-button--loading' : ''} ${className}`.trim()}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
    >
      {loading && <span className="sh-button__spinner" aria-hidden="true" />}
      {children}
    </button>
  );
}
