import {PropsWithChildren} from "react";

export const Fieldset = ({children}: PropsWithChildren) => (
  <fieldset className={'p-4 border border-sky-400 rounded-xl flex flex-col gap-2'}>
    {children}
  </fieldset>
)