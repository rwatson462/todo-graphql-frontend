import {PropsWithChildren} from "react";

export const PageSubtitle = ({children}: PropsWithChildren) => (
  <h2 className={'py-2 text-2xl'}>{children}</h2>
)