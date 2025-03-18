import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import { PostSchemas } from "../../schemas/index.ts";
import db, { Post } from "../../db/index.ts";

const route: FastifyPluginAsyncTypebox = async (app) => {
    app.post('/', {
        schema: {
            body: PostSchemas.Bodies.CreatePost,
            response: {
                201: PostSchemas.Bodies.Post
            }
        }
    }, async (request,reply) => {
        const postContent = request.body.content;
        const author = request.body.author;
        const post: Post = {
            id: db.posts.length + 1,
            content: postContent,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            // TODO: do something with this author
            author: author,
            comment_count: 0
        }
        db.posts.push(post);
        reply.status(201);
        return post;
    })
}
export default route;