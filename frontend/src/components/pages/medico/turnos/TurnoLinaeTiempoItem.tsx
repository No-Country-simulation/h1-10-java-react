import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { turnosProps } from '@/tipos/turnosProps'
import Link from 'next/link'
import React from 'react'

interface lineaTiempoturnos extends turnosProps {
  setPacienteActivo?: React.Dispatch<React.SetStateAction<string>>
  pacienteActivo?: string
  orientacion?: 'vertical' | 'horizontal'
}

const TurnoLinaeTiempoItem = ({
  horario,
  paciente,
  tipoConsulta,
  nota,
  status,
  setPacienteActivo,
  pacienteActivo,
  orientacion = 'vertical'
}: lineaTiempoturnos) => {
  const colorStatusTurno = {
    pendiente: 'bg-green-300',
    completado: 'bg-blue-300',
    cancelado: 'bg-red-300'
  }

  return (
    <div className='flex w-full gap-3'>
      <div className='flex flex-col items-center'>
        <div className={`aspect-square h-4 rounded-full ${colorStatusTurno[status]}`}></div>
        <div className='h-full w-[1px] bg-slate-600'></div>
      </div>
      <div
        className={`pb-10 ${pacienteActivo === paciente && 'rounded-md bg-slate-300 px-5 pt-5'} flex gap-4 transition-all ${orientacion === 'vertical' ? 'flex-col' : 'flex-row w-full'}`}
      >
        <div className={`flex gap-3 ${orientacion === 'horizontal' && 'flex-1'} `}>
          <div>
            <h4 className='text-sm'>Horario</h4>
            <p className='text-lg font-bold'>{horario}</p>
          </div>
          <Separator orientation='vertical' />
          <div>
            <h4 className='text-sm'>Paciente</h4>
            <Link href={'/'} className='text-lg font-bold'>
              {paciente}
            </Link>
          </div>
        </div>
        <article className={`${orientacion === 'horizontal' && 'flex-1'}`}>
          <h4 className='text-sm'>Tipo de consulta</h4>
          <p>{tipoConsulta}</p>
        </article>
        <article className={`${orientacion === 'horizontal' && 'flex-1'}`}>
          <h4 className='text-sm'>Nota:</h4>
          <p>{nota ? nota : 'no hay nota'}</p>
        </article>
        {setPacienteActivo && <Button onClick={() => setPacienteActivo(paciente)}>Atender ahora</Button>}
      </div>
    </div>
  )
}

export default TurnoLinaeTiempoItem
