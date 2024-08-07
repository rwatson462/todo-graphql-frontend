'use client';

import {useAuthStore} from "@/stores/authStore";
import {PageTitle} from "@/components/PageTitle";
import { useMe } from "@/graphql/queries/me";



export default function Page() {
  const {token} = useAuthStore()
  const {me, loading} = useMe()
  
  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <PageTitle>Me</PageTitle>
      <p>Auth token: <code>{ token }</code></p>
      <p>Your data:</p>
      <pre>{ JSON.stringify(me, undefined, 2) }</pre>
    </div>
  )
}
