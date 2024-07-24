'use client'
import { TabsContent } from '@/components/ui/tabs'
import React, { useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { getNextSevenDays } from '@/utils/geTNextSevenDays'
import { turnosProps } from '@/tipos/turnosProps'
import TurnoLinaeTiempoItem from './TurnoLinaeTiempoItem'

const nextSevenDays = getNextSevenDays()

const turnosDeSemana: turnosProps[][] = [
  [
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
  ],
  [
    {
      horario: '16:00',
      paciente: 'Gregorio el gato',
      tipoConsulta: 'Primera consulta',
      nota: 'Vengo derivado de otro doctor',
      status: 'pendiente'
    },
    {
      horario: '16:30',
      paciente: 'Sulue Palacio',
      tipoConsulta: 'Seguimiento tratamiento',
      nota: '',
      status: 'pendiente'
    },
    {
      horario: '17:30',
      paciente: 'Oky Jerez',
      tipoConsulta: 'Seguimiento tratamiento',
      nota: 'creo que hubo mejoras Doc',
      status: 'pendiente'
    }
  ],
  [
    {
      horario: '16:00',
      paciente: 'Pumi Espumita',
      tipoConsulta: 'Primera consulta',
      nota: 'Vengo derivado de otro doctor',
      status: 'pendiente'
    },
    {
      horario: '16:30',
      paciente: 'Susana Gimenez',
      tipoConsulta: 'Seguimiento tratamiento',
      nota: '',
      status: 'pendiente'
    },
    {
      horario: '17:30',
      paciente: 'Marcelo Tinelli',
      tipoConsulta: 'Seguimiento tratamiento',
      nota: 'creo que hubo mejoras Doc',
      status: 'pendiente'
    }
  ],
  [
    {
      horario: '16:00',
      paciente: 'Pumi Espumita',
      tipoConsulta: 'Primera consulta',
      nota: 'Vengo derivado de otro doctor',
      status: 'pendiente'
    },
    {
      horario: '16:30',
      paciente: 'Susana Gimenez',
      tipoConsulta: 'Seguimiento tratamiento',
      nota: '',
      status: 'pendiente'
    },
    {
      horario: '17:30',
      paciente: 'Marcelo Tinelli',
      tipoConsulta: 'Seguimiento tratamiento',
      nota: 'creo que hubo mejoras Doc',
      status: 'pendiente'
    }
  ],
  [
    {
      horario: '16:00',
      paciente: 'Pumi Espumita',
      tipoConsulta: 'Primera consulta',
      nota: 'Vengo derivado de otro doctor',
      status: 'pendiente'
    },
    {
      horario: '16:30',
      paciente: 'Susana Gimenez',
      tipoConsulta: 'Seguimiento tratamiento',
      nota: '',
      status: 'pendiente'
    },
    {
      horario: '17:30',
      paciente: 'Marcelo Tinelli',
      tipoConsulta: 'Seguimiento tratamiento',
      nota: 'creo que hubo mejoras Doc',
      status: 'pendiente'
    }
  ],
  [
    {
      horario: '16:00',
      paciente: 'Pumi Espumita',
      tipoConsulta: 'Primera consulta',
      nota: 'Vengo derivado de otro doctor',
      status: 'pendiente'
    },
    {
      horario: '16:30',
      paciente: 'Susana Gimenez',
      tipoConsulta: 'Seguimiento tratamiento',
      nota: '',
      status: 'pendiente'
    },
    {
      horario: '17:30',
      paciente: 'Marcelo Tinelli',
      tipoConsulta: 'Seguimiento tratamiento',
      nota: 'creo que hubo mejoras Doc',
      status: 'pendiente'
    }
  ]
]

const AgendaSemana = () => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(0)

  return (
    <TabsContent value='agendaSemana'>
      <div>
        <Carousel
          opts={{
            align: 'start'
          }}
          className='mx-auto mt-8 w-[90%]'
        >
          <CarouselContent>
            {nextSevenDays.map((item, index) => (
              <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/4'>
                <button
                  onClick={() => setFechaSeleccionada(index)}
                  className={`w-full rounded-xl border border-gray-400 p-1 text-center ${fechaSeleccionada === index && 'bg-slate-300 font-bold'}`}
                >
                  {item.fecha} de {item.mes}
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className='mt-8'>
        {turnosDeSemana[fechaSeleccionada].map((consulta, index) => {
          return (
            <TurnoLinaeTiempoItem
              key={index + 'agenda extendida'}
              horario={consulta.horario}
              paciente={consulta.paciente}
              tipoConsulta={consulta.tipoConsulta}
              nota={consulta.nota}
              status={consulta.status}
              orientacion='horizontal'
            />
          )
        })}
      </div>
    </TabsContent>
  )
}

export default AgendaSemana
