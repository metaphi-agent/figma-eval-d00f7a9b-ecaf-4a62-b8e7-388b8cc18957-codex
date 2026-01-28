import { useMemo, useState } from 'react'
import Button from '../components/ui/Button'
import TextField from '../components/ui/TextField'

type LoginValues = {
  username: string
  password: string
}

function validate(values: LoginValues) {
  const errors: Partial<Record<keyof LoginValues, string>> = {}

  if (!values.username.trim()) errors.username = 'Username is required.'
  if (!values.password) errors.password = 'Password is required.'

  return errors
}

export default function LoginPage() {
  const [values, setValues] = useState<LoginValues>({ username: '', password: '' })
  const [touched, setTouched] = useState<Partial<Record<keyof LoginValues, boolean>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<string | null>(null)

  const errors = useMemo(() => validate(values), [values])
  const showError = (field: keyof LoginValues) => Boolean(touched[field] && errors[field])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ username: true, password: true })
    setSubmitMessage(null)

    const nextErrors = validate(values)
    if (Object.keys(nextErrors).length > 0) return

    try {
      setIsSubmitting(true)
      await new Promise((r) => setTimeout(r, 650))
      const isDemoSuccess = values.username.trim().toLowerCase() === 'admin' && values.password === 'admin'
      setSubmitMessage(isDemoSuccess ? 'Signed in (demo).' : 'Invalid username or password.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-dvh overflow-hidden bg-[color:var(--color-brand)]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-[-362px] top-[358px] h-[724px] w-[724px] rounded-full bg-[color:var(--color-blob-3)]"
        />
        <div
          className="absolute left-[-286px] top-[434px] h-[572px] w-[572px] rounded-full bg-[color:var(--color-blob-2)]"
        />
        <div
          className="absolute left-[-219px] top-[501px] h-[438px] w-[438px] rounded-full bg-[color:var(--color-blob-1)]"
        />

        <img
          className="absolute left-[416px] top-[-1px] h-auto w-[864px]"
          src="./assets/images/blob.svg"
          alt=""
          draggable={false}
        />
      </div>

      <main className="relative mx-auto flex min-h-dvh max-w-[1280px] items-center justify-center px-6">
        <div className="w-full max-w-[300px]">
          <div className="flex flex-col items-center">
            <img
              src="./assets/icons/cart.svg"
              alt=""
              className="h-[98px] w-[119px]"
              draggable={false}
            />

            <form onSubmit={onSubmit} className="mt-[72px] w-full">
              <div className="space-y-5">
                <TextField
                  id="username"
                  name="username"
                  value={values.username}
                  onChange={(e) => setValues((v) => ({ ...v, username: e.target.value }))}
                  onBlur={() => setTouched((t) => ({ ...t, username: true }))}
                  placeholder="USERNAME"
                  iconSrc="./assets/icons/user.svg"
                  autoComplete="username"
                  required
                  aria-invalid={showError('username') ? 'true' : 'false'}
                  error={showError('username') ? errors.username : undefined}
                />

                <TextField
                  id="password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={(e) => setValues((v) => ({ ...v, password: e.target.value }))}
                  onBlur={() => setTouched((t) => ({ ...t, password: true }))}
                  placeholder="PASSWORD"
                  iconSrc="./assets/icons/lock.svg"
                  autoComplete="current-password"
                  required
                  aria-invalid={showError('password') ? 'true' : 'false'}
                  error={showError('password') ? errors.password : undefined}
                />
              </div>

              <div className="mt-[43px]">
                <Button type="submit" className="w-full" isLoading={isSubmitting}>
                  Login
                </Button>
                <div className="mt-3 flex justify-end">
                  <a
                    href="#"
                    className="text-[16px] font-medium text-white/90 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/80 focus-visible:outline-offset-4"
                  >
                    Forgot password?
                  </a>
                </div>
                {submitMessage ? (
                  <p className="mt-3 text-sm text-white/90" role="status">
                    {submitMessage}
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
