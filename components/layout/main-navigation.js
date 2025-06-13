import Link from "next/link";
import Logo from "./logo";

export default function MainNavigation() {
  return <header>
    <Link href="/">
      <Logo />
    </Link>

    <ul>
      <li>
        <Link href="/posts">Posts</Link>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  </header>
}