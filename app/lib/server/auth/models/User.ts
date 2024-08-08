import {User} from "@/types";

export function createUser(data: User): User {
  return {
    id: data.id,
    name: data.name,
    email: data.email,
  }
}
