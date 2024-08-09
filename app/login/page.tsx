'use client'

import {Fieldset} from "@/components/form/Fieldset";
import {PageTitle} from "@/components/PageTitle";
import {useForm} from "react-hook-form";
import {FormGroup} from "@/components/form/FormGroup";
import {login} from "@/app/lib/server/auth/actions/login";
import {SubmitButton} from "@/components/form/SubmitButton";
import {LoginForm} from "@/types";
import {useAuthStore} from "@/stores/authStore";
import {useRouter} from "next/navigation";

export default function Page() {
  const {push: navigate} = useRouter()
  const {setUser} = useAuthStore()
  const {register, handleSubmit} = useForm<LoginForm>()

  async function _login(data: LoginForm) {
    const user = await login(data)
    if (user) {
      setUser(user)
      navigate('/')
    }
    // todo: handle failure to log in
  }

  return (
    <form onSubmit={handleSubmit(_login)}>
      <PageTitle>Log in</PageTitle>
      <Fieldset>
        <FormGroup>
          <label htmlFor={'email'}>Email address</label>
          <input type={'email'}
                 className={'rounded text-slate-900 font-base px-2 py-1'} {...register('email', {required: true})} />
        </FormGroup>

        <FormGroup>
          <label htmlFor={'password'}>Password</label>
          <input type={'password'}
                 className={'rounded text-slate-900 font-base px-2 py-1'} {...register('password', {required: true})} />
        </FormGroup>

        <SubmitButton text={'Log in'}/>
      </Fieldset>
    </form>
  )
}
