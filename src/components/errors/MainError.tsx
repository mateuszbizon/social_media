import React from 'react'

type MainErrorProps = {
    message: string
}

function MainError({ message }: MainErrorProps) {
  return (
    <div>
        <h2 className='text-black-2 heading2 text-center mb-10'>{message}</h2>
    </div>
  )
}

export default MainError