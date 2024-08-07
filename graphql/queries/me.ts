import { createApolloClient } from "@/setup/graphQl"
import { useAuthStore } from "@/stores/authStore"
import { gql, useQuery } from "@apollo/client"
import { useMemo } from "react"

const meQuery = gql`{
    me {
      id
      name
      email
    }
  }`

export function useMe() {
    const {token} = useAuthStore()
    const client = useMemo(() => createApolloClient(token), [token])
    const { data: me, loading } = useQuery(meQuery, {client})

    return {
        me,
        loading,
    }
}