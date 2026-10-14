import { aboutSections } from "@/content/site";

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>{aboutSections.intro}</p>
      {aboutSections.story.map((p) => (
        <p key={p.slice(0, 30)}>{p}</p>
      ))}
    </>
  );
}
