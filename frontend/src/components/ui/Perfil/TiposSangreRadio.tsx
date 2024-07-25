import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../form'
import { RadioGroup, RadioGroupItem } from '../radio-group'

export default function TiposSangreRadio({ form = [] }:{
  form: any
}) {
  return (
    <>
      <FormField
        control={form.control}
        name="tipo_sangre.sangre"
        render={({ field }) => (
          <FormItem className='sm:col-span-2'>
            <FormLabel>Mi tipo de sangre es B-</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className='flex gap-5'
              >
                <FormItem className='flex items-center gap-1 space-y-0'>
                  <FormControl>
                    <RadioGroupItem value='A' />
                  </FormControl>
                  <FormLabel className='font-semibold'>
                    A
                  </FormLabel>
                </FormItem>
                <FormItem className='flex items-center gap-1 space-y-0'>
                  <FormControl>
                    <RadioGroupItem value='B' />
                  </FormControl>
                  <FormLabel className='font-semibold'>
                    B
                  </FormLabel>
                </FormItem>
                <FormItem className='flex items-center gap-1 space-y-0'>
                  <FormControl>
                    <RadioGroupItem value='AB' />
                  </FormControl>
                  <FormLabel className='font-semibold'>AB</FormLabel>
                </FormItem>
                <FormItem className='flex items-center gap-1 space-y-0'>
                  <FormControl>
                    <RadioGroupItem value='O' />
                  </FormControl>
                  <FormLabel className='font-semibold'>O</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name='tipo_sangre.factor_rh'
        control={form.control}
        render={({ field }) => (
          <RadioGroup
            onValueChange={field.onChange}
            defaultValue={field.value}
            className='flex  space-x-1'
          >
            <FormItem className='flex items-center space-x-3 space-y-0'>
              <FormControl>
                <RadioGroupItem value='positivo' />
              </FormControl>
              <FormLabel className='font-normal'>
                +(positivo)
              </FormLabel>
            </FormItem>
            <FormItem className='flex items-center space-x-3 space-y-0'>
              <FormControl>
                <RadioGroupItem value='negativo' />
              </FormControl>
              <FormLabel className='font-normal'>
                -(Negativo)
              </FormLabel>
            </FormItem>
          </RadioGroup>
        )}
      />
    </>
  )
}
