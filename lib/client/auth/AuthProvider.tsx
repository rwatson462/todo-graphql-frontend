'use client'

import {PropsWithChildren, useEffect, useState} from "react";
import {User} from "@/types";
import {getLoggedInUser} from "@/lib/server/auth/queries/getLoggedInUser";
import {AuthContext, authContext} from "./authContext";

export const AuthProvider = ({children}: PropsWithChildren) => {
  console.log('AuthProvider render')
  const [user, _setUser] = useState<User|undefined>(undefined)

  useEffect(() => {
    getLoggedInUser().then(user => {
      _setUser(user)
    }).catch(err => {
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
