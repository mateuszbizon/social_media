"use client"

import useCreateCommentReply from '@/lib/hooks/services/replies/useCreateCommentReply'
import { postCommentSchema, PostCommentSchema } from '@/lib/validations/postCommentSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

type CommentReplyFormProps = {
    commentId: string
    replyingToId: string
}

function CommentReplyForm({ commentId, replyingToId }: CommentReplyFormProps) {
    const { handleCreateCommentReply } = useCreateCommentReply({
        commentId
    })
    const form = useForm<PostCommentSchema>({
        resolver: zodResolver(postCommentSchema),
        defaultValues: {
            content: ""
        }
    })

    async function onSubmit(data: PostCommentSchema) {
        console.log(data)

        await handleCreateCommentReply({
            commentId,
            replyingToId,
            comment: data
        }, {
            onSuccess: () => {
                form.reset()
            }
        })
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
            <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className='sr-only'>Reply</FormLabel>
                        <FormControl>
                            <Textarea {...field} placeholder='Your reply' className='resize-none'></Textarea>
                        </FormControl>
                    </FormItem>
                )}
            />

            <div className='flex justify-end'>
                <Button type='submit' size={"sm"}>
                    Reply
                </Button>
            </div>
        </form>
    </Form>
  )
}

export default CommentReplyForm