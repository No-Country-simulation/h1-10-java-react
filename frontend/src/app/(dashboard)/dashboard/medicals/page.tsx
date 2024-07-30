import { CreateMedicalModal, MedicalsTable } from '@/components'

function DashboardMedicalsPage() {
  return (
    <main className='flex flex-col gap-4 p-4'>
      <CreateMedicalModal />
      <MedicalsTable />
    </main>
  )
}

export default DashboardMedicalsPage
