import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorkBySlug, work } from "@/content/site";
import s from "@/styles/shared.module.css";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = getWorkBySlug(slug);
  if (!entry) notFound();

  return (
    <>
      <p>
        <Link href="/work">Work</Link>
      </p>
      <h1>{entry.name}</h1>
      <p className={s.meta}>
        {entry.role} · {entry.dates}
      </p>
      <p>{entry.summary}</p>
    </>
  );
}
