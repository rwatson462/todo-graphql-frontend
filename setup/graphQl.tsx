import {ApolloClient, InMemoryCache} from "@apollo/client";

const GraphQlUrl = process.env.GRAPHQL_URL ?? process.env.NEXT_PUBLIC_GRAPHQL_URL

export const apolloClient = new ApolloClient({
  uri: GraphQlUrl,
  cache: new InMemoryCache(),
})

export function createApolloClient(bearerToken?: string) {
  const headers: any = {}

  if (bearerToken) {
    headers.authorization = `Bearer ${bearerToken}`
  }

  return new ApolloClient({
    uri: GraphQlUrl,
    cache: new InMemoryCache(),
    headers
  })
}
