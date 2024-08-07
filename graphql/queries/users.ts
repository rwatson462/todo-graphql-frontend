import { createApolloClient } from "@/setup/graphQl"
import { useAuthStore } from "@/stores/authStore"
import { gql, useQuery } from "@apollo/client"
import { useMemo } from "react"

const usersQuery = gql`
    query {
        users(first: 10) {
            data {
                id
                name
                email
            }
        }
    }`

type User = {
    name: string
    email: string
    id: string
}

export function useUsers(): |
{ users: User[], loading: false } | { users: undefined, loading: true } {
    const { token } = useAuthStore()
    const client = useMemo(() => createApolloClient(token), [token])
    const { data, loading } = useQuery<{ users: { data: User[] } }>(usersQuery, { client })

    if (loading) {
        return {
            users: undefined,
            loading,
        }
    } else {
        return {
            users: data!.users.data,
            loading,
        }
    }
}