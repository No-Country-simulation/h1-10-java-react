'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import Image from 'next/image'

const formSchema = z.object({
  email: z.string().min(2, {
    message: 'Username must be at least 2 characters'
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters'
  })
})

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  console.log(formSchema)
  return (
    <section className='flex w-full flex-col p-5 text-black'>
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
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type='email' placeholder='Ingresa tu email' className='bg-white text-black' {...field} />
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
                  <Input
                    type='password'
                    placeholder='Escribe tu contraseña'
                    className='bg-white text-black'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Link href={'aqui entrara el link de page olvidaste contraseña'} className='text-xs'>
            Olvidaste tu contraseña?
          </Link>{' '}
          <br />
          <Button type='submit' className='w-full rounded-none bg-pink-600 py-7'>
            Ingresar
          </Button>
        </form>
      </Form>
    </section>
  )
}
