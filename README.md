# Todo Graphql

> A simple todo list using Typescript, NextJs, GraphQL, PHP and Laravel

## Getting started

### Environment variables
Create file `.env.local` with the following content:

```
# Server actions didn't work with "localhost", so needed to use the ip version
GRAPHQL_URL=http://127.0.0.1:8000/graphql

# Browser works fine with "localhost"
NEXT_PUBLIC_GRAPHQL_URL=http://localhost:8000/graphql
```

Swapping out the addresses for your graphql server location.



## Todo
* Figure out how to wrap graphql "errors" from server actions gracefully to be detected in the app automatically
* Build registration route