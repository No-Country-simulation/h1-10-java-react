'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Historialpage() {
  const historialMedico = [
    { medico: 'Gorge Choque Ururu',
      MedicoImg: '/doctor.jpg',
      descripcion: {
        titulo: 'Chequeo de calculo Renal',
        cuerpo: 'Este examen muestra los resultados del paciente que fue hecho por los siguientes motivos, dolores por la zona de la espalda, orina amarilla, dolor al orinar, y exceso de orinar, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quisquam officiis doloribus ex nisi tempora modi assumenda alias perspiciatis ea. Temporibus, facilis! Saepe deleniti molestias aperiam maxime, ducimus officia necessitatibus?'
      },
      fecha: '22/02/2014',
      documento: '/Ficha-medica.pdf'
    },
    { medico: 'Gorge Choque Ururu',
      MedicoImg: '/doctor.jpg',
      descripcion: {
        titulo: 'Chequeo de calculo Renal',
        cuerpo: 'Este examen muestra los resultados del paciente que fue hecho por los siguientes motivos, dolores por la zona de la espalda, orina amarilla, dolor al orinar, y exceso de orinar, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quisquam officiis doloribus ex nisi tempora modi assumenda alias perspiciatis ea. Temporibus, facilis! Saepe deleniti molestias aperiam maxime, ducimus officia necessitatibus?'
      },
      fecha: '22/02/2014',
      documento: '/Ficha-medica.pdf'
    },
    { medico: 'Gorge Choque Ururu',
      MedicoImg: '/doctor.jpg',
      descripcion: {
        titulo: 'Chequeo de calculo Renal',
        cuerpo: 'Este examen muestra los resultados del paciente que fue hecho por los siguientes motivos, dolores por la zona de la espalda, orina amarilla, dolor al orinar, y exceso de orinar, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quisquam officiis doloribus ex nisi tempora modi assumenda alias perspiciatis ea. Temporibus, facilis! Saepe deleniti molestias aperiam maxime, ducimus officia necessitatibus?'
      },
      fecha: '22/02/2014',
      documento: '/Ficha-medica.pdf'
    },
    { medico: 'Gorge Choque Ururu',
      MedicoImg: '/doctor.jpg',
      descripcion: {
        titulo: 'Chequeo de calculo Renal',
        cuerpo: 'Este examen muestra los resultados del paciente que fue hecho por los siguientes motivos, dolores por la zona de la espalda, orina amarilla, dolor al orinar, y exceso de orinar, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quisquam officiis doloribus ex nisi tempora modi assumenda alias perspiciatis ea. Temporibus, facilis! Saepe deleniti molestias aperiam maxime, ducimus officia necessitatibus?'
      },
      fecha: '22/02/2014',
      documento: '/Ficha-medica.pdf'
    }
  ]
  return (
    <div>
      <h6>Mi historial medico</h6>
      <div className='overflow-auto max-h-full'>
        {historialMedico.map((historial, i) => (
          <section className='flex flex-col gap-3 ' key={i}>
            <div className='flex gap-3'>
              <Image
                src={historial.MedicoImg}
                alt='Imagen de medico'
                width={40}
                height={40}
                placeholder='blur'
                blurDataURL='Yhordi.dev'
                className='rounded-full' />
              <p className='text-sm text-gray-500'>{historialMedico[0].medico}</p>
            </div>
            <div className='bg-blue-700 p-3 text-white rounded-lg'>
              <h6 className='font-bold text-lg mb-5'>{historial.descripcion.titulo}</h6>
              <p>{historial.descripcion.cuerpo}</p>
            </div>
            <Link
              href={historial.documento}  className='underline text-blue-500 hover:text-blue-700 font-semibold transition-colors duration-300'>Ver el documento
            </Link>
          </section>
        ))}
      </div>

    </div>
  )
}
