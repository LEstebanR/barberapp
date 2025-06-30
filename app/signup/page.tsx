'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Logo } from '@/components/ui/logo'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Form from 'next/form'
import Link from 'next/link'
import { useActionState } from 'react'

import { createBarberShop } from './actions'

export default function SignUpPage() {
  const [state, formAction, isPending] = useActionState(createBarberShop, null)

  if (state?.success) {
    return (
      <div className="flex flex-col justify-center items-center text-center p-4">
        <Logo size={100} />
        <Card className="p-4 w-full mt-4 py-8 max-w-md">
          <CardContent className="flex flex-col items-center gap-4">
            <div className="text-green-600 text-6xl">✓</div>
            <h2 className="text-2xl font-bold text-green-600">
              ¡Cuenta creada!
            </h2>
            <p className="text-muted-foreground text-center">{state.message}</p>
            <p className="text-sm text-muted-foreground text-center">
              Una vez que confirmes tu correo, podrás iniciar sesión en tu
              barbería.
            </p>
            <Link href="/login">
              <Button className="mt-4">Ir a iniciar sesión</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-center items-center text-center p-4">
      <Logo size={100} />
      <h2 className="text-2xl text-bold">Bienvenido</h2>
      <p className="text-muted-foreground text-lg">
        Ingresa tus datos para registrarte en BarberApp
      </p>
      <Card className="p-4 w-full mt-4 py-8">
        <CardTitle>Registrate</CardTitle>
        <CardContent>
          <Form className="flex flex-col gap-4" action={formAction}>
            {state?.error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {state.message}
              </div>
            )}
            <div className="flex flex-col gap-1">
              <Label htmlFor="email">Correo</Label>
              <Input
                placeholder="nombre@mail.com"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label>Contraseña</Label>
              <Input
                placeholder="*******"
                type="password"
                name="password"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label>Nombre de tu barbería</Label>
              <Input
                placeholder="Ingresa el nombre de tu barbería"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label>Tamaño de tu barbería</Label>
              <Select name="size" required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona el tamaño de tu barbería" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Tamaño de la barbería</SelectLabel>
                    <SelectItem value="solo">Solo (1 barbero)</SelectItem>
                    <SelectItem value="small">
                      Pequeña (2-3 Barberos)
                    </SelectItem>
                    <SelectItem value="medium">
                      Mediana (4-7 barberos)
                    </SelectItem>
                    <SelectItem value="large">Grande (+8 barberos)</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" disabled={isPending}>
              {isPending ? 'Creando barbería..' : 'Crear barbería'}
            </Button>
          </Form>
        </CardContent>
      </Card>
      <p className="mt-4">
        ¿Ya tienes una cuenta?{' '}
        <span>
          <Link href="/login" className="hover:underline hover:text-primary">
            Inicia sesión
          </Link>
        </span>
      </p>
    </div>
  )
}
