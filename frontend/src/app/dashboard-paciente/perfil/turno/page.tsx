'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Toaster } from '@/components/ui/toaster'
import { toast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const Formshema = z.object({
  descripcion: z.string().min(15, {
    message: 'Por favor la descripción tiene que ser mayor 15 caracteres'
  }).max(250, {
    message: 'Por favor la descripción tiene que ser menor a 250 caracteres'
  })
})
export default function Turno() {
  const form = useForm<z.infer<typeof Formshema>>({
    resolver: zodResolver(Formshema),
    defaultValues: {
      descripcion: ''
    }
  })

  function onSubmit( value:z.inter<typeof Formshema>) {
    console.log('hOLa')
    toast({
      title: 'Excelente, registraste tu consulta con éxito.',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(value, null, 2)}</code>
        </pre>
      )
    })
  }
  return (
    <div className='py-7  max-w-[500px] flex flex-col justify-center items-center bg-black rounded-xl text-white'>
      <h6 className='font-bold text-xl'>Saca tu turno</h6>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-2/3 space-y-6'>
          <FormField
            control={form.control}
            name='descripcion'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Por favor describa su dolecia o el motivo de su consulta.</FormLabel>
                <FormControl className='text-white h-64'>
                  <Textarea placeholder='Se claro y especifico por favor.' {...field} />
                </FormControl>
                <FormDescription>
                  Puedes pedir a una persona de confianza que te ayude a poner las descripción.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className='bg-orange-600 px-6 py-3 hover:bg-orange-800'>Enviar</Button>
        </form>
      </Form>
      <Toaster />
    </div>
  )
}