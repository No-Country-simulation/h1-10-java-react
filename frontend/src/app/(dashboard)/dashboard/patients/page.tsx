import { CreatePatientModal, PatientsTable } from '@/components'

function DashboardPatientsPage() {
  return (
    <main className='flex flex-col gap-4 p-4'>
      <CreatePatientModal />
      <PatientsTable />
    </main>
  )
}

export default DashboardPatientsPage
