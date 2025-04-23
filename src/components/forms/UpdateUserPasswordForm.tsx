"use client"

import { userPasswordSchema, UserPasswordSchema } from '@/lib/validations/userPasswordSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import useUpdateUserPassword from '@/lib/hooks/services/users/useUpdateUserPassword'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'
import useShowPassword from '@/lib/hooks/useShowPassword'

function UpdateUserPasswordForm() {
    const form = useForm<UserPasswordSchema>({
        resolver: zodResolver(userPasswordSchema),
        defaultValues: {
            oldPassword: "",
            password: "",
            confirmPassword: ""
        }
    })
    const { handleUpdateUserPassword } = useUpdateUserPassword()
    const { passwordShown, passwordType, togglePassword } = useShowPassword()

    async function onSubmit(data: UserPasswordSchema) {
        try {
            await handleUpdateUserPassword(data)
            form.reset()
        } catch (error) {
            console.error(error)
        }
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
                            <Input type={passwordType} placeholder='Old password' {...field} />
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
                            <Input type={passwordType} placeholder='Password' {...field} />
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
                            <Input type={passwordType} placeholder='Confirm password' {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <div className="flex items-center space-x-2">
                <Checkbox id="password" onCheckedChange={togglePassword} checked={passwordShown} />
                <Label htmlFor="password">
                    Show password
                </Label>
            </div>
            <Button className='w-full' type='submit' disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Submitting..." : "Update password"}
            </Button>
        </form>
    </Form>
  )
}

export default UpdateUserPasswordForm