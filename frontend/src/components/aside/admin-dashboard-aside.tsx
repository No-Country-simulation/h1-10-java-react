'use client'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ADMIN_DASHBOARD_ROUTES, Routes } from '@/utils'
import { BellIcon, Package2Icon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function AdminDashboardAside() {
  const pathname = usePathname()

  return (
    <aside className='hidden max-h-screen border-r md:block'>
      <div className='flex items-center gap-2 border-b px-4 py-3'>
        <Link href={Routes.Dashboard}>
          <Package2Icon size={24} />
        </Link>
        <Button variant='outline' size='icon' className='ml-auto'>
          <BellIcon size={16} />
        </Button>
      </div>
      <nav className='flex flex-col'>
        {ADMIN_DASHBOARD_ROUTES.map((route) => (
          <Link
            key={route.name}
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
        ))}
      </nav>
    </aside>
  )
}

export { AdminDashboardAside }
