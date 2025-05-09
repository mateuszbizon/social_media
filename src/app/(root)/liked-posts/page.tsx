"use client"

import withAuth from '@/components/auth/withAuth'
import LikedPosts from '@/components/posts/LikedPosts'

function LikedPostsPage() {
  return (
    <div>
        <h2 className='heading2 text-black-2 mb-5'>Your liked posts</h2>
        <LikedPosts />
    </div>
  )
}

export default withAuth(LikedPostsPage)