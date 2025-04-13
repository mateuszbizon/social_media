import SignInForm from '@/components/forms/SignInForm'
import React from 'react'

function SignInPage() {
  return (
    <>
        <h1 className='heading1 gradient-text text-center mb-10'>Matgram</h1>
        <div className='w-full max-w-[400px] mx-auto'>
            <h2 className='heading2 text-center text-black-2 mb-5'>Sign in</h2>
            <SignInForm />
        </div>
    </>
  )
}

export default SignInPage