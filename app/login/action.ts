'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function Login(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email')
  const password = formData.get('password')

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    throw new Error('Credenciales incorrectas')
  }

  redirect('/dashboard')

  console.log(data, error)
}
