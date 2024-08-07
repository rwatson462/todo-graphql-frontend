"use client";

import { useUsers } from "@/graphql/queries/users";

export default function Page() {
  const {users, loading} = useUsers()

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <ul>
      {users.map((user, key) => (
        <li key={key}><pre>{JSON.stringify(user, undefined, 2)}</pre></li>
      ))}
    </ul>
  )
}
