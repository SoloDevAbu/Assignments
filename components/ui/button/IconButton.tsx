import { cn } from '@/utils/helpers';
import { IconButtonProps } from './types';

export const IconButton = ({
  icon,
  label,
  className,
  disabled,
  ...props
}: IconButtonProps) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center p-2 rounded-full',
        'text-gray-500 hover:text-gray-700 hover:bg-gray-100',
        'cursor-pointer',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled}
      aria-label={label}
      {...props}
    >
      {icon}
    </button>
  );
};
