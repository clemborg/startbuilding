import { site } from "@/content/site";

export default function ContactPage() {
  return (
    <>
      <h1>Contact</h1>
      <p>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      <p>
        <a href={site.linkedin}>LinkedIn</a>
      </p>
      {site.github ? (
        <p>
          <a href={site.github}>GitHub</a>
        </p>
      ) : null}
    </>
  );
}
