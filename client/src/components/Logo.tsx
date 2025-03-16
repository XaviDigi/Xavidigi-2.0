import { Link } from "wouter";

export default function Logo() {
  return (
    <Link href="/">
      <a className="text-2xl font-heading font-bold">
        <span className="text-primary">John</span>
        <span className="text-dark">.dev</span>
      </a>
    </Link>
  );
}
