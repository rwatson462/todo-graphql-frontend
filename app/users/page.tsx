"use client";

import {gql, useQuery} from "@apollo/client";
import {useAuthStore} from "@/stores/authStore";
import {createApolloClient} from "@/setup/graphQl";
import {useMemo} from "react";

const usersQuery = gql`
    query {
        users(first: 10) {
            data {
                id
                name
                email
            }
        }
    }`

export default function Page() {
  const {token} = useAuthStore()
  const client = useMemo(() => createApolloClient(token), [token])
  const {data, loading, error} = useQuery(usersQuery, {
    client
  })

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    console.log(error)
    return <p>ERROR</p>
  }

  return (
    <ul>
      {data.users.data.map((user, key) => (
        <li key={key}><pre>{JSON.stringify(user, undefined, 2)}</pre></li>
      ))}
    </ul>
  )
}