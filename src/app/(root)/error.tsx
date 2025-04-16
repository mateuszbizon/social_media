"use client"

import MainError from '@/components/errors/MainError'
import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {
    error: Error
    reset: () => void
}

function error({ error, reset }: Props) {
  return (
    <div>
        <MainError message={error.message} />
        <div className='flex justify-center'>
            <Button onClick={reset}>
                Try again
            </Button>
        </div>
    </div>
  )
}

export default error