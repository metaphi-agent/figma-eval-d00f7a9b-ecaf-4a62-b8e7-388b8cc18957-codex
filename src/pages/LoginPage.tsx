import { type FormEvent, useMemo, useState } from 'react'

import Button from '../components/ui/Button'
import TextInput from '../components/ui/TextInput'

type FormState = {
  username: string
  password: string
}

function validate(values: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {}
  if (!values.username.trim()) errors.username = 'Username is required.'
  if (!values.password) errors.password = 'Password is required.'
  return errors
}

export default function LoginPage() {
  const [values, setValues] = useState<FormState>({ username: '', password: '' })
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const errors = useMemo(() => validate(values), [values])
  const canSubmit = Object.keys(errors).length === 0 && !isSubmitting

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setTouched({ username: true, password: true })

    if (Object.keys(errors).length > 0) return

    setIsSubmitting(true)
    try {
      await new Promise((r) => setTimeout(r, 700))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[color:var(--color-primary)]">
      <img
        src="./assets/illustrations/login-bg.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-left-bottom"
      />

      <div className="relative flex min-h-screen items-center justify-center px-6 py-10">
        <div className="w-[300px] max-w-[calc(100vw-48px)]">
          <form onSubmit={onSubmit} className="w-full">
            <div className="flex flex-col items-center">
              <img
                src="./assets/icons/cart.svg"
                alt=""
                aria-hidden="true"
                className="h-auto w-[124px] select-none"
              />

              <div className="mt-[72px] w-full space-y-5">
                <TextInput
                  iconSrc="./assets/icons/user.svg"
                  label="Username"
                  value={values.username}
                  autoComplete="username"
                  onChange={(e) => setValues((v) => ({ ...v, username: e.target.value }))}
                  onBlur={() => setTouched((t) => ({ ...t, username: true }))}
                  error={touched.username ? errors.username : undefined}
                />
                <TextInput
                  iconSrc="./assets/icons/lock.svg"
                  label="Password"
                  type="password"
                  value={values.password}
                  autoComplete="current-password"
                  onChange={(e) => setValues((v) => ({ ...v, password: e.target.value }))}
                  onBlur={() => setTouched((t) => ({ ...t, password: true }))}
                  error={touched.password ? errors.password : undefined}
                />
              </div>

              <div className="mt-[43px] w-full">
                <Button type="submit" isLoading={isSubmitting} disabled={!canSubmit}>
                  Login
                </Button>
                <div className="mt-[11px] flex justify-end">
                  <a
                    href="#"
                    className="text-[16px] font-medium text-white transition-colors duration-150 hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-primary)]"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
