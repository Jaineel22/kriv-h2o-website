import React from 'react'
import { cn } from '../../lib/utils'

export interface SectionHeadingProps {
  title: React.ReactNode
  subtitle?: React.ReactNode
  className?: string
}

export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', className)}>
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      {subtitle ? <p className="mt-2 text-sm text-gray-600">{subtitle}</p> : null}
    </div>
  )
}
