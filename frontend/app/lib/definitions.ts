export default interface User {
  username: string;
  id: string;
  display_name: string;
}

export interface Post {
  author: User;
  content: string;
  id: string;
  createdAt: string;
  tags: Tags;
  comment_count: number;
}
export interface Comment {
  id: string;
  author: User;
  content: string;
  post_id: string;
  timestamps: string;
}

export type Tags = string[]