'use server'

import {gql} from "@apollo/client";
import {cookies} from "next/headers";
import {createApolloClient} from "@/app/lib/server/auth/apollo";
import {makeUser} from "@/app/lib/server/auth/models/User";
import {LoginForm} from "@/types";

const loginMutation = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            user {
                id
                name
                email
            }
            token
        }
    }`

export async function login(loginData: LoginForm) {
  const client = createApolloClient()
  try {
    const response = await client.mutate({
      mutation: loginMutation,
      variables: loginData
    })

    const {token} = response.data.login
    cookies().set('token', token, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 30,  // 1 month
    })

    return makeUser(response.data.login.user)

  } catch (error) {
    console.log('ERROR', error)
  }
}
