'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

const formSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: 'Name must be at least 3 characters'
    })
    .max(10, {
      message: 'Name must be at least 10 characters'
    }),
  lastname: z
    .string()
    .min(3, {
      message: 'Last name must be at least 3 characters'
    })
    .max(15, {
      message: 'Last name must be at least 10 characters'
    }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters'
  }),
  email: z.string(),
  perfil: z.string()
})

export default function Register({ isRegister: register = true }) {
  const [desplegue, setDesplegue] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      lastname: '',
      email: '',
      password: '',
      perfil: ''
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  console.log(formSchema)
  return (
    <section className='flex w-full flex-col p-5 text-amber-50' style={{ display: register ? 'flex' : 'none' }}>
      {/**Logo que puede cambiar */}
      <Image
        src='/JustinaIO.svg'
        alt='JustinaIOLogo'
        className='dark:invert'
        width={400}
        height={300}
        priority
        style={{
          margin: 'auto',
          paddingLeft: 40,
          paddingRight: 40,
          paddingTop: 40
        }}
      />

      <span className='text-center font-semibold'>#AyudemosAtodosLosQuePodamos</span>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input type='text' placeholder='Escriba su nombre' className='text-black' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='lastname'
            render={({ field }) => (
              <FormItem className=''>
                <FormLabel>Apellido</FormLabel>
                <FormControl>
                  <Input type='text' placeholder='Escriba su Apellido' className='text-black' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className=''>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input type='email' placeholder='Escriba su correo' className='text-black' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem className=''>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input type='password' placeholder='Escribe tu contraseña' className='text-black' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            onClick={() => {
              setDesplegue(!desplegue)
            }}
          >
            Seleccione su perfil {'->'}
          </Button>
          <FormField
            control={form.control}
            name='perfil'
            render={({ field }) => (
              <section
                className='container-radios flex-col rounded-lg bg-white px-4 py-2 text-black'
                style={{
                  display: desplegue ? 'flex' : 'none'
                }}
              >
                <FormItem className='flex items-center justify-between'>
                  <FormLabel>Paciente</FormLabel>
                  <FormControl>
                    <Input
                      className='w-6'
                      type='radio'
                      placeholder='paciente'
                      defaultChecked
                      {...field}
                      value={'paciente'}
                      style={{
                        marginTop: 0
                      }}
                    />
                  </FormControl>
                </FormItem>

                <FormItem className='flex items-center justify-between'>
                  <FormLabel>Medico</FormLabel>
                  <FormControl>
                    <Input className='w-6' type='radio' placeholder='paciente' {...field} value={'medico'} />
                  </FormControl>
                </FormItem>

                <FormItem className='flex items-center justify-between'>
                  <FormLabel>Familiar del paciente</FormLabel>
                  <FormControl>
                    <Input
                      className='w-6'
                      type='radio'
                      placeholder='paciente'
                      {...field}
                      value={'familiar del paciente'}
                    />
                  </FormControl>
                </FormItem>

                <FormItem className='flex items-center justify-between'>
                  <FormLabel>Donador</FormLabel>
                  <FormControl>
                    <Input className='w-6' type='radio' placeholder='paciente' {...field} value={'donador'} />
                  </FormControl>
                </FormItem>
              </section>
            )}
          />
          <Button type='submit' className='w-full rounded-none bg-pink-600 py-7'>
            Ingresar
          </Button>
        </form>
      </Form>
    </section>
  )
}
