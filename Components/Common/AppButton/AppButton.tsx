import React, { FC, ButtonHTMLAttributes } from 'react'
import AppButtonSpinner from './AppButtonSpinner'

export type AppButtonProps = {
  type: 'submit' | 'reset' | 'button'
  variant: 'primary' | 'secondary' | 'tertiary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
  children: React.ReactElement | string
  extendClass?: string
  isLoading?: boolean;
  isFull?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseBtnClass = 'text-center p-2 text-white transition-colors rounded-md cursor-pointer focus:outline-none focus:ring-blue-300 text-sm' +
  ' focus:ring-2 '

const PrimaryClasses = ' bg-primary hover:bg-blue-700'
const DangerClasses = ' bg-red-500 hover:bg-red-600'

const AppButton: FC<AppButtonProps> = ({ onClick, variant, type, children, extendClass, isLoading, isFull, ...otherProps }) => {
  let classes = baseBtnClass + `${variant === 'primary' ? PrimaryClasses : (variant === 'danger' ? DangerClasses : '')} ${extendClass} ${isLoading ? 'cursor-not-allowed opacity-75 p-0' : ''}`
  classes += isFull ? ' w-full' : ''
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={isLoading}
      className={classes}
      {...otherProps}>
      {isLoading ? <AppButtonSpinner /> : children}
    </button>
  )
}

export default AppButton
