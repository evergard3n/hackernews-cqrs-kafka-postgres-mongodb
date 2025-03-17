import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import db from "../../db/index.ts";
import { PostSchemas } from "../../schemas/index.ts";
import CommonSchemas from "../../schemas/commons/index.ts";
import { placeholderComments } from "../../db/placeholder.ts";
import { request } from "http";
const route: FastifyPluginAsyncTypebox = async (app) => {
  app.get(
    "/:postId",
    {
      schema: {
        params: PostSchemas.Params.PostId,
        response: {
          200: PostSchemas.Bodies.Post,
        },
      },
    },
    async (request, reply) => {
      const postId = request.params.postId;
      const post = db.posts.find((post) => post.id === postId);
      if (!post) {
        throw app.httpErrors.notFound();
      }
      return post;
    }
  );

  app.get(
    "/",
    {
      schema: {
        querystring: CommonSchemas.Queries.Pagination,
        response: {
          200: PostSchemas.Bodies.PostsPaginated,
        },
      },
    },
    ({ query: { offset, limit } }) => ({
      count: db.posts.length,
      data: db.posts.slice(offset, offset + limit),
    })
  );
  app.get(
    "/comment",
    {
      schema: {
        querystring: CommonSchemas.Queries.Pagination,
        response: {
          200: PostSchemas.Bodies.CommentsPaginated,
        },
      },
    },
    ({ query: { offset, limit } }) => ({
      count: placeholderComments.length,
      data: placeholderComments.slice(offset, offset + limit),
    })
  );
  app.get("/:postId/comment", {
    schema: {
      params: PostSchemas.Params.PostId,
      querystring: CommonSchemas.Queries.Pagination,
      response: {
        200: PostSchemas.Bodies.Comments,
      },
    }
  }, async (request, reply) => {
    const postId = request.params.postId;
    const comments = placeholderComments.filter(comment => comment.post_id === postId);
    if (!comments) {
      throw app.httpErrors.notFound();
    }
    return comments
  })
  
};

export default route;
