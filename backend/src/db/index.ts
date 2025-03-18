export type Post = {
  id: number;
  content: string;
  author: Author;
  createdAt: string;
  updatedAt: string;
  comment_count: number;
};

export type Author = {
  id: string;
  display_name: string;
  username: string;
};

export type Comment = {
  id: string;
  author: Author;
  content: string;
  post_id: number;
  timestamps: string;
};

const posts: Post[] = [
  {
    id: 1,
    content: "Welcome to my first blog post!",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    author: {
      id: "1",
      display_name: "John Doe",
      username: "johndoe",
    },
    comment_count: 2
  },
  {
    id: 2,
    content: "Welcome to my first blog post!",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    author: {
      id: "1",
      display_name: "John Doe",
      username: "johndoe",
    },
    comment_count: 5
  },
];

export default { posts };
