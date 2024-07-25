'use client'
import React, { useState,useEffect } from 'react'

const MainDashboard = () => {
  const [TratamientosRealizados,setTratamientosRealizados] = useState(0)
  const [TratamientosPendientes,setTratamientosPendientes] = useState(0)
  const listaTratamientos = [
    {
      tramaniento: 'Nueva toma de Ciclosporina 10 mg',
      estado: true,
      hora: '8:30',
      periodo: 'AM'
    },
    {
      tramaniento: 'Consulta Control',
      estado: true,
      hora: '2:00',
      periodo: 'PM',
      hospital: 'Consultorio Hospital Australia'
    },
    {
      tramaniento: 'Seguimiento de Plan Nutricional',
      estado: false,
      tarea: 'Chequear estado de plan'
    },
    {
      tramaniento: 'Seguimiento Actividad Física',
      estado: false
    },
    {
      tramaniento: 'Nueva toma de Ciclosporina 10 mg',
      estado: true,
      hora: '8:30',
      periodo: 'AM'
    },
    {
      tramaniento: 'Consulta Control',
      estado: true,
      hora: '2:00',
      periodo: 'PM',
      hospital: 'Consultorio Hospital Australia'
    },
    {
      tramaniento: 'Seguimiento de Plan Nutricional',
      estado: true,
      tarea: 'Chequear estado de plan'
    },
    {
      tramaniento: 'Seguimiento Actividad Física',
      estado: true
    },
    {
      tramaniento: 'Nueva toma de Ciclosporina 10 mg',
      estado: true,
      hora: '8:30',
      periodo: 'AM'
    },
    {
      tramaniento: 'Consulta Control',
      estado: true,
      hora: '2:00',
      periodo: 'PM',
      hospital: 'Consultorio Hospital Australia'
    },
    {
      tramaniento: 'Seguimiento de Plan Nutricional',
      estado: false,
      tarea: 'Chequear estado de plan'
    },
    {
      tramaniento: 'Seguimiento Actividad Física',
      estado: false
    }
  ]
  function calcularEstadoTratamiento() {
    let realizados = 0;
    let pendiente = 0;
    listaTratamientos.forEach(element => {
      if (element.estado) {
        realizados++;
        console.log('realizado')
      } else {
        pendiente++;
      }
    })
    setTratamientosPendientes(pendiente)
    setTratamientosRealizados(realizados)
  }
  useEffect(() => {
    calcularEstadoTratamiento()
  }, [])
  return (
    <div>
      <h4 className='text-3xl font-bold mb-6 text-center'>Procesos de mis tratamientos</h4>
      <section className='flex  justify-center text-white'>
        <div className='w-40 h-40 bg-[#0eebe3] px-2 py-5 text-center'><h6>TRATAMIENTOS</h6><p className='text-6xl mt-5'>{TratamientosRealizados}</p></div>
        <div className='w-40 h-40 bg-[#e155e6] px-2  py-5 text-center'><h6>PENDIENTES</h6><p className='text-6xl mt-5'>{TratamientosPendientes}</p></div>
      </section>
      <ul className='h-[500px] mt-6 space-y-4 overflow-auto focus:scroll-auto snap-y '
        style={{
          scrollbarWidth: 'unset',
          scrollbarColor: 'red'
        }}
      >
        {listaTratamientos.map((tratamiento, i) => (
          <li key={i} className='flex gap-2 pb-1 border-b-2 scroll-mt-6 snap-start '>
            <div
              className='w-2 h-2 rounded-full mt-2'
              style={{
                backgroundColor: tratamiento.estado ? '#0eebe3' : '#e155e6'
              }}
            />
            <section className='flex justify-between w-full'>
              <div>
                <p>{tratamiento.tramaniento}</p>
                {tratamiento.hospital
                  ? <span className='text-xs text-gray-500/60'>{tratamiento.hospital}</span>
                  : <span className='text-xs text-gray-500/60'>{tratamiento.tarea}</span> }
              </div>
              {tratamiento.hora && <p>{tratamiento.hora} <span className='text-xs text-gray-500/60'>{tratamiento.periodo}</span></p>}

            </section>
            <hr />
          </li>

        ))}
      </ul>
    </div>
  )
}

export default MainDashboard