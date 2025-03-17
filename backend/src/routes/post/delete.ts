import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import { PostSchemas } from "../../schemas/index.ts";
import db from "../../db/index.ts";

const route: FastifyPluginAsyncTypebox = async (app) => {
    app.delete('/:postId', {
        schema: {
            params: PostSchemas.Params.PostId,
            response: {
                200: PostSchemas.Bodies.Post
            }
        }
    }, async (request, reply) => {
        const postId = request.params.postId;
        const post = db.posts.find(post => post.id === postId);
        if (!post) {
            reply.status(404);
        } else {
            db.posts = db.posts.filter(post => post.id !== postId);
            return post
        }
    })
}
export default route