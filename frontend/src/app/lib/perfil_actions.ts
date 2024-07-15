import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export function Formshema() {
  const formSchema = z.object({
    name: z.string().min(2, {
      message: 'Username must be at least 2 characters'
    }),
    last_name: z.string().min(8, {
      message: 'Password must be at least 8 characters'
    }),
    obra_social: z.string().min(1, {
      message: 'Tiene que elegir una opción'
    }),
    tipo_documento: z.string().min(1, {
      message: 'Tiene que elegir una opción'
    }),
    numero_documento: z.string(), // colocar conficional para que no se acmita puntos

    tipo_sangre: z.object({
      sangre: z.string().min(1, {
        message: 'Elige una opción'
      }),
      factor_rh: z.string().min(1, {
        message: 'Elige una opción'
      })
    }),
    biologia: z.string().min(1, {
      message: 'Tiene que elegir una opción'
    }),
    fecha_nacimiento: z.string().min(1, {
      message: 'Tiene que elegir una opción'
    }),
    patologia: z.string().min(1, {
      message: 'Tiene que elegir una opción'
    }),
    tarea_patologia: z.string()
  })
  return [formSchema]
}

export function FormValues() {
  const [formSchema] = Formshema()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      last_name: '',
      obra_social: '',
      tipo_documento: '',
      numero_documento: '',
      tipo_sangre: {
        sangre: 'A',
        factor_rh: 'positivo'
      },
      biologia: '',
      fecha_nacimiento: '',
      patologia: '',
      tarea_patologia: 'No hay sugerencias'
    }
  })
  return [form]
}
