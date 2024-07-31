'use client'
import { User2Icon } from 'lucide-react'
import Image from 'next/image'
import TarjetaTurno from '@/components/ui/Perfil/TarjetaTurno'
import React, { useEffect, useState } from 'react'

export default function PerfilPage() {
  const [perfil,setPerfil] = useState({})
  useEffect(() => {
    const token = localStorage.getItem('token') || '' 
    fetch('https://backend-justina-deploy.onrender.com/v1/api/patient/2',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    }).then(response => response.json())
    .then(dato => setPerfil(dato) )
  }, [])
    return (
      <div>
        <TarjetaTurno />

        <h3 className='text-end text-4xl font-bold mb-2'>Mi perfil</h3>
        <hr  className='mb-6 border-2 ' style={{borderColor: 'black'}}/>
        <div className='flex gap-6'>
          <section>
          
            <section className='flex gap-2'>
              <p className='font-medium'>Nombre:</p>
              <p>{perfil.firstName}</p>
              <p>{perfil.lastName}</p>
            </section>

            <section className='flex gap-2'>
              <p className='font-medium'>Email:</p>
              <p>{perfil.email}</p>
            </section>

          </section>

          <section>
            <section className='flex gap-2'>
              <p className='font-medium'>Fechas de nacimiento:</p>
              <p>{perfil.birthDate}</p>
            </section>
            <section className='flex gap-2'>
              <p className='font-medium'>Sexo:</p>
              <p>{perfil.sex === 'M' ? 'Hombre' : 'Mujer'}</p>
            </section>
            <section className='flex gap-2'>
              <p className='font-medium' >Tipo de sangre:</p>
              <div className='flex gap-1'>
                <p>{perfil.bloodType}</p>
                <p>{perfil.bloodFactor == '-' ? 'Negativo' : 'Positivo'}</p>      
              </div>
            </section>

            <section className='flex gap-2'>
              <p className='font-medium' >Número de documento:</p>
              <p>{perfil.identificationNumber}</p>
            </section>

            <section className='flex gap-2'>
              <p className='font-medium' >Patologia:</p>
              <p>Diabetico</p>
            </section>
          </section>
        </div>

    </div>
    )
}
