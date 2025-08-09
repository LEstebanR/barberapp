'use server'

import { createClient } from '@/lib/supabase/server'

type ActionState = {
  success: boolean
  message: string
  error?: string
  data?: unknown
}

export async function createBarberShop(
  prevState: ActionState | null,
  formData: FormData
): Promise<ActionState> {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const name = formData.get('name') as string
  const size = formData.get('size') as string

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        size,
      },
    },
  })

  if (error) {
    console.log('Error al registrar:', error)
    return {
      success: false,
      message: 'Error al crear la cuenta. Por favor intenta de nuevo.',
      error: error.message,
    }
  }

  console.log('Usuario registrado exitosamente:', data)
  return {
    success: true,
    message:
      'Cuenta creada exitosamente. Revisa tu correo para confirmar tu inscripción.',
    data,
  }
}
