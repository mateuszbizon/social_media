"use client"

import { postSchema, PostSchema } from '@/lib/validations/postSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import ImageHolder from './ImageHolder'
import { Post } from '@/types/models'
import { getFileFromUrl } from '@/lib/utils'
import CircleLoading from '../ui/circleLoading'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

type PostFormProps = {
    post?: Post
}

function PostForm({ post }: PostFormProps) {
    const [postImage, setPostImage] = useState<string | null>(post ? post.image : null)
    const [isImageLoading, setIsImageLoading] = useState(false)
    const form = useForm<PostSchema>({
        resolver: zodResolver(postSchema),
        defaultValues: {
            content: post ? post.content : "",
            image: undefined
        }
    })

    useEffect(() => {
        if (!post) return

        const handleGetFile = async () => {
            setIsImageLoading(true)

            if (post.image) {
                const file = await getFileFromUrl(post.image)

                if (file) {
                    form.setValue('image', file)
                }
            }

            setIsImageLoading(false)
        }

        handleGetFile()
    }, [])

    function onChangeImage(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0]

        if (file) {
            const imageUrl = URL.createObjectURL(file)

            setPostImage(imageUrl)
            form.setValue('image', file)
        }
    }

    function deleteImage() {
        setPostImage(null)
        form.setValue('image', undefined)
    }

    function onSubmit(data: PostSchema) {
        console.log(data)
    }

    if (post && isImageLoading) {
        return <CircleLoading className='mx-auto' />
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
            <FormField
                control={form.control}
                name='content'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Post content</FormLabel>
                        <FormControl>
                            <Textarea placeholder='Content' {...field} className='resize-none min-h-24'></Textarea>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name='image'
                render={() => (
                    <FormItem>
                        <FormLabel>Avatar</FormLabel>
                        <FormControl>
                            <ImageHolder isAvatar={false} onChangeImage={onChangeImage} deleteImage={deleteImage} imageUrl={postImage} />
                        </FormControl>
                        <FormDescription className='lg:hidden'>Click image to change</FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <Button type='submit' disabled={form.formState.isSubmitting} className='w-full md:w-1/2'>
                {post ? "Update post" : "Create post"}
            </Button>
        </form>
    </Form>
  )
}

export default PostForm