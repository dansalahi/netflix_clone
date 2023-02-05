import React, { FC, ButtonHTMLAttributes } from 'react'
import AppButtonSpinner from './AppButtonSpinner'

type Variant = 'primary' | 'secondary' | 'tertiary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
type Size = 'sm' | 'md' | 'lg'
export type AppButtonProps = {
  type: 'submit' | 'reset' | 'button'
  variant: Variant
  children: React.ReactElement | string
  size?: Size
  extendClass?: string
  isLoading?: boolean
  isFull?: boolean
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
} & ButtonHTMLAttributes<HTMLButtonElement>

const PrimaryClasses = ' bg-blue-500 hover:bg-blue-600 text-white '
const DangerClasses = ' bg-red-500 hover:bg-red-600 text-white '
const DefaultClasses = ' bg-white hover:bg-gray-200 text-gray-500 border border-gray-200 '
const SecondaryClasses = ' bg-gray-700 hover:text-gray-700 hover:bg-white text-white border border-gray-200 '
const successClasses = ' bg-green-500 hover:bg-green-600 text-white '

const selectVariant = (variant: Variant) => {
  switch (variant) {
    case 'primary':
      return PrimaryClasses
    case 'danger':
      return DangerClasses
    case 'light':
      return DefaultClasses
    case 'secondary':
      return SecondaryClasses
    case 'success':
      return successClasses
    default:
      return DefaultClasses
  }
}

const selectSize = (size: Size) => {
  switch (size) {
    case 'sm':
      return 'px-2 py-1 text-xs'
    case 'lg':
      return 'px-4 py-2 text-lg'
    default:
      return 'px-3 py-2 text-base'
  }
}
const AppButton: FC<AppButtonProps> = ({
  onClick,
  size,
  variant,
  type,
  children,
  extendClass,
  isLoading,
  isFull,
  ...otherProps
}) => {
  let classes = `btn ${size ? selectSize(size) : 'px-5 py-2.5 '} ${selectVariant(variant)} ${isLoading ? 'cursor-not-allowed opacity-75 ' : ''
    } ${extendClass || ''}`
  classes += isFull ? ' w-full' : ''
  return (
    // eslint-disable-next-line react/button-has-type
    <button onClick={onClick} type={type} disabled={isLoading} className={classes} {...otherProps}>
      {isLoading ? <AppButtonSpinner height={22} /> : children}
    </button>
  )
}
AppButton.defaultProps = {
  size: 'lg',
  extendClass: '',
  isLoading: false,
  isFull: false,
  onClick: () => { }
}

export default AppButton
