import React, { useState } from 'react'

function useShowPassword() {
    const [passwordShown, setPasswordShown] = useState(false)
    const passwordType = passwordShown ? "text" : "password"

    function togglePassword() {
        setPasswordShown(prev => !prev)
    }

  return {
    passwordShown,
    passwordType,
    togglePassword
  }
}

export default useShowPassword