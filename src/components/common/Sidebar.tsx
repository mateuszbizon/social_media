import React from 'react'

function Sidebar() {
  return (
    <aside className='flex flex-col w-[250px] h-screen sticky top-0 bg-white border-r border-r-gray-2 px-3 py-10'>
        <h1 className='text-2xl font-semibold gradient-text'>Matgram</h1>
        <ul className='mt-10'>
            <li>
                Home
            </li>
            <li>
                Search
            </li>
        </ul>
        <div className='mt-auto'>
            <button>logout</button>
        </div>
    </aside>
  )
}

export default Sidebar