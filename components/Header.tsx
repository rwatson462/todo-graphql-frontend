import {Link} from "@/components/Link";

export const Header = () => (
  <header className={'flex justify-between items-center'}>
    <h1 className={'text-4xl'}><Link href={'/'}>Next, GraphQL, Laravel</Link></h1>
    <p className={'space-x-4'}>
      <span><Link href={'/users'}>Users</Link></span>
      <span><Link href={'/profile'}>Profile</Link></span>
    </p>
  </header>
)