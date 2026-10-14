import { experience } from "@/content/site";
import s from "@/styles/shared.module.css";

export default function ExperiencePage() {
  return (
    <>
      <h1>Experience</h1>
      {experience.map((e) => (
        <section key={`${e.company}-${e.title}`} style={{ marginBottom: "2rem" }}>
          <h2>
            {e.title} · {e.company}
          </h2>
          <p className={s.meta}>
            {e.dates} · {e.location}
          </p>
          <ul className={s.list}>
            {e.bullets.map((b) => (
              <li key={b.slice(0, 40)}>{b}</li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
