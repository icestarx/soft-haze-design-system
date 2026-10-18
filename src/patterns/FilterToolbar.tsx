import type { ReactNode } from 'react';

export function FilterToolbar({ placeholder = '搜索内容', children }: { placeholder?: string; children?: ReactNode }) {
  return (
    <div className="sh-filter-toolbar">
      <label className="sh-filter-search"><span aria-hidden="true">⌕</span><input aria-label={placeholder} placeholder={placeholder} /></label>
      <div className="sh-filter-toolbar__controls">{children}</div>
    </div>
  );
}
