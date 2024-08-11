'use server'

import {cookies} from "next/headers";
import {gql} from "@apollo/client";
import {createApolloClient} from "@/lib/server/auth/apollo";
import {User} from "@/types";
import {makeUser} from "@/lib/server/auth/models/User";

type ListUsersQuery = {
  users: {
    data: User[]
  }
}

const listUsersQuery = gql`{
        users(first: 10) {
            data {
                id
                name
                email
            }
        }
    }`

export async function listUsers() {
  const token = cookies().get('token')?.value
  const client = createApolloClient(token)

  const users = await client.query<ListUsersQuery>({
    query: listUsersQuery,
  })

  return users.data.users.data.map(user => makeUser(user))
}
