'use client';

import {PropsWithChildren} from "react";
import {AuthProvider} from "@/stores/authStore";
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from "@/setup/graphQl";

export const ClientProviders = ({children}: PropsWithChildren) => (
  <AuthProvider>
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  </AuthProvider>
)
