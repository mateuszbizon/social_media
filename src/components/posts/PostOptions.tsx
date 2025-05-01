"use client"

import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Ellipsis } from 'lucide-react'
import Link from 'next/link'
import { useAuthContext } from '@/context/AuthContext'

type PostOptionsProps = {
    postId: string
    authorId: string
}

function PostOptions({ postId, authorId }: PostOptionsProps) {
    const { isAuthor } = useAuthContext()

    if (!isAuthor(authorId)) return null

  return (
    <Dialog>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"transparent"} size={"icon"}>
                    <Ellipsis className='size-5' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem asChild>
                    <Link href={`/edit-post/${postId}`}>
                        Edit post
                    </Link>
                </DropdownMenuItem>
                <DialogTrigger asChild>
                    <DropdownMenuItem className='text-red-2'>
                        Delete post
                    </DropdownMenuItem>
                </DialogTrigger>
            </DropdownMenuContent>
        </DropdownMenu>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Are you sure you want to delete this post?</DialogTitle>
                <DialogDescription>
                    This action cannot be undone. This will permanently delete your post and remove it from your profile.
                </DialogDescription>
            </DialogHeader>
            <DialogFooter className='gap-3 sm:justify-center'>
                <DialogClose asChild>
                    <Button variant={"outline"} size={"sm"}>
                        Cancel
                    </Button>
                </DialogClose>
                <Button variant={"destructive"} size={"sm"}>
                    Delete
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default PostOptions