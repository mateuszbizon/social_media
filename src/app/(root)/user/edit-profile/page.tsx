"use client"

import withAuth from '@/components/auth/withAuth'
import { Button } from '@/components/ui/button'
import { User } from '@/types/models'
import React from 'react'

type Props = {
    user: User
}

function EditProfilePage({ user }: Props) {
  return (
    <div className='w-full max-w-[600px] mx-auto'>
        <div className='flex justify-center gap-2 flex-wrap mb-5'>
            <Button>
                Profile
            </Button>
            <Button>
                Password
            </Button>
        </div>
        <div className='basic-form-container'>

        </div>
    </div>
  )
}

export default withAuth(EditProfilePage)