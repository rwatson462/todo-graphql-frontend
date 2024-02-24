import {Link} from "@/components/Link";
import {PageTitle} from "@/components/PageTitle";

export default function Home() {
  return (
    <>
      <PageTitle>Hello, world</PageTitle>
      <p><Link href={'/login'}>Log in now</Link></p>
    </>
  );
}
