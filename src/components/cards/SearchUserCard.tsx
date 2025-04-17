import { SearchUser } from '@/types/userResponse'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

type SearchUserCardProps = {
    user: SearchUser
}

function SearchUserCard({ user }: SearchUserCardProps) {
  return (
    <Button variant={"transparent"} className='w-full justify-start px-2 gap-3' asChild>
        <Link href={`/user/${user.username}`}>
            <div className='relative size-12'>
                <Image src={user.avatar || "/user_empty.jpg"} alt='User avatar' fill className='rounded-full object-cover' />
            </div>
            <div className='text-sm font-normal text-black-2 space-y-1'>
                <p className='font-medium line-clamp-1'>{user.username}</p>
                <p className='line-clamp-1'>{user.firstName} {user.lastName} - followers: {user.followersCount}</p>
            </div>
        </Link>
    </Button>
  )
}

export default SearchUserCard