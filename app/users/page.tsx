import {listUsers} from "@/lib/server/auth/queries/listUsers";

export default async function Page() {
  const users = await listUsers()

  return (
    <table className={'w-full'}>
      <thead>
      <tr>
        <th className={'p-1 text-left'}>ID</th>
        <th className={'p-1 text-left'}>Email Address</th>
        <th className={'p-1 text-left'}>Name</th>
      </tr>
      </thead>
      <tbody>
        {users.map((user, key) => (
          <tr key={key} className={'hover:bg-slate-800'}>
            <td className={'p-1 text-left'}>{ user.id }</td>
            <td className={'p-1 text-left'}>{ user.email }</td>
            <td className={'p-1 text-left'}>{ user.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
