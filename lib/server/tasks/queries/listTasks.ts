'use server'

import {cookies} from "next/headers";
import {gql} from "@apollo/client";
import {createApolloClient} from "@/lib/server/apollo";
import {Todo, User} from "@/types";
import {makeUser} from "@/lib/server/auth/models/User";
import {makeTask} from "@/lib/server/tasks/models/Task";

type ListTasksQuery = {
  todos: {
    data: Todo[]
  }
}

const listTasksQuery = gql`{
        todos(first: 10) {
            data {
                id
                title
                status
            }
        }
    }`

export async function listTasks() {
  const token = cookies().get('token')?.value
  const client = createApolloClient(token)

  const { data } = await client.query<ListTasksQuery>({
    query: listTasksQuery,
  })

  return data.todos.data.map(task => makeTask(task))
}
