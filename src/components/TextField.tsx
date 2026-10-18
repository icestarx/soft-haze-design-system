import { useId, type InputHTMLAttributes } from 'react';

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
  error?: string;
};

export function TextField({ label, hint, error, id, className = '', 'aria-describedby': ariaDescribedBy, 'aria-invalid': ariaInvalid, ...props }: TextFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const describedBy = [ariaDescribedBy, hintId, errorId].filter(Boolean).join(' ') || undefined;
  return (
    <label className="sh-field" htmlFor={inputId}>
      <span>{label}</span>
      <input
        id={inputId}
        className={`sh-input ${error ? 'sh-input--error' : ''} ${className}`.trim()}
        aria-invalid={error ? true : ariaInvalid}
        aria-describedby={describedBy}
        {...props}
      />
      {hint && <span id={hintId} className="sh-field__hint">{hint}</span>}
      {error && <span id={errorId} className="sh-field__error">{error}</span>}
    </label>
  );
}
