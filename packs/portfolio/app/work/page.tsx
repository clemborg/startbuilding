import Link from "next/link";
import { work } from "@/content/site";
import s from "@/styles/shared.module.css";

export default function WorkPage() {
  return (
    <>
      <h1>Work experience</h1>
      {work.map((w) => (
        <Link key={w.slug} href={`/work/${w.slug}`} className={s.card}>
          <strong>{w.name}</strong>
          <p className={s.meta}>
            {w.role} · {w.dates}
          </p>
          <p>{w.tagline}</p>
        </Link>
      ))}
    </>
  );
}
