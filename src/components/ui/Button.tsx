import clsx from 'clsx'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean
}

function Spinner() {
  return (
    <span
      aria-hidden
      className="h-4 w-4 animate-spin rounded-full border-2 border-[rgba(33,72,192,0.25)] border-t-[color:var(--color-brand)]"
    />
  )
}

export default function Button({ className, disabled, isLoading, children, ...props }: ButtonProps) {
  const isDisabled = disabled || isLoading

  return (
    <button
      {...props}
      disabled={isDisabled}
      className={clsx(
        'inline-flex h-[45px] items-center justify-center rounded-[4px] bg-white px-5',
        'text-[16px] font-semibold uppercase text-[color:var(--color-brand)]',
        'shadow-[0_4px_4px_rgba(0,0,0,0.30)]',
        'transition-transform transition-colors duration-150',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2',
        'hover:bg-white/95 active:translate-y-px',
        'disabled:cursor-not-allowed disabled:opacity-70',
        className
      )}
    >
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          <Spinner />
          <span>{children}</span>
        </span>
      ) : (
        children
      )}
    </button>
  )
}
