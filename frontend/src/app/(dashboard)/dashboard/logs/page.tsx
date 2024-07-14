import { LogsTable } from '@/components'
import { Button } from '@/components/ui/button'

function DashboardLogsPage() {
  return (
    <main className='flex flex-col gap-4 p-4'>
      <Button className='mx-auto'>Generar registro</Button>
      <LogsTable />
    </main>
  )
}

export default DashboardLogsPage
