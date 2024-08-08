import {createContext, PropsWithChildren, useContext, useState} from "react";
import {User} from "@/types";

type Token = string

type AuthContext = {
  setUser(user: User|undefined): void
  user: User|undefined
}

const authContext = createContext(
  undefined as unknown as AuthContext
)

export const useAuthStore = () => {
  const context = useContext(authContext)

  if (context === undefined) {
    throw new Error('Context used outside of Provider')
  }

  return context
}

export const AuthProvider = ({children}: PropsWithChildren) => {
  const [user, _setUser] = useState<User|undefined>(undefined)

  const value: AuthContext = {
    setUser(user) {
      console.log(user)
      _setUser(user)
    },
    user
  } as const

  return <authContext.Provider value={value}>{children}</authContext.Provider>
}
