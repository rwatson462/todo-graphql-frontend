'use server'

import {cookies} from "next/headers";
import {gql} from "@apollo/client";
import {createApolloClient} from "@/lib/server/auth/apollo";
import {User} from "@/types";
import {makeUser} from "@/lib/server/auth/models/User";

type LoggedInUserQuery = {
  me: User
}

const loggedInUserQuery = gql`{
    me {
      id
      name
      email
    }
  }`

export async function getLoggedInUser() {
  const token = cookies().get('token')?.value
  const client = createApolloClient(token)

  try {
    const {data} = await client.query<LoggedInUserQuery>({
      query: loggedInUserQuery,
    })

    if (!data.me) {
      return undefined
    }

    return makeUser(data.me)

  } catch (err) {
    console.log('ERROR', (err as {message: string}).message)
  }

  return undefined
}
