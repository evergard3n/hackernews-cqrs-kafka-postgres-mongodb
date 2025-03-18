import { Partial, Type } from "@sinclair/typebox";
import CommonSchemas from "../commons/index.ts";

export const CreatePost = Type.Object({
  content: Type.String(),
  author: Type.Object({
    id: Type.String(),
    display_name: Type.String(),
    username: Type.String(),
  })
});

export const UpdatePost = Type.Partial(CreatePost);

export const Comment = Type.Object({
  id: Type.String(),
  author: Type.Object({
    id: Type.String(),
    display_name: Type.String(),
    username: Type.String(),
  }),
  content: Type.String(),
  post_id: Type.Number(),
  timestamps: Type.String(),
});

export const Comments = Type.Array(Comment);

export const Post = Type.Intersect([
  Type.Object({
    id: Type.Number(),
    author: Type.Object({
      id: Type.String(),
      display_name: Type.String(),
      username: Type.String(),
    }),
    createdAt: Type.String(),
    updatedAt: Type.String(),
    comment_count: Type.Number({default: 0}),
  }),
  CreatePost,
]);

export const PostsPaginated = CommonSchemas.Bodies.PaginationResult(Post);
export const CommentsPaginated = CommonSchemas.Bodies.PaginationResult(Comment);
