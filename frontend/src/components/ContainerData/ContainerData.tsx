import React from 'react'

const ContainerData = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='flex-[2.5] overflow-hidden rounded-[30px] border-r border-gray-400 bg-white px-3 py-6 lg:p-6'>
      {children}
    </main>
  )
}

export default ContainerData
