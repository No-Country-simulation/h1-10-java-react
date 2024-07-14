import { SocialWorksTable } from '@/components'
import { Button } from '@/components/ui/button'

function DashboardSocialWorksPage() {
  return (
    <main className='flex flex-col gap-4 p-4'>
      <Button className='mx-auto'>Registrar obra social</Button>
      <SocialWorksTable />
    </main>
  )
}

export default DashboardSocialWorksPage
