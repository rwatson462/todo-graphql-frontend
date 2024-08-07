import {PropsWithChildren} from "react";

export const PageTitle = ({children}: PropsWithChildren) => (
  <h2 className={'py-2 text-4xl'}>{children}</h2>
)