"use client"

import { userProfileSchema, UserProfileSchema } from '@/lib/validations/userProfileSchema'
import { User } from '@/types/models'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import ImageHolder from './ImageHolder'
import { zodResolver } from '@hookform/resolvers/zod'
import { getFileFromUrl } from '@/lib/utils'
import useUpdateUserProfile from '@/lib/hooks/services/users/useUpdateUserProfile'

type UpdateUserProfileFormProps = {
    user: User
}

function UpdateUserProfileForm({ user }: UpdateUserProfileFormProps) {
    const [avatar, setAvatar] = useState<string | null>(user.avatar)
    const form = useForm<UserProfileSchema>({
        resolver: zodResolver(userProfileSchema),
        defaultValues: {
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            avatar: undefined,
        }
    })
    const { handleUpdateUserProfile } = useUpdateUserProfile()

    useEffect(() => {
        const handleGetFile = async () => {
            if (user.avatar) {
                const file = await getFileFromUrl(user.avatar)

                if (file) {
                    form.setValue('avatar', file)
                }
            }
        }

        handleGetFile()
    }, [])

    function onChangeImage(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0]

        if (file) {
            const imageUrl = URL.createObjectURL(file)

            setAvatar(imageUrl)
            form.setValue('avatar', file)
        }
    }

    function deleteImage() {
        setAvatar(null)
        form.setValue('avatar', undefined)
    }

    async function onSubmit(data: UserProfileSchema) {
        console.log(data)

        const formData = new FormData()
        formData.append('firstName', data.firstName)
        formData.append('lastName', data.lastName)
        formData.append('username', data.username)
        formData.append('avatar', data.avatar)

        await handleUpdateUserProfile(formData)
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
            <FormField
                control={form.control}
                name='avatar'
                render={() => (
                    <FormItem>
                        <FormLabel>Avatar</FormLabel>
                        <FormControl>
                            <ImageHolder onChangeImage={onChangeImage} deleteImage={deleteImage} imageUrl={avatar} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <div className='grid md:grid-cols-2 gap-5'>
                <FormField
                    control={form.control}
                    name='firstName'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>First name</FormLabel>
                            <FormControl>
                                <Input placeholder='First name' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='lastName'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Last name</FormLabel>
                            <FormControl>
                                <Input placeholder='Last name' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input placeholder='Username' {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <Button type='submit' className='w-full' disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Submitting..." : "Submit"}
            </Button>
        </form>
    </Form>
  )
}

export default UpdateUserProfileForm