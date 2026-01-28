import clsx from 'clsx'

type TextFieldProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'id'> & {
  id: string
  iconSrc: string
  error?: string
}

export default function TextField({ className, iconSrc, error, id, ...props }: TextFieldProps) {
  const describedBy = error ? `${id}-error` : undefined

  return (
    <div>
      <div
        className={clsx(
          'group relative flex h-[45px] w-full items-center rounded-[4px] border border-white',
          'transition-colors duration-150',
          error ? 'border-red-200' : 'focus-within:border-white',
          className
        )}
      >
        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
          <img src={iconSrc} alt="" className="h-5 w-5 opacity-90" draggable={false} />
        </div>
        <label htmlFor={id} className="sr-only">
          {props.placeholder ?? id}
        </label>
        <input
          id={id}
          {...props}
          aria-describedby={describedBy}
          className={clsx(
            'h-full w-full bg-transparent pl-[51px] pr-3',
            'text-[14px] font-light uppercase tracking-[0px] text-white placeholder:text-white/70',
            'outline-none',
            'disabled:cursor-not-allowed disabled:opacity-70'
          )}
        />
      </div>
      {error ? (
        <p id={describedBy} className="mt-2 text-xs text-white/90">
          {error}
        </p>
      ) : null}
    </div>
  )
}
