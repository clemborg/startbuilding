import Link from "next/link";
import { projects } from "@/content/site";
import s from "@/styles/shared.module.css";

export default function ProjectsPage() {
  return (
    <>
      <h1>Projects</h1>
      {projects.map((p) => (
        <Link key={p.slug} href={`/projects/${p.slug}`} className={s.card}>
          <strong>{p.name}</strong>
          <p className={s.meta}>
            {p.role} · {p.status}
          </p>
          <p>{p.tagline}</p>
        </Link>
      ))}
    </>
  );
}
