'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import React, { useEffect } from 'react'
import { useForm, Controller, useFieldArray } from 'react-hook-form'

interface formularioPacienteConsulta {
  paciente: string
  doctoreNota: string
  numeroObraSocial: string
  medicamentos: {
    nombreFarmaco: string
    nombreComercial: string
    instrucciones: string
  }[]
}

const FarmularioContultaActiva = ({ paciente = '' }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<formularioPacienteConsulta>({
    defaultValues: {
      paciente: '',
      doctoreNota: '',
      medicamentos: []
    }
  })

  useEffect(() => {
    setValue('paciente', paciente)
  }, [paciente])

  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: 'medicamentos'
  })

  const onSubmit = (data: formularioPacienteConsulta) => {
    console.log(data)
  }

  return (
    <form className='flex-1' onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-3'>
        <h3 className='font-bold'>Detalles consulta activa</h3>
        <p className='text-xs'>Esto se agregar al historial medico del paciente </p>
      </div>
      <Controller
        control={control}
        name='paciente'
        rules={{ required: true }}
        render={({ field }) => (
          <div className='mb-3 grid w-full gap-1.5'>
            <Label htmlFor='paciente'>Paciente</Label>
            <Input readOnly type='text' id='paciente' {...field} placeholder='Paciente' />
            {errors.paciente && <span className='text-red-500'>Este campo es requerido</span>}
          </div>
        )}
      />
      <Controller
        control={control}
        name='numeroObraSocial'
        render={({ field }) => (
          <div className='mb-3 grid w-full gap-1.5'>
            <Label htmlFor='obrasocial'>N° Obra social/Prepaga</Label>
            <Input readOnly type='text' id='obrasocial' {...field} placeholder='3454543' />
            {errors.numeroObraSocial && <span className='text-red-500'>Este campo es requerido</span>}
          </div>
        )}
      />

      <Controller
        control={control}
        name='doctoreNota'
        rules={{ required: true }}
        render={({ field }) => (
          <div className='mb-3 grid w-full gap-1.5'>
            <Label htmlFor='doctoreNota'>Nota del doctor</Label>
            <Textarea {...field} placeholder='Escriba extra indicaciones aqui.' id='doctoreNota' />
            {errors.doctoreNota && <span className='text-red-500'>Este campo es requerido</span>}
          </div>
        )}
      />
      <div className='flex items-center gap-3'>
        <h3 className='font-bold'>Medicamentos Indicado</h3>
        <Button
          variant={'outline'}
          type='button'
          onClick={() =>
            prepend({
              nombreFarmaco: '',
              nombreComercial: '',
              instrucciones: ''
            })
          }
        >
          Añadir medicación
        </Button>
      </div>
      {fields.map((item, index) => {
        return (
          <div className='pb-5'>
            <Controller
              control={control}
              name={`medicamentos.${index}.nombreFarmaco`}
              render={({ field }) => (
                <div>
                  <div className='mb-3 mt-3 grid w-full max-w-sm items-center gap-1.5'>
                    <Label>Nombre farmaco</Label>
                    <Input type='text' {...field} placeholder='Medicamento' list='remedio' />
                  </div>
                  <datalist id='remedio'>
                    <option value='Ranitidina'></option>
                    <option value='Aspirineta'></option>
                    <option value='Optamox Deo'></option>
                    <option value='Curaflex'></option>
                    <option value='Resfrianex'></option>
                    <option value='lala'></option>
                  </datalist>
                </div>
              )}
            />
            <Controller
              control={control}
              name={`medicamentos.${index}.nombreComercial`}
              render={({ field }) => (
                <div className='mb-3 grid w-full max-w-sm items-center gap-1.5'>
                  <Label htmlFor='noombreComercial'>Nombre comercial</Label>
                  <Input {...field} type='text' id='oombreComercial' placeholder='Aspirineta' />
                </div>
              )}
            />
            <Controller
              control={control}
              name={`medicamentos.${index}.instrucciones`}
              render={({ field }) => (
                <div className='mb-3 grid w-full gap-1.5'>
                  <Label htmlFor='indicacion-farmaco'>Instrucciones</Label>
                  <Textarea
                    {...field}
                    placeholder='1 pastilla cada 4 horas.'
                    name='instrucciones'
                    id='indicacion-farmaco'
                  />
                </div>
              )}
            />
            <Button variant={'destructive'} onClick={() => remove(index)}>
              Eliminar medicamento
            </Button>
            <Separator className='mt-3' />
          </div>
        )
      })}
      <div className='flex gap-3'>
        <Button variant={'default'}>Enviar</Button>
        <Button variant={'destructive'} type='button' onClick={() => reset()}>
          Borrar todo
        </Button>
      </div>
    </form>
  )
}

export default FarmularioContultaActiva
