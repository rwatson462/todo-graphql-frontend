'use client';

import {PropsWithChildren} from "react";
import {AuthProvider} from "@/stores/authStore";

export const ClientProviders = ({children}: PropsWithChildren) => (
  <AuthProvider>
    {children}
  </AuthProvider>
)
