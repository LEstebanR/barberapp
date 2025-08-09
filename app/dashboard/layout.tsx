// app/dashboard/layout.tsx
import { ReactNode } from 'react'

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  return <section>{children}</section>
}
