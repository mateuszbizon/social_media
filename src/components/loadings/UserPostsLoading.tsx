import React from 'react'

function UserPostsLoading() {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 animate-pulse'>
        <div className='w-full aspect-square bg-gray-2 rounded-xl'></div>
        <div className='w-full aspect-square bg-gray-2 rounded-xl'></div>
        <div className='w-full aspect-square bg-gray-2 rounded-xl'></div>
    </div>
  )
}

export default UserPostsLoading