import React from 'react'
import { CONTAINER } from '../../lib/constants'
import { cn } from '../../lib/utils'

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
}

export default function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn('w-full mx-auto px-4', className)}
      style={{ maxWidth: CONTAINER.maxWidth }}
      {...props}
    >
      {children}
    </div>
  )
}
