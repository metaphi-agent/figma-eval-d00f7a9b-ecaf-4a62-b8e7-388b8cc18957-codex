import type { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean
}

export default function Button({ className, disabled, isLoading, children, ...props }: Props) {
  const isDisabled = disabled || isLoading

  return (
    <button
      type="button"
      disabled={isDisabled}
      className={clsx(
        'h-[45px] w-full rounded-[var(--radius-control)] bg-[color:var(--color-white)] shadow-[var(--shadow-button)]',
        'text-center text-[16px] font-semibold tracking-normal text-[color:var(--color-primary)] uppercase',
        'transition-colors duration-150',
        'hover:bg-white/95 active:bg-white/90',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-primary)]',
        'disabled:cursor-not-allowed disabled:opacity-60',
        className
      )}
      {...props}
    >
      {isLoading ? 'Loading…' : children}
    </button>
  )
}
