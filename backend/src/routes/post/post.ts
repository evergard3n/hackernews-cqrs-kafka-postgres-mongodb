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
        const postContent = request.body;
        const post: Post = {
            id: db.posts.length + 1,
            content: postContent.content,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        db.posts.push(post);
        reply.status(201);
        return post;
    })
}
export default route;