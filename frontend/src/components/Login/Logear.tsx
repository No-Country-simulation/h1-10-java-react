'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react'
import { z } from 'zod';
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input' 
import Link from 'next/link'
import Image from 'next/image'
import { jwtDecode } from 'jwt-decode'
import { redirect } from 'next/navigation';


const formSchema = z.object({
  email: z.string().min(2, {
    message: 'Username must be at least 2 characters'
  }),
  password: z.string().min(5, {
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

  async function onSubmit (values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('https://backend-justina-deploy.onrender.com/v1/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
      if (!response.ok) {
        throw new Error('Error en la autentificación')
      }

      const token = await response.json()
      console.log('Autentificación exitosa', token)
      const decoded = jwtDecode(token.jwtToken)
      console.log(decoded)
      localStorage.setItem('token', token)
      if (decoded.authorities[0] === 'ROLE_ADMIN') {
        console.log(decoded)
        window.location.href = 'dashboard'
      }
    } catch (error) {
      Error('Hubo un problema con la autenticación ' , error)
    }
  }

  return (
    <section className='w-full max-w-[560px] p-5 flex flex-col  text-black'>

      {/**Logo que puede cambiar */}
      <Image
        src="/JustinaIO.svg"
        alt="JustinaIOLogo"
        className="dark:invert"
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

      <span className='font-semibold text-center'>#AyudemosAtodosLosQuePodamos</span>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="  space-y-3 ">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem >
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type='email' placeholder="Ingresa tu email"
                    className='text-black bg-white' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
      />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className=''>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input
                    type='password' placeholder="Escribe tu contraseña" 
                    className='text-black  bg-white' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Link
            href={'aqui entrara el link de page olvidaste contraseña'} 
            className='text-xs '>Olvidaste tu contraseña?</Link> <br/>
          <Button type="submit" className='w-full bg-pink-600 py-7 rounded-none'>Ingresar</Button>

        </form>
      </Form>
    </section>
  )
}
