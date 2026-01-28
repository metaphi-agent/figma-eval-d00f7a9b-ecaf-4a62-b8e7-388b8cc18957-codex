import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const LoginPage = lazy(() => import('./pages/LoginPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function RouteFallback() {
  return (
    <div className="min-h-dvh bg-[color:var(--color-brand)]">
      <div className="mx-auto flex min-h-dvh max-w-[1280px] items-center justify-center px-6">
        <div className="text-white/80">Loading…</div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}
