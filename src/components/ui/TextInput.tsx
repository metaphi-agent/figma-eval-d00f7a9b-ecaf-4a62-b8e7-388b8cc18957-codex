import type { InputHTMLAttributes } from 'react'
import clsx from 'clsx'

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> & {
  iconSrc: string
  label: string
  error?: string
}

export default function TextInput({ iconSrc, label, error, id, ...props }: Props) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')
  const isInvalid = Boolean(error)

  return (
    <div className="w-full">
      <label className="sr-only" htmlFor={inputId}>
        {label}
      </label>
      <div className="relative">
        <img
          src={iconSrc}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 select-none"
        />
        <input
          id={inputId}
          aria-invalid={isInvalid}
          placeholder={label.toUpperCase()}
          className={clsx(
            'h-[45px] w-full rounded-[var(--radius-control)] bg-transparent px-4 pl-[51px]',
            'border border-white/100 text-white placeholder:text-white/80',
            'text-[14px] font-light uppercase',
            'outline-none transition-colors duration-150',
            'focus:border-white/100 focus:ring-2 focus:ring-white/25 focus:ring-offset-2 focus:ring-offset-[color:var(--color-primary)]',
            isInvalid && 'border-red-200 focus:ring-red-200/25'
          )}
          {...props}
        />
      </div>
      {error ? <p className="mt-1 text-[12px] text-red-100">{error}</p> : null}
    </div>
  )
}
