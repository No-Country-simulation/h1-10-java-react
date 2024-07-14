'use client'
import UserIcon from '@/components/iconsComponents/UserIcon'
import SideBar from '@/components/sidebar/SideBar'
import SideBarLink from '@/components/sidebar/SideBarLink'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const rutasUser = [
    { texto: 'Inicio', href: '/dashboard', icon: <UserIcon /> },
    { texto: 'Usuarios', href: '/dashboard/usuarios', icon: <UserIcon /> },
    { texto: 'Productos', href: '/dashboard/productos', icon: <UserIcon /> },
    { texto: 'Ventas', href: '/dashboard/ventas', icon: <UserIcon /> }
  ]

  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <>
      <section className='mx-auto flex h-full w-full px-1 py-2 lg:container lg:gap-5 lg:px-0'>
        {/* Menu desktop */}
        <aside className='hidden h-full overflow-hidden rounded-[30px] border-r border-gray-400 bg-white lg:relative lg:left-0 lg:block lg:flex-1'>
          <SideBar>
            {rutasUser.map((item) => {
              return <SideBarLink key={item.texto} href={item.href} icon={item.icon} texto={item.texto} />
            })}
          </SideBar>
        </aside>

        {/* Menu mobile - drawer  */}
        <Drawer open={isOpen} onClose={toggleDrawer} size={300} direction='left' className='bla bla bla'>
          <SideBar>
            {rutasUser.map((item) => {
              return <SideBarLink key={item.texto} href={item.href} icon={item.icon} texto={item.texto} />
            })}
          </SideBar>
        </Drawer>
        <main className='flex-[2.5] overflow-hidden rounded-[30px] border-r border-gray-400 bg-white p-6'>
          {children}
        </main>
      </section>
      <span className='fixed bottom-4 right-4 lg:hidden'>
        <Button onClick={toggleDrawer}>
          <span className='mx-2'>Menu</span>
        </Button>
      </span>
    </>
  )
}
