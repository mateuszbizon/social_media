import SinglePost from '@/components/posts/SinglePost'
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

  return (
    <div>
        {postResult.data && (
            <SinglePost 
                post={postResult.data.post} 
                author={postResult.data.author} 
                commentsCount={postResult.data.commentsCount} 
                likes={postResult.data.likes} 
            />
        )}
    </div>
  )
}

export default SinglePostPage