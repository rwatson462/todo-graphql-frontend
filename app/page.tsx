import { LoggedIn } from "@/components/auth/LoggedIn";
import { LoggedOut } from "@/components/auth/LoggedOut";
import {Link} from "@/components/Link";
import {PageTitle} from "@/components/PageTitle";

export default function Home() {
  return (
    <>
      <PageTitle>Hello, world</PageTitle>
      <section className='py-8'>
        <LoggedIn>
          <p><Link href='/tasks'>View your tasks</Link></p>
        </LoggedIn>
        <LoggedOut>
          <p><Link href={'/login'}>Log in now</Link></p>
        </LoggedOut>
      </section>
    </>
  );
}
