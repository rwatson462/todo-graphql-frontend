import {Button} from "@/components/Button";
import {useFormStatus} from "react-dom";

export function SubmitButton({text}: {text: string}) {
  const {pending} = useFormStatus()
  return (
      <p>
      <Button type={'submit'} disabled={pending}>{text}</Button>
      {pending && <span className='pl-4'>Loading...</span>}
    </p>
  )
}
