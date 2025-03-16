# Hackernews Clone
## Disclaimer


## Setup

- Create Docker networks
```bash
$ ./scripts/network.sh
```

- Run each following command in a separate terminal window in the order they are listed below.
```bash
$ cd services/auth-service && docker-compose up --build
$ cd services/message-broker && docker-compose up --build
$ cd services/command-service && docker-compose up --build
$ cd services/query-service && docker-compose up --build
$ cd services/event-handler && docker-compose up --build
$ cd services/api-gateway && docker-compose up --build
```
Use 
```bash
docker compose instead of docker-compose
```
if you use the latest docker version
## API Endpoints

- Default port: 3000

- Signup
```jsonc
// POST /api/auth/signup
// JSON Body
{
  "username": "qninhdt",
  "display_name": "Quang Ninh",
  "password": "123456"
}
// Response
{
  "id": "1",
  "username": "qninhdt",
  "display_name": "Quang Ninh",
  "created_at": "2021-07-01T00:00:00Z"
}
```

- Login
```jsonc
// POST /api/auth/signin
// JSON Body
{
  "username": "qninhdt",
  "password": "123456"
}
// Response
// Save token to local storage
// Add token to Authorization header when making requests
// header['Authorization'] = 'Bearer ' + token
// https://jasonwatmore.com/react-axios-add-bearer-token-authorization-header-to-http-request
{
  "token": "eyJhb....",
}
```

- Create Post
```jsonc
// POST /api/post
// JSON Body
{
  "content": "This is a clone of Hackernews",
  "tags": ["hackernews", "clone"]
}
// Response
{
  "id": "1",
  "author": {
    "id": "1",
    "username": "qninhdt",
    "display_name": "Quang Ninh"
  },
  "content": "This is a clone of Hackernews",
  "tags": ["hackernews", "clone"],
  "created_at": "2021-07-01T00:00:00Z"
}
```

- Get Posts
```jsonc
// GET /api/post?page=<num>
// Oder by created_at desc by default
// Response
[
    {
        "id": "1",
        "author": {
            "id": "1",
            "username": "qninhdt",
            "display_name": "Quang Ninh"
        },
        "content": "This is a clone of Hackernews",
        "tags": ["hackernews", "clone"],
        "comment_count": 2,
        "created_at": "2021-07-01T00:00:00Z"
    },
    ...
]
```

- Get Post By ID
```jsonc
// GET /api/post/:post_id
// Response
{
  "id": "1",
  "author": {
    "id": "1",
    "username": "qninhdt",
    "display_name": "Quang Ninh"
  },
  "content": "This is a clone of Hackernews",
  "tags": ["hackernews", "clone"],
  "comment_count": 2,
  "created_at": "2021-07-01T00:00:00Z"
}
```

- Create Comment
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
```

- Get Comments
```jsonc
// GET /api/post/:post_id/comment?page=<num>
// Oder by created_at desc by default
// Response
[
    {
        "id": "1",
        "post_id": "1",
        "author": {
            "id": "1",
            "username": "qninhdt",
            "display_name": "Quang Ninh"
        },
        "content": "This is a comment",
        "created_at": "2021-07-01T00:00:00Z"
    },
    ...
]
```
