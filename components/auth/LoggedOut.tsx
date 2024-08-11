'use client'

import { PropsWithChildren } from "react";
import {useAuth} from "@/lib/client/auth/useAuth";

export function LoggedOut({children}: PropsWithChildren) {
    const {user} = useAuth()

    if (user !== undefined) {
        return null
    }

    return <>{children}</>
}