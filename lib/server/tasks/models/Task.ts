import {Todo} from "@/types";

export function makeTask(data: Todo): Todo {
  return {
    id: data.id,
    title: data.title,
    status: data.status
  }
}