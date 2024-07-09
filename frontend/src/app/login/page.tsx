'use client'

import Login from '@/components/Login/Logear'
import { Button } from '@/components/ui/button'

export default function Pagelogin() {

  //const [Logearme, setLogearme] = useState(true) // true si es para registrase y false para iniciar sesion


  return (
    <div className=' min-h-screen 
    bg-amber-50'>
      {/**Imagen de fondo que se puede cambiar */}
      
      <section className='max-w-2xl flex flex-col mx-auto pt-10 px-3'>
      
      <Login/>
   {/** <Register isRegister = { Logearme}/>*/}   
      </section>
        
    </div>
  )
}
