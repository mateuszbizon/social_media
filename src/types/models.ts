export type User = {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    avatar: string | null;
}

export type Post = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    content: string;
    image: string | null;
    authorId: string;
}

export type PostLike = {
    id: string;
    postId: string;
    userId: string;
    createdAt: Date;
}

export type Comment = {
    id: string;
    postId: string;
    content: string;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
}

export type CommentLike = {
    id: string;
    commentId: string;
    userId: string;
    createdAt: Date;
}

export type Reply = {
    commentId: string;
    id: string;
    content: string;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
}

export type ReplyLike = {
    id: string;
    createdAt: Date;
    userId: string;
    replyId: string;
}