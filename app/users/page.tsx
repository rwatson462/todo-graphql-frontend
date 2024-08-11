import {listUsers} from "@/lib/server/auth/queries/listUsers";

export default async function Page() {
  const users = await listUsers()

  return (
    <ul>
      {users.map((user, key) => (
        <li key={key}><pre>{JSON.stringify(user, undefined, 2)}</pre></li>
      ))}
    </ul>
  )
}
