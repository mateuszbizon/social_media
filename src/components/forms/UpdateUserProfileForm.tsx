"use client"

import { UserProfileSchema } from '@/lib/validations/userProfileSchema'
import { User } from '@/types/models'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

type UpdateUserProfileFormProps = {
    user: User
}

function UpdateUserProfileForm({ user }: UpdateUserProfileFormProps) {
    const form = useForm<UserProfileSchema>({
        defaultValues: {
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            avatar: null,
        }
    })

    function onSubmit(data: UserProfileSchema) {
        console.log(data)
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
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

            <Button type='submit' className='w-full'>
                {form.formState.isSubmitting ? "Submitting..." : "Submit"}
            </Button>
        </form>
    </Form>
  )
}

export default UpdateUserProfileForm