import { create } from "zustand"

export type Reply = {
    commentId: string
    replyingToId: string
    replyingTo: string
}

export type ReplyStore = {
    reply: Reply | null
    setReply: (reply: Reply | null) => void
    clearReply: () => void
}

const useReplyStore = create<ReplyStore>()(set => ({
    reply: null,
    setReply: (reply) => set({ reply }),
    clearReply: () => set({ reply: null })
}))

export default useReplyStore