import { gql, useQuery } from "@apollo/client"

/**
 * todo: move this to a server query method
 */

const meQuery = gql`{
    me {
      id
      name
      email
    }
  }`

export function useMe() {
    // const { data: me, loading } = useQuery(meQuery, {client})
    const loading: boolean = true

    return {
        me: undefined,
        loading,
    }
}
