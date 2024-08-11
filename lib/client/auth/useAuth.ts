'use client'

import {useContext} from "react";
import {authContext} from "@/lib/client/auth/authContext";

export const useAuth = () => {
  const context = useContext(authContext)

  if (context === undefined) {
    throw new Error('AuthContext used outside of Provider')
  }

  return context
}
