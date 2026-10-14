import Link from "next/link";
import { site } from "@/content/site";
import s from "@/styles/shared.module.css";

const links = [
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Nav() {
  return (
    <nav className={s.nav} aria-label="Main">
      <Link href="/">{site.name}</Link>
      {links.map((l) => (
        <Link key={l.href} href={l.href}>
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
