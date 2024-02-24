import {Button} from "@/components/Button";
import {Fieldset} from "@/components/form/Fieldset";
import {PageTitle} from "@/components/PageTitle";

export default function Page() {
  return (
    <form>
      <PageTitle>Log in</PageTitle>
      <Fieldset>
        <p className={'flex flex-col'}>
          <label htmlFor={'email'}>Email address</label>
          <input type={'email'} name={'email'} className={'rounded text-slate-900 font-base px-2 py-1'} />
        </p>

        <p className={'flex flex-col'}>
          <label htmlFor={'password'}>Password</label>
          <input type={'password'} name={'password'} className={'rounded text-slate-900 font-base px-2 py-1'} />
        </p>

        <p>
          <Button type={'submit'}>Log in</Button>
        </p>
      </Fieldset>
    </form>
  )
}
