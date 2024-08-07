"use client";

import  {Button } from "@/components/Button";
import { Fieldset } from "@/components/form/Fieldset";
import { PageTitle } from "@/components/PageTitle";
import { useForm } from "react-hook-form";
import { LoginForm, useLogin } from "@/graphql/mutations/login";
import { FormGroup } from "@/components/form/FormGroup";

export default function Page() {
  const {handleSubmit, register} = useForm<LoginForm>()
  const {login, loading} = useLogin()

  return (
    <form onSubmit={handleSubmit(login)}>
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

        <p>
          <Button type={'submit'} disabled={loading}>Log in</Button>
          {loading && <span className='pl-4'>Loading...</span>}
        </p>
      </Fieldset>
    </form>
  )
}
