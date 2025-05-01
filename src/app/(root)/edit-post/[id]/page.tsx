"use client"

import withAuth from '@/components/auth/withAuth'
import { User } from '@/types/models'
import { useParams } from 'next/navigation'
import React from 'react'

type Props = {
    user: User
}

function EditPostPage({ user }: Props) {
    const { id } = useParams<{ id: string }>()

  return (
    <div>EditPostPage</div>
  )
}

export default withAuth(EditPostPage)