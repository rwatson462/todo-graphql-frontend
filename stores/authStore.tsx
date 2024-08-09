import {createContext, PropsWithChildren, useContext, useEffect, useState} from "react";
import {User} from "@/types";
import {getLoggedInUser} from "@/app/lib/server/auth/queries/getLoggedInUser";

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

  useEffect(() => {
    getLoggedInUser().then(user => {
      _setUser(user)
    }).catch(err => {
      console.log(err)
      _setUser(undefined)
    })
  }, [])

  const value: AuthContext = {
    setUser(user) {
      _setUser(user)
    },
    user
  } as const

  return <authContext.Provider value={value}>{children}</authContext.Provider>
}
