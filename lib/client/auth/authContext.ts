import {User} from "@/types";
import {createContext} from "react";

export type AuthContext = {
  setUser(user: User|undefined): void
  user: User|undefined
}

export const authContext = createContext(
  undefined as unknown as AuthContext
)