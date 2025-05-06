import React, { useState } from 'react'

function useReply() {
    const [replyFormShow, setReplyFormShow] = useState(false)
    
    function toggleReplyForm() {
        setReplyFormShow(prev => !prev)
    }

    function closeReplyForm() {
        setReplyFormShow(false)
    }

  return {
    replyFormShow,
    toggleReplyForm,
    closeReplyForm,
  }
}

export default useReply