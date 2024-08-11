'use client'

import {Fieldset} from "@/components/form/Fieldset";
import {PageTitle} from "@/components/PageTitle";
import {useForm} from "react-hook-form";
import {FormGroup} from "@/components/form/FormGroup";
import {createUser} from "@/lib/server/auth/actions/createUser";
import {SubmitButton} from "@/components/form/SubmitButton";
import {RegisterForm} from "@/types";
import {useRouter} from "next/navigation";
import {useAuth} from "@/lib/client/auth/useAuth";
import {login} from "@/lib/server/auth/actions/login";

export default function Page() {
  const {push: navigate} = useRouter()
  const {setUser} = useAuth()
  const {register, handleSubmit} = useForm<RegisterForm>()

  async function _register(data: RegisterForm) {
    // this will throw an error if it doesn't work
    await createUser(data)

    // now log the user in
    const user = await login(data)

    if (user) {
      setUser(user)
      navigate('/')
    }
    // todo: handle failure to register

  }

  return (
    <form onSubmit={handleSubmit(_register)}>
      <PageTitle>Sign up now!</PageTitle>
      <Fieldset>
        <FormGroup>
          <label htmlFor={'name'}>Your name</label>
          <input type={'name'}
                 className={'rounded text-slate-900 font-base px-2 py-1'} {...register('name', {required: true})} />
        </FormGroup>

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

        <SubmitButton text={'Register'}/>
      </Fieldset>
    </form>
  )
}
