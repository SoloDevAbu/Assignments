import { MouseEvent } from 'react';

export interface BaseButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

export interface IconButtonProps extends BaseButtonProps {
  icon: React.ReactNode;
  label?: string;
}

export interface ActionButtonProps extends BaseButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}
