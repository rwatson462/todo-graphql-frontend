'use client'

import { useAuthStore } from "@/stores/authStore";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

export type LoginForm = {
    email: String;
    password: String;
  }

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

// Hook to be used in client components
export function useLogin() {
    const router = useRouter()
    const {setToken, setUser} = useAuthStore()
    const [mutateFunction, {loading}] = useMutation(loginMutation)

    function login(data: LoginForm) {
        mutateFunction({
            variables: data
          })
            .then(response => response.data)
            .then(data => {
              setToken(data.login.token)
              setUser(data.login.user)
              router.push('/')
            })
            .catch(error => console.log(error))
    }

    return {
        login,
        loading,
    }
}