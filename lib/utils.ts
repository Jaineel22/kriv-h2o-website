import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export function noop() {
  return undefined
}

// ClassName helper using clsx + tailwind-merge
export function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(...inputs))
}

export type ClassValue = Parameters<typeof clsx>[0]
