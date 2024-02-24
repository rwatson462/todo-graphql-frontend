import {PropsWithChildren} from "react";

export const Button = ({type, disabled = false, children}: {type: "submit"|"button", disabled: boolean} & PropsWithChildren) => (
  <button type={type} disabled={disabled} className={'rounded shadow bg-sky-400 text-slate-900 px-2 py-1'}>{children}</button>
)