'use client'
import React from 'react'
import HandWelcome from '../iconsComponents/HandWelcome'
import { Separator } from '@/components/ui/separator'
import LogoutIcon from '../iconsComponents/LogoutIcon'

const SideBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='bg-white lg:w-full' style={{ height: 'calc( 100vh - 16px)' }}>
        <div className=''>
          <div className='p-6'>
            <div className='flex gap-3 pt-10'>
              <div className='h-9 w-auto'>
                <HandWelcome />
              </div>
              <h3 className='text-4xl font-medium'>!Buenos días!</h3>
            </div>
          </div>
          <div className='mx-6 my-8'>
            <Separator />
          </div>
          <nav className='w-full pr-6 pt-4'>{children}</nav>
          <div className='mx-6 my-8'>
            <Separator />
          </div>
          <div className='px-6'>
            <button className={`mb-4 flex w-full items-center gap-2 rounded-r-[6px] py-3 pr-3 font-medium`}>
              <div className='h-8 w-8'>
                <LogoutIcon color='#2C3447' />
              </div>
              <span className='text-lg'>Cerrar sesión</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar
