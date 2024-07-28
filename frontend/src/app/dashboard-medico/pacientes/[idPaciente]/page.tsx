'use client'
import SimpleDisplayData from '@/components/SimpleDisplayData.tsx/SimpleDisplayData'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const DatosPaciente = () => {
  return (
    <section>
      <h3 className='mb-2 text-3xl font-bold'>Paciente: Susana Tinelli</h3>
      <Separator />
      <div className='mt-10 flex gap-4'>
        <SimpleDisplayData data='56 años' titulo='Edad' />
        <SimpleDisplayData data='A+' titulo='Grupo Sanguineo' />
        <SimpleDisplayData data='25/02/2024' titulo='Última visita' />
        <SimpleDisplayData data='Prensa plus' titulo='Obra social/Prapaga' />
      </div>
      <Separator className='my-5' />
      <article>
        <h4 className='font-bold'>Resumen ultima visita (25/02/2024) :</h4>
        <p>
          Paciente llega con preocupacion por falta de aire y taquicardia nocturna, se le solicitan los estudios de
          corazon bla
        </p>
      </article>
      <div className='mt-5'>
        <h4 className='font-bold'>Tratamento indicado: </h4>
        <p>Asmirineta / media pastilla / cada 12 horas por 3 días</p>
      </div>
      <Separator className='my-5' />
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1'>
          <AccordionTrigger>
            <h3 className='text-lg font-bold'>Ver historial medico del paciente</h3>
          </AccordionTrigger>
          <AccordionContent>
            Y Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quasi aliquid asperiores dolore soluta
            sequi est atque tempora consectetur provident sapiente corporis, adipisci necessitatibus totam. A quis
            corrupti eveniet nemo!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default DatosPaciente
