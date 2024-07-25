'use client'

import Login from '@/components/Login/Logear'

export default function Home() {
  return (
    <div className='min-h-screen bg-amber-50'>
      {/**Imagen de fondo que se puede cambiar */}

      <section className='mx-auto flex max-w-2xl flex-col px-3 pt-10'>
        <Login />
        {/** <Register isRegister = { Logearme}/>*/}
      </section>
    </div>
  )
}
