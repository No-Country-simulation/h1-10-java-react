import React from 'react'
import { Input } from '../input'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '../form'

export default function InputText({
  form = [],
  label = 'Sin label',
  placeholder = 'Sin nada',
  name = 'name',
  type = 'text',
  className = ''
}: {
  form: any
  label: string
  placeholder: string
  name: string
  type: string
  className: string
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className='sm:col-span-2'>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} {...field} placeholder={placeholder} className={className} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
