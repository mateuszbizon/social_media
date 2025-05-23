import SignUpForm from '@/components/forms/SignUpForm'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function SignUpPage() {
  return (
    <div>
        <h1 className='heading1 gradient-text text-center mb-10'>Matgram</h1>
        <div className='basic-form-container'>
            <h2 className='heading2 text-center text-black-2 mb-5'>Sign up</h2>
            <SignUpForm />
            <p className='text-center text-black-2 mt-5'>
                Already have account? 
                <Link href={"/sign-in"} className={`ml-2 ${buttonVariants({ variant: "link", size: "link" })}`}>
                    Sign in
                </Link>
            </p>
        </div>
    </div> 
  )
}

export default SignUpPage