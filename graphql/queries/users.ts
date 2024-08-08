import { gql } from "@apollo/client"
import {User} from "@/types";

/**
 * todo: move this to a server query method
 */

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

export function useUsers(): |
{ users: User[], loading: false } | { users: undefined, loading: true } {
    // const { data, loading } = useQuery<{ users: { data: User[] } }>(usersQuery, { client })
    const loading: boolean = true

    if (loading) {
        return {
            users: undefined,
            loading,
        }
    } else {
        return {
            users: [],
            loading,
        }
    }
}