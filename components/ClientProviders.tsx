'use client';

import {PropsWithChildren} from "react";
import {AuthProvider} from "@/lib/client/auth/AuthProvider";

export const ClientProviders = ({children}: PropsWithChildren) => (
  <AuthProvider>
    {children}
  </AuthProvider>
)
