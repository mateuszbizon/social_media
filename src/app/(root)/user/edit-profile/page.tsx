"use client"

import withAuth from '@/components/auth/withAuth'
import { Button } from '@/components/ui/button'
import { ProfileOptions } from '@/types'
import { User } from '@/types/models'
import React, { useState } from 'react'

type Props = {
    user: User
}

function EditProfilePage({ user }: Props) {
    const [activeForm, setActiveForm] = useState<ProfileOptions>("profile")

  return (
    <div className='w-full max-w-[600px] mx-auto'>
        <div className='flex justify-center gap-2 flex-wrap mb-10'>
            <Button onClick={() => setActiveForm("profile")} variant={activeForm === "profile" ? "default" : "outline"}>
                Profile
            </Button>
            <Button onClick={() => setActiveForm("password")} variant={activeForm === "password" ? "default" : "outline"}>
                Password
            </Button>
        </div>
        <div className='basic-form-container border border-gray-2 rounded-xl p-5 shadow-xl'>
            <h2 className='text-center heading2 text-black-2 mb-5'>
                {activeForm === "profile" && "Edit profile"}
                {activeForm === "password" && "Change password"}
            </h2>

        </div>
    </div>
  )
}

export default withAuth(EditProfilePage)