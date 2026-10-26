import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "adarsh danda" },
      { name: "description", content: "Projects, contests, and work by Adarsh Danda." },
      { property: "og:title", content: "adarsh danda" },
      { property: "og:description", content: "Projects, contests, and work by Adarsh Danda." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const socials = [
  { label: "github", href: "https://github.com/adarshdanda" },
  { label: "linkedin", href: "https://www.linkedin.com/in/adarshdanda" },
  { label: "x", href: "https://x.com/adarshdanda" },
];

const projects = [
  { title: "Project One", desc: "A short description of a project you built, what it does, and why it matters." },
  { title: "Project Two", desc: "A high-performance system written to solve a hard problem quickly and reliably." },
  { title: "Project Three", desc: "A hardware + software build that displays live data in a fun, physical way." },
  { title: "Project Four", desc: "Automation scripts and tools that make everyday tasks faster." },
];

const contests = [
  { title: "Hackathon Name", date: "2025", place: "1st", desc: "Built and pitched a product idea to a panel of judges." },
  { title: "Startup Weekend", date: "2024", place: "1st", desc: "Developed an AI assistant prototype in 54 hours." },
  { title: "Academic Challenge", date: "2022", place: "2nd", desc: "Competed in computer science against regional teams." },
];

const linkClass =
  "text-muted-foreground transition-colors hover:text-foreground hover:underline hover:underline-offset-8";

function Index() {
  return (
    <main className="font-mono">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">adarsh danda</h1>

        <nav className="mt-16 flex flex-col items-center gap-6 text-3xl sm:text-4xl">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={linkClass}>
                {s.label}
              </a>
            ))}
          </div>
          <a href="#projects" className={linkClass}>
            projects
          </a>
          <a href="mailto:hello@example.com" className={linkClass}>
            contact
          </a>
        </nav>
      </section>

      <section id="projects" className="mx-auto max-w-3xl px-6 pb-20">
        <h2 className="mb-8 text-2xl font-semibold">projects</h2>
        <div className="space-y-10">
          {projects.map((p) => (
            <article key={p.title} className="border-l-2 border-primary pl-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.desc}</p>
              <div className="mt-3 flex gap-4 text-sm">
                <a href="#" className="text-primary underline-offset-4 hover:underline">Read More</a>
                <a href="#" className="text-primary underline-offset-4 hover:underline">View Code</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contests" className="mx-auto max-w-3xl px-6 pb-20">
        <h2 className="mb-8 text-2xl font-semibold">contests</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {contests.map((c) => (
            <article key={c.title} className="rounded-lg border bg-card p-5">
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-semibold">{c.title}</h4>
                <span className="rounded bg-primary px-2 py-0.5 text-xs text-primary-foreground">{c.place}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{c.date}</p>
              <p className="mt-3 text-sm text-muted-foreground">{c.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="mx-auto max-w-3xl px-6 pb-16 text-sm text-muted-foreground">© 2026 adarsh danda</footer>
    </main>
  );
}
