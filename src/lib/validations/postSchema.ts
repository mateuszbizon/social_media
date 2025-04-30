import { ALLOWED_FILE_TYPES, FILE_TYPE_NOT_ALLOWED, POST_CONTENT_EMPTY } from "@/constants/validations";
import { z } from "zod";

export const postSchema = z.object({
    content: z.string().min(1, POST_CONTENT_EMPTY),
    image: z.any().refine((file: File) => {
        return ALLOWED_FILE_TYPES.includes(file.type);
    }, FILE_TYPE_NOT_ALLOWED).optional()
})

export type PostSchema = z.infer<typeof postSchema>