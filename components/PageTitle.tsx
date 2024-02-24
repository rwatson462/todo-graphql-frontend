import {PropsWithChildren} from "react";

export const PageTitle = ({children}: PropsWithChildren) => (
  <h2 className={'text-2xl'}>{children}</h2>
)