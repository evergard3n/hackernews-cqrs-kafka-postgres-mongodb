import { Partial, Type } from "@sinclair/typebox";
import CommonSchemas from "../commons/index.ts"

export const CreatePost = Type.Object({
    content: Type.String()
})

export const UpdatePost = Type.Partial(CreatePost)

export const Post = Type.Intersect([
    Type.Object({
        id: Type.Number(),
        author: Type.Object({
            id: Type.String(),
            display_name: Type.String(),
            username: Type.String()
        }),
        createdAt: Type.String(),
        updatedAt: Type.String(),
    }),
    CreatePost
])

export const PostsPaginated = CommonSchemas.Bodies.PaginationResult(Post)