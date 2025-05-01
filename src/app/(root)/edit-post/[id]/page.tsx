"use client"

import withAuth from '@/components/auth/withAuth'
import MainError from '@/components/errors/MainError'
import CircleLoading from '@/components/ui/circleLoading'
import useGetBasicPost from '@/lib/hooks/services/posts/useGetBasicPost'
import { User } from '@/types/models'
import { useParams } from 'next/navigation'
import React from 'react'

type Props = {
    user: User
}

function EditPostPage({ user }: Props) {
    const { id } = useParams<{ id: string }>()
    const { data, isError, error, isPending } = useGetBasicPost({
        postId: id
    })

    if (isPending) return <CircleLoading className='mx-auto' />

    if (isError) return <MainError message={error?.message || ""} />

    if (data?.authorId !== user.id) return <MainError message='Forbidden' />

  return (
    <div>EditPostPage</div>
  )
}

export default withAuth(EditPostPage)