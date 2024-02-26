import {ApolloClient, InMemoryCache} from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: 'https://todo-graphql.test/graphql',
  cache: new InMemoryCache(),
})

export function createApolloClient(bearerToken?: string) {
  console.log('Creating Apollo Client with token', bearerToken)
  const headers: any = {}

  if (bearerToken) {
    headers.authorization = `Bearer ${bearerToken}`
  }

  return new ApolloClient({
    uri: 'https://todo-graphql.test/graphql',
    cache: new InMemoryCache(),
    headers
  })
}