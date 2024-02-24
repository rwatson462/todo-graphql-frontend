'use client';

import {useAuthStore} from "@/stores/authStore";
import {PageTitle} from "@/components/PageTitle";

export default function Page() {
  const { token, user } = useAuthStore()

  return (
    <div>
      <PageTitle>Me</PageTitle>
      <p><code>{ token }</code></p>
      <pre>{ JSON.stringify(user, undefined, 2) }</pre>
    </div>
  )
}
