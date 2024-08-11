'use server'

import {PageTitle} from "@/components/PageTitle";
import {getLoggedInUser} from "@/lib/server/auth/queries/getLoggedInUser";


export default async function Page() {
  const user = await getLoggedInUser()

  if (!user) {
    return <p>No user found</p>
  }

  // todo: add to this page so we show the user's details and add a form to update them

  return (
    <div>
      <PageTitle>Me</PageTitle>
      <p>Your data:</p>
      <pre>{JSON.stringify(user, undefined, 2)}</pre>
    </div>
  )
}
