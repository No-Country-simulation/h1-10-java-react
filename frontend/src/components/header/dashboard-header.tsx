'use client'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { ADMIN_DASHBOARD_ROUTES, Routes } from '@/utils'
import { CircleUserIcon, Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function DashboardHeader() {
  const pathname = usePathname()

  return (
    <header className='flex items-center gap-4 border-b px-4 py-3'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='md:hidden'>
            <Menu size={20} />
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <SheetTitle className='sr-only'>Barra de navegación lateral</SheetTitle>
          <SheetDescription className='sr-only'>Navegación lateral para la aplicación</SheetDescription>
          <nav className='grid gap-2 font-medium'>
            {ADMIN_DASHBOARD_ROUTES.map((route) => (
              <SheetClose asChild key={route.name}>
                <Link
                  href={route.href}
                  className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'justify-start gap-x-2',
                    pathname === route.href && 'bg-accent text-accent-foreground'
                  )}
                >
                  <route.icon size={20} />
                  {route.name}
                </Link>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' size='icon' className='ml-auto'>
            <CircleUserIcon size={20} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>Mi perfil</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href={Routes.DashboardSettings}>Configuración</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}

export { DashboardHeader }
