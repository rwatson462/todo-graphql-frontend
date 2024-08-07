import {Link} from "@/components/Link";
import { LoggedIn } from "./auth/LoggedIn";
import { LoggedOut } from "./auth/LoggedOut";

export const Header = () => (
  <header className={'flex justify-between items-center'}>
    <h1 className={'text-2xl font-bold'}><Link href={'/'}>Next, GraphQL, Laravel</Link></h1>
    <LoggedIn>
      <p className={'space-x-4'}>
          <span><Link href={'/users'}>Users</Link></span>
          <span><Link href={'/profile'}>Profile</Link></span>
      </p>
    </LoggedIn>
    <LoggedOut>
      <p className='space-x-4'>
        <span><Link href='/login'>Log in</Link></span>
        <span><Link href='/register'>Register</Link></span>
      </p>
    </LoggedOut>
  </header>
)