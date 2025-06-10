import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Logo } from '@/components/ui/logo'
import { MenuIcon } from 'lucide-react'

export function Header() {
  return (
    <header className="w-full  flex items-center justify-center h-14 border-b fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="flex items-center justify-between md:w-8/12 w-full px-4 md:px-0">
        <Logo />
        <div className="hidden md:flex gap-2">
          <Button variant="outline">Iniciar sesión</Button>
          <Button>Registrarse</Button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="md:hidden">
              <MenuIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Iniciar sesión</DropdownMenuItem>
            <DropdownMenuItem>Registrarse</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
