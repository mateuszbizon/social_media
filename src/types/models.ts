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