export type Post = {
    id: number;
    content: string;
    author: Author;
    createdAt: string;
    updatedAt: string;
}

export type Author = {
    id: string;
    display_name: string;
    username: string;
}


const posts: Post[] = [
    {
        id: 1,
        content: 'Welcome to my first blog post!',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        author: {
            id: '1',
            display_name: 'John Doe',
            username: 'johndoe'
        }
    }, {
        id: 2,
        content: 'Welcome to my first blog post!',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        author: {
            id: '1',
            display_name: 'John Doe',
            username: 'johndoe'
        }
    }
]

export default {posts}