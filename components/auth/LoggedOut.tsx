'use client'

import { useAuthStore } from "@/stores/authStore";
import { PropsWithChildren } from "react";

export function LoggedOut({children}: PropsWithChildren) {
    const {user} = useAuthStore()

    if (user !== undefined) {
        return null
    }

    return <>{children}</>
}