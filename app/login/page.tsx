import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Logo } from '@/components/ui/logo'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center h-[calc(100vh-4rem)] items-center text-center p-4">
      <Logo size={100} />
      <h2 className="text-2xl text-bold">Bienvenido de nuevo</h2>
      <p className="text-muted-foreground text-lg">
        Ingresa tus credenciales para acceder a tu cuenta
      </p>
      <Card className="p-4 w-full mt-4 py-8">
        <CardTitle>Iniciar sesión</CardTitle>
        <CardContent>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <Label>Correo</Label>
              <Input placeholder="nombre@mail.com" type="email" />
            </div>
            <div className="flex flex-col gap-1">
              <Label>Contraseña</Label>
              <Input placeholder="*******" type="password" />
            </div>
            <Button type="submit">Iniciar sesión</Button>
          </form>
        </CardContent>
      </Card>
      <p className="mt-4">
        ¿No tienes una cuenta?{' '}
        <span>
          <Link href="/signup" className="hover:underline hover:text-primary">
            Registrate
          </Link>
        </span>
      </p>
    </div>
  )
}
