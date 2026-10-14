import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/content/site";
import s from "@/styles/shared.module.css";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = getProjectBySlug(slug);
  if (!entry) notFound();

  return (
    <>
      <p>
        <Link href="/projects">Projects</Link>
      </p>
      <h1>{entry.name}</h1>
      <p className={s.meta}>
        {entry.role} · {entry.timeframe}
      </p>
      <p>{entry.summary}</p>
    </>
  );
}
