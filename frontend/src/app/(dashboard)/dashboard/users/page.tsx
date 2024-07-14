import { DoctorsTable, PatientsTable } from '@/components'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

function DashboardUsersPage() {
  return (
    <main className='flex flex-col gap-4 p-4'>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <Button>Crear paciente</Button>
        <Button>Crear médico</Button>
      </div>
      <Tabs defaultValue='patients'>
        <TabsList>
          <TabsTrigger value='patients'>Tabla de pacientes</TabsTrigger>
          <TabsTrigger value='doctors'>Tabla de médicos</TabsTrigger>
        </TabsList>
        <TabsContent value='patients'>
          <PatientsTable />
        </TabsContent>
        <TabsContent value='doctors'>
          <DoctorsTable />
        </TabsContent>
      </Tabs>
    </main>
  )
}

export default DashboardUsersPage
