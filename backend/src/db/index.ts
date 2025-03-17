export type Post = {
    id: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

const posts: Post[] = [
    {
        id: 1,
        content: 'Welcome to my first blog post!',
        createdAt: new Date(),
        updatedAt: new Date(),
    }, {
        id: 2,
        content: 'Welcome to my first blog post!',
        createdAt: new Date(),
        updatedAt: new Date(),
    }
]

export default {posts}