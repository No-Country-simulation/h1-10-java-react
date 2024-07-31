import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
    numero_documento: z.string(), // colocar condicional para que no se admita puntos

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
  });
  return [formSchema]
}

async function  fetchForm( datosperfil) {

  const token = localStorage.getItem('token') ?? ''
  if (!token) {
    throw new Error('Token not found in localStorage')
  }

  const headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  })

  const requestOptions = {
    method: 'GET', // o 'POST', 'PUT', etc. según sea necesario
    headers
  }

  try {
    fetch('https://backend-justina-deploy.onrender.com/v1/api/patient/2', requestOptions)
      .then(response => response.json())
      .then(dato => {
        datosperfil.name = dato.firstName
        datosperfil.last_name = dato.lastName
        datosperfil.numero_documento = dato.identificationNumber
        datosperfil.tipo_sangre.sangre = dato.bloodType
        datosperfil.tipo_sangre.factor_rh = dato.bloodFactor
        datosperfil.biologia = dato.sex
        datosperfil.fecha_nacimiento = dato.birthDate
      })
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

export function FormValues() {
  const [formSchema] = Formshema()
  const datosperfil = {
    name: '',
    last_name: '',
    tipo_documento: '',
    numero_documento: '',
    tipo_sangre: {
      sangre: '',
      factor_rh: ''
    },
    biologia: '',
    fecha_nacimiento: ''
  }
  fetchForm(datosperfil)

  console.log(datosperfil)
  // Llamar a la función fetchData
   const  form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: datosperfil.name,
      last_name: datosperfil.last_name,
      obra_social: '',
      tipo_documento: '',
      numero_documento: datosperfil.numero_documento,
      tipo_sangre: {
        sangre: datosperfil.tipo_sangre.sangre,
        factor_rh: datosperfil.tipo_sangre.factor_rh
      },
      biologia: datosperfil.biologia,
      fecha_nacimiento: datosperfil.fecha_nacimiento,
      patologia: '',
      tarea_patologia: 'No hay sugerencias'
    }
  })
  return [form];
}
