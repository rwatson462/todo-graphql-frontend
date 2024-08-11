import {ApolloClient, InMemoryCache} from "@apollo/client";

export function createApolloClient(bearerToken?: string) {
  const graphQlUrl = process.env.GRAPHQL_URL
  if (!graphQlUrl) {
    throw new Error('GRAPHQL_URL is not defined')
  }

  const headers: Record<string, string> = {}

  if (bearerToken) {
    headers.authorization = `Bearer ${bearerToken}`
  }

  return new ApolloClient({
    uri: graphQlUrl,
    cache: new InMemoryCache(),
    headers
  })
}
