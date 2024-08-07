'use client'

import { useAuthStore } from "@/stores/authStore";
import { PropsWithChildren } from "react";

export function LoggedIn({children}: PropsWithChildren) {
    const {token} = useAuthStore()

    if (token === undefined) {
        return null
    }

    return <>{children}</>
}