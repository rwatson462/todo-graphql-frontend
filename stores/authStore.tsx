import {createContext, PropsWithChildren, useContext, useState} from "react";

type Token = string|undefined
type User = {
  id: number
  name: string
  email: string
} | undefined

type AuthContext = {
  setToken(token: Token): void
  token: Token
  setUser(user: User): void
  user: User
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
  const [token, _setToken] = useState<Token>(undefined)
  const [user, _setUser] = useState<User>(undefined)

  const value: AuthContext = {
    setToken(token) {
      _setToken(token)
    },
    token,
    setUser(user) {
      _setUser(user)
    },
    user
  } as const

  return <authContext.Provider value={value}>{children}</authContext.Provider>
}