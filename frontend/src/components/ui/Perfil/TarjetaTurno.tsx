import React from 'react'
import { Button } from '../button'
export default function TarjetaTurno() {
  return (
    <section className='border-2 rounded-lg p-3 flex flex-col max-w-[400px] mb-5'>
      <div className='mb-4'>
        <h6 className='font-semibold mb-2 text-sm'>No tienes turnos programadas actualmente</h6>
        <p className='text-xs'>¿Necesitas programar uno?</p>
      </div>
      <Button className='ml-auto text-xs'>Programar turno</Button>
    </section>
  )
}
