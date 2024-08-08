'use server'

import {cookies} from "next/headers";
import {gql} from "@apollo/client";
import {createApolloClient} from "@/app/lib/server/auth/apollo";
import {User} from "@/types";
import {makeUser} from "@/app/lib/server/auth/models/User";

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

  const user = await client.query<User>({
    query: loggedInUserQuery,
  })

  return makeUser(user?.data)
}
