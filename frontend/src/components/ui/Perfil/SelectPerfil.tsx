import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../select'

export default function SelectPerfil({
  form = [],
  Selects = [],
  label = 'Sin label',
  placeholder = 'Sin nada',
  name = 'name'
}: {
  form: any
  Selects: string[]
  label: string
  placeholder: string
  name: string
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className='sm:col-span-2'>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {Selects.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
