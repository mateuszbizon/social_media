import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Trash2 } from 'lucide-react'
import { useAuthContext } from '@/context/AuthContext'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import useDeleteCommentReply from '@/lib/hooks/services/replies/useDeleteCommentReply'

type CommentReplyDeleteProps = {
    replyId: string
    authorId: string
}

function CommentReplyDelete({ replyId, authorId }: CommentReplyDeleteProps) {
    const { isAuthor } = useAuthContext()
    const { handleDeleteCommentReply, isPending } = useDeleteCommentReply()
    const [deleteCommentOpen, setDeleteCommentOpen] = useState(false)

    async function deleteReply() {
        await handleDeleteCommentReply(replyId)
        setDeleteCommentOpen(false)
    }

    if (!isAuthor(authorId)) return null

  return (
    <Dialog open={deleteCommentOpen} onOpenChange={setDeleteCommentOpen}>
        <DialogTrigger asChild>
            <Button variant={"transparent"} size={"link"} className='hover:bg-transparent text-red-2 hover:text-red-3'>
                <Trash2  />
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Are you sure you want to delete this reply?</DialogTitle>
                <DialogDescription>This action cannot be undone. This will permanently delete your reply.</DialogDescription>
            </DialogHeader>
            <DialogFooter className='gap-3 sm:justify-center'>
                <DialogClose asChild>
                    <Button variant={"outline"} size={"sm"}>
                        Cancel
                    </Button>
                </DialogClose>
                <Button variant={"destructive"} size={"sm"} onClick={deleteReply} disabled={isPending}>
                    Delete
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default CommentReplyDelete