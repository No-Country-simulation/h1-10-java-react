'use client'
import { Separator } from '@/components/ui/separator'
import { TabsContent } from '@/components/ui/tabs'
import React, { useState } from 'react'
import TurnoLinaeTiempoItem from './TurnoLinaeTiempoItem'
import FarmularioContultaActiva from './FarmularioContultaActiva'
import { turnosProps } from '@/tipos/turnosProps'

const consultasHoy: turnosProps[] = [
  {
    horario: '15:30',
    paciente: 'Pepito perez',
    tipoConsulta: 'Primera consulta',
    nota: 'Vengo derivado de otro doctor',
    status: 'pendiente'
  },
  {
    horario: '16:00',
    paciente: 'Exequiel paredes',
    tipoConsulta: 'Seguimiento tratamiento',
    nota: '',
    status: 'pendiente'
  },
  {
    horario: '16:30',
    paciente: 'juana juanita',
    tipoConsulta: 'Seguimiento tratamiento',
    nota: 'creo que hubo mejoras Doc',
    status: 'pendiente'
  },
  {
    horario: '17:00',
    paciente: 'Teo Gutierrez',
    tipoConsulta: 'Primera consulta',
    nota: 'Vengo derivado de otro doctor',
    status: 'pendiente'
  }
]

const AgendaHoy = () => {
  const [pacienteActivo, setPacienteActivo] = useState('')

  return (
    <TabsContent value='agendaHoy' className='w-full'>
      <header className='mb-4 flex items-center gap-2'>
        <div className='aspect-square h-2 rounded-full bg-green-600'></div>
        <h3 className='text-xl font-bold'>27 de Julio de 2024</h3>
      </header>
      <main className='flex w-full gap-6'>
        <div className='flex-1'>
          {consultasHoy.map((consulta, index) => (
            <TurnoLinaeTiempoItem
              key={index}
              horario={consulta.horario}
              paciente={consulta.paciente}
              tipoConsulta={consulta.tipoConsulta}
              nota={consulta.nota}
              status={consulta.status}
              setPacienteActivo={setPacienteActivo}
              pacienteActivo={pacienteActivo}
            />
          ))}
        </div>
        <FarmularioContultaActiva paciente={pacienteActivo} />
      </main>
    </TabsContent>
  )
}

export default AgendaHoy
