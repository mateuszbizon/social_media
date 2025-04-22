"use client"

import { userPasswordSchema, UserPasswordSchema } from '@/lib/validations/userPasswordSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

function UpdateUserPasswordForm() {
    const form = useForm<UserPasswordSchema>({
        resolver: zodResolver(userPasswordSchema),
        defaultValues: {
            oldPassword: "",
            password: "",
            confirmPassword: ""
        }
    })

    function onSubmit(data: UserPasswordSchema) {
        console.log(data)
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
            <FormField
                control={form.control}
                name='oldPassword'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Old password</FormLabel>
                        <FormControl>
                            <Input type='password' placeholder='Old password' {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input type='password' placeholder='Password' {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Confirm password</FormLabel>
                        <FormControl>
                            <Input type='password' placeholder='Confirm password' {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <Button className='w-full' type='submit' disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Submitting..." : "Update password"}
            </Button>
        </form>
    </Form>
  )
}

export default UpdateUserPasswordForm