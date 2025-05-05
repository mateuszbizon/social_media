"use client"

import { postCommentSchema, PostCommentSchema } from '@/lib/validations/postCommentSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Textarea } from '../ui/textarea'
import { useAuthContext } from '@/context/AuthContext'
import { Button } from '../ui/button'
import useCreatePostComment from '@/lib/hooks/services/comments/useCreatePostComment'
import useReplyStore from '@/lib/store/replyStore'

type PostCommentFormProps = {
    postId: string
}

function PostCommentForm({ postId }: PostCommentFormProps) {
    const { handleCreatePostComment } = useCreatePostComment({
        postId,
        sort: "desc"
    })
    const { user } = useAuthContext()
    const { reply } = useReplyStore()
    const form = useForm<PostCommentSchema>({
        resolver: zodResolver(postCommentSchema),
        defaultValues: {
            content: ""
        }
    })

    async function onSubmit(data: PostCommentSchema) {
        console.log(data)

        if (reply) {
            console.log("To do: create reply")
            return
        }

        await handleCreatePostComment({
            commentData: data,
            postId
        }, {
            onSuccess: () => {
                form.reset()
            }
        })
    }

    if (!user) return null

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
            <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                    <FormItem className='relative'>
                        <FormLabel className='sr-only'>Comment</FormLabel>
                        <p className={`absolute left-0 top-0 text-sm text-primary ${reply ? "-translate-y-5 opacity-100" : "translate-y-0 opacity-0 pointer-events-none"} transition-all`}>Replying to {reply?.replyingTo}</p>
                        <FormControl>
                            <Textarea {...field} placeholder={`Your ${reply ? "reply" : "comment"}`} className='resize-none'></Textarea>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <div className='flex justify-end'>
                <Button type='submit' size={"sm"}>
                    Comment
                </Button>
            </div>
        </form>
    </Form>
  )
}

export default PostCommentForm