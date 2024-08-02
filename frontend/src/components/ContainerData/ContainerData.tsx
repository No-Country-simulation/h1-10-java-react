import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useQuery } from '@tanstack/react-query'
import { jwtDecode, JwtPayload } from 'jwt-decode'
import { useStaffContext } from '@/context/medicoProvider'

interface MyJwtPayload extends JwtPayload {
  id: string
}

const ContainerData = ({ children }: { children: React.ReactNode }) => {

  // const { dispatch, state } = useStaffContext()
 
  // const token = window.localStorage.getItem('token') || null

  // const decoded = jwtDecode<MyJwtPayload>(token ? token : '')

  // const { isPending, error, data, refetch } = useQuery({
  //   queryKey: ['medicUser'],
  //   queryFn: () =>
  //     fetch(`https://backend-justina-deploy.onrender.com/v1/api/medical-staff/${decoded?.id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     }).then((res) => res.json()),
  //   enabled: !!decoded?.id
  // })

  // useEffect(() => {
  //   if (data) {
  //     dispatch({
  //       type: 'SET_DATA',
  //       value: {
  //         ...data
  //       }
  //     })
  //   }
  // }, [data])

  // useEffect(() => {
  //   if (token) {
  //     refetch() // Ejecutar la consulta manualmente cuando el token esté disponible
  //   }
  // }, [token, refetch])

  return (
    <main className='flex-[2.5] overflow-hidden rounded-[30px] border-r border-gray-400 bg-white px-3 py-6 lg:p-6'>
      {children}
    </main>
  )
}

export default ContainerData
