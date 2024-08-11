import { PageTitle } from "@/components/PageTitle";
import {listTasks} from "@/lib/server/tasks/queries/listTasks";

export default async function Page() {
  const tasks = await listTasks()

    return (
        <article>
            <PageTitle>Your tasks</PageTitle>

          <pre>{ JSON.stringify(tasks, undefined, 2)}</pre>
        </article>
    )
}