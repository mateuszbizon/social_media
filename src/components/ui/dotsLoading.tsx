import React from 'react'

function DotsLoading() {
  return (
    <div className='flex'>
        <div className="flex gap-2 py-2 px-3 rounded-xl bg-gray-2/30">
            <div className='dot-loading'></div>
            <div className='dot-loading dot-loading-second'></div>
            <div className='dot-loading dot-loading-third'></div>
        </div>
    </div>
  )
}

export default DotsLoading