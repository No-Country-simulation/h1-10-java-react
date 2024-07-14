import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { UsersIcon } from 'lucide-react'

function DashboardStatsList() {
  return (
    <ul className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      <li>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Usuarios</CardTitle>
            <UsersIcon className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>33,320</div>
            <p className='text-xs text-muted-foreground'>Cantidad de usuarios</p>
          </CardContent>
        </Card>
      </li>
      <li>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Médicos</CardTitle>
            <UsersIcon className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>2,320</div>
            <p className='text-xs text-muted-foreground'>Cantidad de médicos</p>
          </CardContent>
        </Card>
      </li>
      <li>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Pacientes</CardTitle>
            <UsersIcon className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>1,320</div>
            <p className='text-xs text-muted-foreground'>Cantidad de pacientes</p>
          </CardContent>
        </Card>
      </li>
      <li>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Consultas</CardTitle>
            <UsersIcon className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>2,320</div>
            <p className='text-xs text-muted-foreground'>Cantidad de consultas</p>
          </CardContent>
        </Card>
      </li>
    </ul>
  )
}

export { DashboardStatsList }
