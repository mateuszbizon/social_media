"use client"

import useSearchUsers from '@/lib/hooks/services/users/useSearchUsers'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import CircleLoading from '../ui/circleLoading'
import MainError from '../errors/MainError'
import FlatList from '../common/FlatList'

type CreateChatSearchedUsersProps = {
    searchQuery: string
}

function CreateChatSearchedUsers({ searchQuery }: CreateChatSearchedUsersProps) {
    const { data, isFetchingNextPage, fetchNextPage, isError, error, isPending } = useSearchUsers({
        query: searchQuery
    })
    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView) {
            fetchNextPage()
        }
    }, [inView, fetchNextPage])

    if (searchQuery === "") return null

    if (isPending) return <CircleLoading className='mx-auto' />

    if (isError) return <MainError message={error?.message || ""} />

  return (
    <div className='space-y-3'>
        {data?.pages.map(page => (
            <FlatList
                data={page.users}
                renderItem={(user) => (
                    <div>
                        {user.username}
                    </div>
                )}
                key={page.currentPage}
                keyExtractor={(user) => user.username}
                renderEmptyListComponent={() => (
                    <p className='text-center text-black-2'>No users found</p>
                )}
                className='space-y-3'
            />
        ))}
        <div ref={ref}>{isFetchingNextPage && <CircleLoading className='mx-auto' />}</div>
    </div>
  )
}

export default CreateChatSearchedUsers