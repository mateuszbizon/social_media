import React from 'react'

function UserProfileLoading() {
  return (
    <div className='flex flex-col md:flex-row gap-5'>
        <div className='flex justify-center md:w-1/3'>
            <div className='size-[100px] md:size-[150px] bg-gray-2 animate-pulse rounded-full'></div>
        </div>
        <div className='md:grow space-y-5 md:space-y-8'>
            <div className='w-full h-6 rounded-full bg-gray-2 animate-pulse'></div>
            <div className='w-full h-20 rounded-full bg-gray-2 animate-pulse'></div>
            <div className='w-full h-6 rounded-full bg-gray-2 animate-pulse'></div>
        </div>
    </div>
  )
}

export default UserProfileLoading