import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import { PostSchemas } from "../../schemas/index.ts";
import db from "../../db/index.ts";

const route: FastifyPluginAsyncTypebox = async (app) => {
    app.patch('/:postId', {
        schema: {
            params: PostSchemas.Params.PostId,
            body: PostSchemas.Bodies.UpdatePost,
            response: {
                200: PostSchemas.Bodies.Post
            }
        }
    }, async (request, reply) => {
        const postId = request.params.postId;
        const post = db.posts.find(post => post.id === postId);
        if (!post) {
            throw app.httpErrors.notFound();
        }
        const updatedPost = {
            ...post,
            ...request.body,
            updatedAt: new Date(),
            id: postId,
        }
        db.posts = db.posts.map(post => post.id === postId ? updatedPost : post);
        return updatedPost
    })
}
export default route