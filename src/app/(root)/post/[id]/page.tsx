import { getSinglePost } from '@/lib/services/posts'
import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
    params: Promise<{ id: string }>
}

async function SinglePostPage({ params }: Props) {
    const { id } = await params
    const postResult = await getSinglePost(id)

    if (postResult.status == 404) return notFound()

    if (postResult.error) throw new Error(postResult.error)

    console.log(postResult.data)

  return (
    <div>SinglePostPage</div>
  )
}

export default SinglePostPage