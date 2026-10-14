export const site = {
  name: "Your Name",
  location: "City, Region",
  email: "you@example.com",
  linkedin: "https://www.linkedin.com/in/your-handle/",
  github: "https://github.com/your-handle",
  headline: "Your headline (role and focus)",
  pitch: "One or two sentences about what you do.",
  focus: "Optional line about current role or focus.",
} as const;

export type WorkEntry = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  dates: string;
  summary: string;
};

export type ProjectEntry = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  status: string;
  timeframe: string;
  summary: string;
};

export type ExperienceEntry = {
  company: string;
  title: string;
  location: string;
  dates: string;
  bullets: string[];
};

export const work: WorkEntry[] = [
  {
    slug: "example-company",
    name: "Example Company",
    tagline: "Short description of the organization or program",
    role: "Your title",
    dates: "2024 - Present",
    summary: "A few sentences about your work there.",
  },
];

export const projects: ProjectEntry[] = [
  {
    slug: "example-project",
    name: "Example Project",
    tagline: "What it is in one line",
    role: "Your role",
    status: "In progress",
    timeframe: "2024 - Present",
    summary: "What you built or learned.",
  },
];

export const experience: ExperienceEntry[] = [
  {
    company: "Example Company",
    title: "Your title",
    location: "City",
    dates: "2024 - Present",
    bullets: ["Impact bullet one.", "Impact bullet two."],
  },
];

export const aboutSections = {
  intro: "Short professional intro.",
  story: ["Paragraph one.", "Paragraph two."],
} as const;

export function getWorkBySlug(slug: string) {
  return work.find((w) => w.slug === slug);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
