import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="min-h-dvh bg-[color:var(--color-brand)] text-white">
      <div className="mx-auto flex min-h-dvh max-w-[1280px] flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <Link className="underline underline-offset-4 hover:text-white/90" to="/login">
          Go to login
        </Link>
      </div>
    </div>
  )
}

