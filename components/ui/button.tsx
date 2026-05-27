import React from 'react'
import { cn } from '../../lib/utils'

type Variant = 'primary' | 'secondary' | 'whatsapp'
type Size = 'sm' | 'md' | 'lg'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  full?: boolean
}

const base = 'inline-flex items-center justify-center rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

const variantStyles: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:bg-primaryDark focus:ring-primary/50',
  secondary: 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 focus:ring-gray-200',
  whatsapp: 'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-300',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = 'primary', size = 'md', full = false, children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        base,
        variantStyles[variant],
        sizeStyles[size],
        full ? 'w-full' : 'inline-flex',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
})

export default Button
