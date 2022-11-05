import React, { ButtonHTMLAttributes } from 'react'
import './AppButton.styles.scss'

type AppButtonProps = {
  type: 'submit' | 'reset' | 'button'
  variant: 'primary' | 'secondary' | 'tertiary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
  children: React.ReactElement | string
  extendClass?: string
  isLoading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const AppButton: React.FC<AppButtonProps> = ({ onClick, variant, type, children, extendClass, isLoading, ...otherProps }) => {
  return <button
      onClick={onClick}
      type={type}
      disabled={isLoading}
      {...otherProps}>
    {children}
  </button>
}

export default AppButton
