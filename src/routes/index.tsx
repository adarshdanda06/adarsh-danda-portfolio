import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "adarsh danda" },
      { name: "description", content: "Projects and work by Adarsh Danda." },
      { property: "og:title", content: "adarsh danda" },
      { property: "og:description", content: "Projects and work by Adarsh Danda." },
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

const linkClass =
  "text-muted-foreground transition-colors hover:text-foreground hover:underline hover:underline-offset-8";

function Index() {
  return (
    <main className="font-mono">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">adarsh danda</h1>

        <nav className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-3xl sm:text-4xl">
          <a href="#social" className={linkClass}>
            social
          </a>
          <a href="#projects" className={linkClass}>
            projects
          </a>
          <a href="#bio" className={linkClass}>
            bio
          </a>
          <a href="#contact" className={linkClass}>
            contact
          </a>
        </nav>

      </section>

      <section id="social" className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-20">
        <h2 className="mb-8 text-2xl font-semibold">social</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              {s.label}
            </a>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-20">
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

      <section id="bio" className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-20">
        <h2 className="mb-8 text-2xl font-semibold">bio</h2>
        <p className="text-muted-foreground">
          I build software and hardware, and I like taking an idea from a rough sketch to something
          that actually runs. Most of my work sits at the overlap of code, circuits, and clean
          design — small tools, quick prototypes, and the occasional contest build.
        </p>
      </section>

      <section id="contact" className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-20">
        <h2 className="mb-8 text-2xl font-semibold">contact</h2>
        <a href="mailto:hello@example.com" className="text-primary underline-offset-4 hover:underline">
          hello@example.com
        </a>
      </section>

      <footer className="mx-auto max-w-3xl px-6 pb-16 text-sm text-muted-foreground">© 2026 adarsh danda</footer>
    </main>
  );
}
