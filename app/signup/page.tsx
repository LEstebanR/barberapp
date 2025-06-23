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
import Link from 'next/link'

export default function SignUpPage() {
  return (
    <div className="flex flex-col justify-center  items-center text-center p-4">
      <Logo size={100} />
      <h2 className="text-2xl text-bold">Bienvenido</h2>
      <p className="text-muted-foreground text-lg">
        Ingresa tus datos para registrarte en BarberApp
      </p>
      <Card className="p-4 w-full mt-4 py-8">
        <CardTitle>Registrate</CardTitle>
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
            <div className="flex flex-col gap-1">
              <Label>Nombre de tu barbería</Label>
              <Input
                placeholder="Ingresa el nombre de tu barbería"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label>Tamaño de tu barbería</Label>
              <Select>
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

            <Button type="submit">Registrarse</Button>
          </form>
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
