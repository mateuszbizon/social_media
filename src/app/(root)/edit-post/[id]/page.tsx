"use client"

import withAuth from '@/components/auth/withAuth'
import MainError from '@/components/errors/MainError'
import PostForm from '@/components/forms/PostForm'
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
    <div>
        <h2 className='heading2 text-black-2 mb-5'>Edit post</h2>
        <div className='border border-gray-2 rounded-xl p-5 shadow-xl'>
            <PostForm post={data} />
        </div>
    </div>
  )
}

export default withAuth(EditPostPage)