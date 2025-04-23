"use client"

import { signInSchema, SignInSchema } from '@/lib/validations/signInSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import useSignIn from '@/lib/hooks/services/users/useSignIn'
import useShowPassword from '@/lib/hooks/useShowPassword'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'

function SignInForm() {
    const { handleSignIn } = useSignIn()
    const form = useForm<SignInSchema>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    })
    const { passwordShown, passwordType, togglePassword } = useShowPassword()

    async function onSubmit(data: SignInSchema) {
        await handleSignIn(data)
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
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
            <div className="flex items-center space-x-2">
                <Checkbox id="password" onCheckedChange={togglePassword} checked={passwordShown} />
                <Label htmlFor="password">
                    Show password
                </Label>
            </div>
            <Button type='submit' className='w-full' disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Signing in..." : "Sign in"}
            </Button>
        </form>
    </Form>
  )
}

export default SignInForm