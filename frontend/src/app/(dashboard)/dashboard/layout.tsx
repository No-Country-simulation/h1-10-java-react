import { AdminDashboardAside, DashboardHeader } from '@/components'

interface DashboardLayoutProps {
  children: React.ReactNode
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className='grid min-h-screen md:grid-cols-[13.75rem_1fr] lg:grid-cols-[17.5rem_1fr]'>
      <AdminDashboardAside />
      <div className='flex flex-col'>
        <DashboardHeader />
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
