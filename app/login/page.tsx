"use client";

import {Button} from "@/components/Button";
import {Fieldset} from "@/components/form/Fieldset";
import {PageTitle} from "@/components/PageTitle";
import {useForm} from "react-hook-form";
import {gql, useMutation} from "@apollo/client";
import {useAuthStore} from "@/stores/authStore";

type LoginForm = {
  email: String;
  password: String;
}

const loginMutation = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            user {
                id
                name
                email
            }
            token
        }
    }`

export default function Page() {
  const {handleSubmit, register} = useForm<LoginForm>()
  const [mutateFunction, {loading}] = useMutation(loginMutation)
  const { setToken, setUser } = useAuthStore()

  function submitForm(data: LoginForm) {
    mutateFunction({
      variables: data
    })
      .then(response => response.data)
      .then(data => {
        setToken(data.login.token)
        setUser(data.login.user)
      })
      .catch(error => console.log(error))
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <PageTitle>Log in</PageTitle>
      <Fieldset>
        <p className={'flex flex-col'}>
          <label htmlFor={'email'}>Email address</label>
          <input type={'email'}
                 className={'rounded text-slate-900 font-base px-2 py-1'} {...register('email', {required: true})} />
        </p>

        <p className={'flex flex-col'}>
          <label htmlFor={'password'}>Password</label>
          <input type={'password'}
                 className={'rounded text-slate-900 font-base px-2 py-1'} {...register('password', {required: true})} />
        </p>

        <p>
          <Button type={'submit'} disabled={loading}>Log in</Button>
        </p>
      </Fieldset>
    </form>
  )
}
