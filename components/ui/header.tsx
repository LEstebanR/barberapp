import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Logo } from '@/components/ui/logo'
import { LogIn, MenuIcon, User } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  return (
    <header className="w-full  flex items-center justify-center h-14 border-b fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="flex items-center justify-between md:w-8/12 w-full px-4 md:px-0">
        <Logo />
        <div className="hidden md:flex gap-2">
          <Link href="/login">
            <Button variant="outline">Iniciar sesión</Button>
          </Link>
          <Link href="/signup">
            <Button>Registrarse</Button>
          </Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="md:hidden">
              <MenuIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-screen rounded-t-none">
            <Link href="/login" className="flex gap-2 items-center">
              <DropdownMenuItem>
                {' '}
                <User />
                <p className="text-xl">Iniciar sesión</p>
              </DropdownMenuItem>
            </Link>
            <Link href="/signup" className="flex gap-2 items-center">
              <DropdownMenuItem>
                <LogIn />
                <p className="text-xl">Registrarse</p>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
