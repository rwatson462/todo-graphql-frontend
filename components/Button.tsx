import {PropsWithChildren} from "react";

export const Button = ({type, children}: {type: "submit"|"button"} & PropsWithChildren) => (
  <button type={type} className={'rounded shadow bg-sky-400 text-slate-900 px-2 py-1'}>{children}</button>
)