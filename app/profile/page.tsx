'use client';

import {useAuthStore} from "@/stores/authStore";
import {PageTitle} from "@/components/PageTitle";
import {createApolloClient} from "@/setup/graphQl";
import {gql, useQuery} from "@apollo/client";
import {useMemo} from "react";

const meQuery = gql`{
  me {
    id
    name
    email
  }
}`

export default function Page() {
  const { token} = useAuthStore()
  const client = useMemo(() => createApolloClient(token), [token])
  const { data, loading, error } = useQuery(meQuery, {
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
    <div>
      <PageTitle>Me</PageTitle>
      <p><code>{ token }</code></p>
      <pre>{ JSON.stringify(data, undefined, 2) }</pre>
    </div>
  )
}
