import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';
import { ChevronDown } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options: SelectOption[];
  label?: string;
  error?: string;
  helperText?: string;
  onChange?: (value: string) => void;
  fullWidth?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      options,
      label,
      error,
      helperText,
      onChange,
      fullWidth = false,
      id,
      ...props
    },
    ref
  ) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, '-');

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };

    return (
      <div className={cn(fullWidth ? 'w-full' : '', className)}>
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-secondary-700 mb-1"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          <select
            id={selectId}
            className={cn(
              "block w-full appearance-none rounded-md border border-secondary-300 bg-white py-2 pl-4 pr-10 shadow-sm",
              "focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-500/20",
              error ? "border-error-500 focus:border-error-500 focus:ring-error-500/20" : "",
              props.disabled ? "bg-secondary-100 cursor-not-allowed" : "",
              className
            )}
            onChange={handleChange}
            ref={ref}
            {...props}
          >
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            <ChevronDown className="h-4 w-4 text-secondary-500" />
          </div>
        </div>
        
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

Select.displayName = 'Select';