import { Author as User } from "./index.ts";
import { Comment } from "./index.ts";

// Placeholder users for the comments
const user1: User = {
  username: "john_doe",
  display_name: "John Doe",
  id: "user-1",
};

const user2: User = {
  username: "jane_smith",
  display_name: "Jane Smith",
  id: "user-2",
};

const user3: User = {
  username: "peter_jones",
  display_name: "Peter Jones",
  id: "user-3",
};

// Placeholder comments
export const placeholderComments: Comment[] = [
  {
    id: "comment-1",
    author: user1,
    content: "This is a great post! Thanks for sharing.",
    post_id: 1,
    timestamps: "2023-10-27T10:00:00Z",
  },
  {
    id: "comment-2",
    author: user2,
    content: "I have a question about this. Can you elaborate?",
    post_id: 1,
    timestamps: "2023-10-27T11:30:00Z",
  },
  {
    id: "comment-3",
    author: user3,
    content: "Interesting perspective. I hadn't thought of it that way.",
    post_id: 2,
    timestamps: "2023-10-28T09:15:00Z",
  },
  {
    id: "comment-4",
    author: user1,
    content: "I agree with Jane. More details would be helpful.",
    post_id: 2,
    timestamps: "2023-10-27T12:00:00Z",
  },
  {
    id: "comment-5",
    author: user2,
    content: "This is very informative. I learned a lot.",
    post_id: 2,
    timestamps: "2023-10-29T14:45:00Z",
  },
  {
    id: "comment-6",
    author: user3,
    content: "Could you provide some examples?",
    post_id: 2,
    timestamps: "2023-10-29T15:00:00Z",
  },
  {
    id: "comment-7",
    author: user1,
    content: "I'm not sure I understand this part.",
    post_id: 2,
    timestamps: "2023-10-28T10:00:00Z",
  },
];
