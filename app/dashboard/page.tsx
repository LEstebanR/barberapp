'use client'

import { Button } from '@/components/ui/button'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function DashboradPage() {
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut()

      if (error) {
        console.error('Error al cerrar sesión:', error)
        return
      }

      console.log('Sesión cerrada exitosamente')
      router.push('/')
    } catch (error) {
      console.error('Error inesperado:', error)
    }
  }

  return (
    <div>
      <p>Dashboard</p>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}
