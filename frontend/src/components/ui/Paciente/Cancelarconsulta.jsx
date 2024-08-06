import React from 'react'
import { Button } from '../button'

export default function Cancelarconsulta({ id, fn }) {
  const Id = id
  const token = localStorage.getItem('token') || ''
  const [tokenAdmin, setTokenAdmin] = useState('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlzcyI6Imp1c3RpbmEuaW8iLCJpZCI6MSwiZXhwIjoxNzIzMTU5OTk2LCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIl19.lTMF3HAVueNVs9k4blOjXC28f870VyaUCykqo8kivw8')
 
  function Eliminar( ) {
    try {
      fetch(`https://backend-justina-deploy.onrender.com/v1/api/appointment/delete/${Id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + tokenAdmin
        }
      }).catch(response => console.log(response))
      .catch(res => {
          if (res.ok) {
            fn()
          }
      })
    } catch (e) {
      console.error(e)
    }
  }


  return (
    <div className=' bg-white absolute inset-0 flex flex-col items-center justify-center '>
      <div className='bg-orange-600 px-8 py-7 rounded-lg shadow-2xl'>
        <h6 className='font-semibold text-xl text-center px-3 mb-5'>Estas seguro que deseas cancelar la consulta {id}</h6>
        <section className='flex gap-4 justify-center'>
          <Button onClick={fn} className=''>Cancelar</Button>
          <Button onClick={Eliminar}>Aceptar</Button>
        </section>
      </div>
    </div>
  )
}
