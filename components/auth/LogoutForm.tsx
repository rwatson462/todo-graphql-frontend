'use client'

import {logout} from "@/lib/server/auth/actions/logout";
import {SubmitButton} from "@/components/form/SubmitButton";
import {useAuth} from "@/lib/client/auth/useAuth";
import {useRouter} from "next/navigation";

export function LogoutForm() {
  const {push: navigate} = useRouter()
  const {setUser} = useAuth()

  async function _logout() {
    await logout()

    setUser(undefined)
    navigate('/')
  }

  return (
    <form action={_logout}>
      <SubmitButton text={'Log out'}/>
    </form>
  )
}