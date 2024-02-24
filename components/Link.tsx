import {PropsWithChildren} from "react";
import NextLink from "next/link"

export const Link = ({href, children}: {href: string} & PropsWithChildren) => (
  <NextLink href={href} className={'text-sky-400 underline hover:no-underline'}>{children}</NextLink>
)
