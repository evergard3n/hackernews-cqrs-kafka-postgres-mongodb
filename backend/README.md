# Hackernews Clone

## Disclaimer

This is a fork of the original project, serving the purpose of improvising the UI. For the sake of simplicity, I created a lightweight Fastify server to replace the original chunky set up.

This README contains the installation guide and current available API endpoints.
## Setup

cd to backend and run `pnpm install`

## API Endpoints

- Default port: 3000

- Authentication is not yet implemented

- Create Post

```jsonc
// POST /api/post
// JSON Body
// Authentication not yet work. TODO: replace with authentication in header.
{
  "content": "This is a clone of Hackernews",
  "author": {
                "id": "1",
                "display_name": "John Doe",
                "username": "johndoe"
            }
}
// Response
{
    "id": 3,
    "author": {
        "id": "1",
        "display_name": "John Doe",
        "username": "johndoe"
    },
    "createdAt": "2025-03-18T09:10:33.983Z",
    "updatedAt": "2025-03-18T09:10:33.983Z",
    "comment_count": 0,
    "content": "This is a clone of Hackernews"
}
```

- Get Posts

```jsonc
// GET /api/post?offset=<num>&limit=<num>
// Response
{
    "count": 3,
    "data": [
        {
            "id": 1,
            "author": {
                "id": "1",
                "display_name": "John Doe",
                "username": "johndoe"
            },
            "createdAt": "2025-03-18T09:07:43.417Z",
            "updatedAt": "2025-03-18T09:07:43.417Z",
            "comment_count": 2,
            "content": "Welcome to my first blog post!"
        },
        {
            "id": 2,
            "author": {
                "id": "1",
                "display_name": "John Doe",
                "username": "johndoe"
            },
            "createdAt": "2025-03-18T09:07:43.417Z",
            "updatedAt": "2025-03-18T09:07:43.417Z",
            "comment_count": 5,
            "content": "Welcome to my first blog post!"
        },
        {
            "id": 3,
            "author": {
                "id": "1",
                "display_name": "John Doe",
                "username": "johndoe"
            },
            "createdAt": "2025-03-18T09:10:33.983Z",
            "updatedAt": "2025-03-18T09:10:33.983Z",
            "comment_count": 0,
            "content": "This is a clone of Hackernews"
        }
    ]
}
```

- Get Post By ID

```jsonc
// GET /api/post/:post_id
// Response
{
    "id": 2,
    "author": {
        "id": "1",
        "display_name": "John Doe",
        "username": "johndoe"
    },
    "createdAt": "2025-03-18T09:07:43.417Z",
    "updatedAt": "2025-03-18T09:07:43.417Z",
    "comment_count": 5,
    "content": "Welcome to my first blog post!"
}
```

<!-- - Create Comment

```jsonc
// POST /api/post/:post_id/comment
// JSON Body
{
  "content": "This is a comment"
}
// Response
{
  "id": "1",
  "author": {
    "id": "1",
    "username": "qninhdt",
    "display_name": "Quang Ninh"
  },
  "content": "This is a comment",
  "created_at": "2021-07-01T00:00:00Z"
}
``` -->

- Get Comments by Post ID

```jsonc
// GET /api/post/:post_id/comment
// Response
[
    {
        "id": "comment-3",
        "author": {
            "id": "user-3",
            "display_name": "Peter Jones",
            "username": "peter_jones"
        },
        "content": "Interesting perspective. I hadn't thought of it that way.",
        "post_id": 2,
        "timestamps": "2023-10-28T09:15:00Z"
    },
    {
        "id": "comment-4",
        "author": {
            "id": "user-1",
            "display_name": "John Doe",
            "username": "john_doe"
        },
        "content": "I agree with Jane. More details would be helpful.",
        "post_id": 2,
        "timestamps": "2023-10-27T12:00:00Z"
    },
    {
        "id": "comment-5",
        "author": {
            "id": "user-2",
            "display_name": "Jane Smith",
            "username": "jane_smith"
        },
        "content": "This is very informative. I learned a lot.",
        "post_id": 2,
        "timestamps": "2023-10-29T14:45:00Z"
    },
    {
        "id": "comment-6",
        "author": {
            "id": "user-3",
            "display_name": "Peter Jones",
            "username": "peter_jones"
        },
        "content": "Could you provide some examples?",
        "post_id": 2,
        "timestamps": "2023-10-29T15:00:00Z"
    },
    {
        "id": "comment-7",
        "author": {
            "id": "user-1",
            "display_name": "John Doe",
            "username": "john_doe"
        },
        "content": "I'm not sure I understand this part.",
        "post_id": 2,
        "timestamps": "2023-10-28T10:00:00Z"
    }
]
```
- Get All Comments (Paginated)

```jsonc
// GET /api/post/comment?offset=<num>&limit=<num>
// Response
{
    "count": 7,
    "data": [
        {
            "id": "comment-1",
            "author": {
                "id": "user-1",
                "display_name": "John Doe",
                "username": "john_doe"
            },
            "content": "This is a great post! Thanks for sharing.",
            "post_id": 1,
            "timestamps": "2023-10-27T10:00:00Z"
        },
        {
            "id": "comment-2",
            "author": {
                "id": "user-2",
                "display_name": "Jane Smith",
                "username": "jane_smith"
            },
            "content": "I have a question about this. Can you elaborate?",
            "post_id": 1,
            "timestamps": "2023-10-27T11:30:00Z"
        },
        {
            "id": "comment-3",
            "author": {
                "id": "user-3",
                "display_name": "Peter Jones",
                "username": "peter_jones"
            },
            "content": "Interesting perspective. I hadn't thought of it that way.",
            "post_id": 2,
            "timestamps": "2023-10-28T09:15:00Z"
        },
        {
            "id": "comment-4",
            "author": {
                "id": "user-1",
                "display_name": "John Doe",
                "username": "john_doe"
            },
            "content": "I agree with Jane. More details would be helpful.",
            "post_id": 2,
            "timestamps": "2023-10-27T12:00:00Z"
        },
        {
            "id": "comment-5",
            "author": {
                "id": "user-2",
                "display_name": "Jane Smith",
                "username": "jane_smith"
            },
            "content": "This is very informative. I learned a lot.",
            "post_id": 2,
            "timestamps": "2023-10-29T14:45:00Z"
        },
        {
            "id": "comment-6",
            "author": {
                "id": "user-3",
                "display_name": "Peter Jones",
                "username": "peter_jones"
            },
            "content": "Could you provide some examples?",
            "post_id": 2,
            "timestamps": "2023-10-29T15:00:00Z"
        },
        {
            "id": "comment-7",
            "author": {
                "id": "user-1",
                "display_name": "John Doe",
                "username": "john_doe"
            },
            "content": "I'm not sure I understand this part.",
            "post_id": 2,
            "timestamps": "2023-10-28T10:00:00Z"
        }
    ]
}
```