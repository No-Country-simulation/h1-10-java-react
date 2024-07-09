import UserIcon from '@/components/iconsComponents/UserIcon'
import SideBar from '@/components/sidebar/SideBar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const rutasUser = [
    { texto: 'Inicio', href: '/dashboard', icon: <UserIcon /> },
    { texto: 'Usuarios', href: '/dashboard/usuarios', icon: <UserIcon /> },
    { texto: 'Productos', href: '/dashboard/productos', icon: <UserIcon /> },
    { texto: 'Ventas', href: '/dashboard/ventas', icon: <UserIcon /> }
  ]

  return (
    <section className='container mx-auto flex h-full gap-5 py-2'>
      <aside className='h-full overflow-hidden rounded-[30px] border-r border-gray-400 bg-white'>
        <SideBar arrayRutas={rutasUser} />
      </aside>
      <main className='overflow-hidden rounded-[30px] border-r border-gray-400 bg-white p-6'>{children}</main>
    </section>
  )
}
