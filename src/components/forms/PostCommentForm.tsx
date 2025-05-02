"use client"

import { postCommentSchema, PostCommentSchema } from '@/lib/validations/postCommentSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Textarea } from '../ui/textarea'
import { useAuthContext } from '@/context/AuthContext'
import { Button } from '../ui/button'

function PostCommentForm() {
    const { user } = useAuthContext()
    const form = useForm<PostCommentSchema>({
        resolver: zodResolver(postCommentSchema),
        defaultValues: {
            content: ""
        }
    })

    function onSubmit(data: PostCommentSchema) {
        console.log(data)
    }

    if (!user) return null

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
            <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className='sr-only'>Comment</FormLabel>
                        <FormControl>
                            <Textarea {...field} placeholder='Your comment' className='resize-none'></Textarea>
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