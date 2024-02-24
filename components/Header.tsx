import {Link} from "@/components/Link";

export const Header = () => (
  <header className={'flex justify-between items-center'}>
    <h1 className={'text-4xl'}><Link href={'/'}>Next, GraphQL, Laravel</Link></h1>
    <span><Link href={'/profile'}>Profile</Link></span>
  </header>
)