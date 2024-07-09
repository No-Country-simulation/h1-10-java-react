import Link from 'next/link'
import React from 'react'
import MedicTime from '../iconsComponents/MedicTime'
import { useParams, usePathname } from 'next/navigation'
import { RutasProps } from '@/tipos/rutas'

const SideBarLink = ({ icon, href, texto }: RutasProps) => {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={`mb-4 flex w-full items-center gap-3 rounded-r-[6px] ${pathname === href && 'bg-[#EAF0FF]'} py-3 pl-6 pr-3 font-medium`}
    >
      <div className='h-7 w-7'>{icon}</div>
      <span className='text-lg'>{texto}</span>
    </Link>
  )
}

export default SideBarLink
