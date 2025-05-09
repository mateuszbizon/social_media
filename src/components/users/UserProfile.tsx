"use client"

import { GetUserProfileResponse } from '@/types/userResponse'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useAuthContext } from '@/context/AuthContext'
import FollowUser from './FollowUser'

type UserProfileProps = {
    userProfile: GetUserProfileResponse
}

function UserProfile({ userProfile }: UserProfileProps) {
    const { isAuthor } = useAuthContext()

  return (
    <div className='flex flex-col md:flex-row gap-5'>
        <div className='flex justify-center md:w-1/3'>
            <div className='relative size-[100px] md:size-[150px]'>
                <Image src={userProfile.user.avatar || "/user_empty.jpg"} alt='User avatar' fill className='rounded-full object-cover' />
            </div>
        </div>
        <div className='space-y-5 md:space-y-8 md:grow'>
            <div className='flex justify-center items-center md:justify-start flex-wrap gap-5'>
                <p className='text-black-2 text-lg md:text-xl font-medium'>{userProfile.user.username}</p>
                {isAuthor(userProfile.user.id) && (
                    <Button asChild>
                        <Link href={"/user/edit-profile"}>
                            Edit profile
                        </Link>
                    </Button>
                )}
            </div>
            <div className='grid grid-cols-3'>
                <div className='space-y-2'>
                    <p className='text-center text-black-2 font-semibold md:text-lg'>Posts</p>
                    <p className='text-center text-black-2 md:text-lg'>{userProfile.postsCount}</p>
                </div>
                <div className='space-y-2'>
                    <p className='text-center text-black-2 font-semibold md:text-lg'>Followers</p>
                    <p className='text-center text-black-2 md:text-lg'>{userProfile.followersCount}</p>
                </div>
                <div className='space-y-2'>
                    <p className='text-center text-black-2 font-semibold md:text-lg'>Following</p>
                    <p className='text-center text-black-2 md:text-lg'>{userProfile.followingCount}</p>
                </div>
            </div>
            <div>
                <p className='text-black-2 text-lg md:text-xl text-center md:text-left'>{userProfile.user.firstName} {userProfile.user.lastName}</p>
            </div>
            <FollowUser userToFollowId={userProfile.user.id} userFollowers={userProfile.followers} />
        </div>
    </div>
  )
}

export default UserProfile