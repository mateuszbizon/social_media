import { POST_COMMENT_CONTENT_EMPTY } from "@/constants/validations";
import { z } from "zod";

export const postCommentSchema = z.object({
    content: z.string().min(1, POST_COMMENT_CONTENT_EMPTY)
})

export type PostCommentSchema = z.infer<typeof postCommentSchema>