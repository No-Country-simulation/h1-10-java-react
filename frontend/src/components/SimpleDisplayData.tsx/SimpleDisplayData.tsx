import React from 'react'

const SimpleDisplayData = ({ titulo, data }: { titulo: string; data: string | null }) => {
  return (
    <div className='flex-1'>
      <h3 className='text-lg font-semibold'>{titulo}</h3>
      <p className='text-lg capitalize'>{data}</p>
    </div>
  )
}

export default SimpleDisplayData
