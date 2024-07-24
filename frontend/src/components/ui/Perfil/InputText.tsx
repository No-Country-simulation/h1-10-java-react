import React from 'react'
import { Input } from '../input'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '../form'
export default function InputText({ form = [], label = 'Sin label', placeholder = 'Sin nada', name = 'name' }:{
  form: any,
  label?: string,
  placeholder?: string,
  name?: string
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className='sm:col-span-2'>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type='text' {...field} placeholder={placeholder} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
