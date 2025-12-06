import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      fullWidth = false,
      id,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className={cn(fullWidth ? 'w-full' : '', className)}>
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-secondary-700 mb-1"
          >
            {label}
          </label>
        )}
        
        <textarea
          id={textareaId}
          className={cn(
            "block w-full rounded-md shadow-sm border-secondary-300 focus:border-primary-500 focus:ring focus:ring-primary-500/20",
            "text-secondary-900 placeholder:text-secondary-400 transition-colors py-2 px-4",
            error ? "border-error-500 focus:border-error-500 focus:ring-error-500/20" : "",
            props.disabled ? "bg-secondary-100 cursor-not-allowed" : "",
            className
          )}
          rows={rows}
          ref={ref}
          {...props}
        />
        
        {(error || helperText) && (
          <p
            className={cn(
              "mt-1 text-sm",
              error ? "text-error-600" : "text-secondary-500"
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';