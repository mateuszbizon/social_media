import SignInForm from '@/components/forms/SignInForm'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function SignInPage() {
  return (
    <>
        <h1 className='heading1 gradient-text text-center mb-10'>Matgram</h1>
        <div className='basic-form-container'>
            <h2 className='heading2 text-center text-black-2 mb-5'>Sign in</h2>
            <SignInForm />
            <p className='text-center text-black-2 mt-5'>
                Don't have account yet? 
                <Link href={"/sign-up"} className={`ml-2 ${buttonVariants({ variant: "link", size: "link" })}`}>
                    Create account
                </Link>
            </p>
        </div>
    </>
  )
}

export default SignInPage