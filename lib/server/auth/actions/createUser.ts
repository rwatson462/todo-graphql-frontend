'use server'

import {gql} from "@apollo/client";
import {cookies} from "next/headers";
import {createApolloClient} from "@/lib/server/apollo";
import {makeUser} from "@/lib/server/auth/models/User";
import {LoginForm, RegisterForm} from "@/types";

const createUserMutation = gql`
    mutation login($email: String!, $name: String!, $password: String!) {
        register(email: $email, name: $name password: $password) {
            user {
                id
                name
                email
            }
        }
    }`

export async function createUser(registerData: RegisterForm) {
  const client = createApolloClient()
  try {
    const response = await client.mutate({
      mutation: createUserMutation,
      variables: registerData
    })

    console.log(response)
    return makeUser(response.data.user)

  } catch (error) {
    console.log('ERROR', error)
  }
}
