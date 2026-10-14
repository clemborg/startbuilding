import Link from "next/link";
import { site, work, projects } from "@/content/site";
import s from "@/styles/shared.module.css";

export default function HomePage() {
  return (
    <>
      <p className={s.meta}>{site.location}</p>
      <h1>{site.name}</h1>
      <p className={s.lead}>{site.headline}</p>
      <p>{site.pitch}</p>
      {site.focus ? <p className={s.meta}>{site.focus}</p> : null}

      <h2>Work experience</h2>
      {work.map((w) => (
        <Link key={w.slug} href={`/work/${w.slug}`} className={s.card}>
          <strong>{w.name}</strong>
          <p className={s.meta}>
            {w.role} · {w.dates}
          </p>
          <p>{w.tagline}</p>
        </Link>
      ))}
      <p>
        <Link href="/work">All work</Link>
      </p>

      <h2>Projects</h2>
      {projects.map((p) => (
        <Link key={p.slug} href={`/projects/${p.slug}`} className={s.card}>
          <strong>{p.name}</strong>
          <p className={s.meta}>{p.timeframe}</p>
          <p>{p.tagline}</p>
        </Link>
      ))}
      <p>
        <Link href="/projects">All projects</Link>
      </p>
    </>
  );
}
