"use client"

import useSearchUsers from '@/lib/hooks/services/users/useSearchUsers'
import React, { useEffect } from 'react'
import CircleLoading from '../ui/circleLoading'
import MainError from '../errors/MainError'
import { useInView } from 'react-intersection-observer'

type SearchedUsersProps = {
    searchValue: string
}

function SearchedUsers({ searchValue }: SearchedUsersProps) {
    const { data, isError, isPending, error, isFetchingNextPage, fetchNextPage } = useSearchUsers({
        query: searchValue
    })
    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView) {
            fetchNextPage()
        }
    }, [inView, fetchNextPage])

    if (searchValue === "") return null

    if (isPending) return <CircleLoading className='mx-auto' />

    if (isError) return <MainError message={error?.message || ""} />

  return (
    <div>
        <div className='space-y-3'>
            {data?.pages.map(page => (
                <div key={page.currentPage} className='space-y-3'>
                    {page.users.map(user => (
                        <div key={user.username}>
                            {user.username}
                        </div>
                    ))}
                    
                    {page.users.length == 0 && (
                        <p className='text-center text-black-2'>No users found</p>
                    )}
                </div>
            ))}

            <div ref={ref}>{isFetchingNextPage && <CircleLoading className='mx-auto' />}</div>
        </div>
    </div>
  )
}

export default SearchedUsers