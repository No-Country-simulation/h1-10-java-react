import { NomenclatorsTable } from '@/components'
import { Button } from '@/components/ui/button'

function DashboardNomenclatorsPage() {
  return (
    <main className='flex flex-col gap-4 p-4'>
      <Button className='mx-auto'>Crear nomenclador</Button>
      <NomenclatorsTable />
    </main>
  )
}

export default DashboardNomenclatorsPage
