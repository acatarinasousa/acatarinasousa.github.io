import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { MapPin, Building2, Github, Linkedin, Mail, GraduationCap, FlaskConical, Search } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import cv from "@/assets/files/CV_AnaCatarinaSousa.pdf";
import { Megaphone } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ana Catarina Sousa" },
      { name: "description", content: "Ana Catarina Sousa, PhD in Applied Mathematics, University of Porto, working on proof search in natural deduction." },
      { property: "og:title", content: "Ana Catarina Sousa" },
      { property: "og:description", content: "PhD in Applied Mathematics." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <JobBanner />
      <main className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          <Sidebar />
          <Content />
        </div>
      </main>
      <Footer />
    </div>
  );
}

function JobBanner() {
  return (
    <div className="border-y border-border bg-secondary/50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-3.5">
        <Megaphone className="h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.5} />
        <p className="text-[15px] text-foreground">
          Currently looking for a postdoc position!
        </p>
        <a href="mailto:acsousa@fe.up.pt" className="ml-auto text-[15px] underline">
          Get in touch
        </a>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-primary text-primary-foreground">
      <nav className="mx-auto flex max-w-6xl items-center gap-8 px-6 py-6 text-[15px]">
        <Link to="/" className="!text-primary-foreground !no-underline font-normal tracking-tight">
          Ana Catarina Sousa
        </Link>
        <div className="ml-auto flex items-center gap-7">
          <a href="#about" className="!text-primary-foreground/70 !no-underline hover:!text-primary-foreground">About Me</a>
          <a href="#research" className="!text-primary-foreground/70 !no-underline hover:!text-primary-foreground">Research</a>
          <a href="#teaching" className="!text-primary-foreground/70 !no-underline hover:!text-primary-foreground">Teaching</a>
          <a href="CV_AnaCatarinaSousa.pdf" className="!text-primary-foreground/70 !no-underline hover:!text-primary-foreground">CV</a>
        </div>
      </nav>
    </header>
  );
}

function Sidebar() {
  return (
    <aside className="space-y-5">
      <div className="overflow-hidden bg-primary aspect-square">
        <img
          src={portrait}
          alt="Portrait of Ana Catarina Sousa"
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <h1 className="text-2xl">Ana Catarina Sousa</h1>
        <p className="mt-1 text-sm text-muted-foreground">she/her</p>
        <p className="mt-3 text-sm text-muted-foreground">
          acsousa [at] fe [dot] up [dot] pt
        </p>
      </div>
      <ul className="space-y-2.5 text-[15px] text-muted-foreground">
        <li className="flex items-center gap-2.5">
          <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.5} />
          Porto, Portugal
        </li>
        <li className="flex items-center gap-2.5">
          <Building2 className="h-4 w-4 shrink-0" strokeWidth={1.5} />
          University of Porto
        </li>
        <li className="flex items-center gap-2.5">
          <Mail className="h-4 w-4 shrink-0" strokeWidth={1.5} />
          <a href="mailto:acsousa@fe.up.pt">Email</a>
        </li>
        <li className="flex items-center gap-2.5">
          <Linkedin className="h-4 w-4 shrink-0" strokeWidth={1.5} />
          <a href="https://www.linkedin.com/in/ana-catarina-sousa-6814a032b/">LinkedIn</a>
        </li>
        <li className="flex items-center gap-2.5">
          <FlaskConical className="h-4 w-4 shrink-0" strokeWidth={1.5} />
          <a href="https://orcid.org/0000-0002-5352-4807">ORCID</a>
        </li>
        <li className="flex items-center gap-2.5">
          <GraduationCap className="h-4 w-4 shrink-0" strokeWidth={1.5} />
          <a href="https://www.cienciavitae.pt/8B17-243B-9170">Ciência Vitae</a>
        </li>
      </ul>
    </aside>
  );
}

function Content() {
  return (
    <div className="max-w-2xl space-y-12" id="about">
      <section>
        <h2 className="text-3xl">About Me</h2>
        <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-foreground/90">
          <p>
            Hi! I'm Ana Catarina and I just concluded my <a href="https://map-pdma.up.pt" target="_blank" rel="noopener noreferrer">PhD in Applied Mathematics</a> , a joint program of the Portuguese universities of Aveiro, Porto and Minho, where I studied “Proof Search in Natural Deduction with Partial Proof Terms”, under the
            supervision of <a href="https://w3.math.uminho.pt/~jes/" target="_blank" rel="noopener noreferrer">José Espírito Santo</a>.
          </p>
          <p>
           I'm a collaborator member of <a href="https://liacc.fe.up.pt/liaccwp/" target="_blank" rel="noopener noreferrer">LIACC – Artificial Intelligence and Computer Science Laboratory</a> of the University of Porto. In parallel, I am an Invited Assistant Professor at the Faculty of Sciences of University of Porto, where I teach Discrete Mathematics and Theory of Computation. 
          </p>
          <p>
            My academic interests include proof search, proof theory, type theory and proof assistants.
          </p>
        </div>
      </section>

      <section id="whereivebeen">
        <h2 className="text-3xl">Have We Met? I’ve Been To…</h2>
        <div className="mt-5 overflow-hidden border border-border">
          <table className="w-full text-[15px]">
            <thead className="bg-secondary text-left">
              <tr>
                <th className="px-4 py-2.5 font-semibold">Event</th>
                <th className="px-4 py-2.5 font-semibold">Location</th>
                <th className="px-4 py-2.5 font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["FLoC 2026", "Lisbon, PT", "July 2026", "https://www.floc26.org"],
                ["OPLSS 2026", "Eugene, USA", "June 2026", "https://www.cs.uoregon.edu/research/summerschool/summer26/index.php"],
                ["WoLLIC 2025", "Porto, PT", "July 2025", "https://wollic2025.github.io"],
                ["Women in Logic 2024", "Tallinn, EE", "July 2024", "https://sites.google.com/view/wil24/home"],
                ["SPLogic", "Campinas, BR", "February 2023", "https://www.cle.unicamp.br/splogic/"],
                ["Autumn School Proof and Computation", "Fischbachau, DE", "September 2022", "https://www.mathematik.uni-muenchen.de/~schwicht/pc22.php"],
              ].map(([e, l, d, link]) => (
                <tr key={e} className="border-t border-border">
                   <td className="px-4 py-2.5"><a href={link} target="_blank" rel="noopener noreferrer">{e}</a></td>
                  <td className="px-4 py-2.5 text-muted-foreground">{l}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

        <section id="research">
        <h2 className="text-3xl">Research</h2>
        <ul className="mt-5 space-y-6">
          <li>
            <p className="text-[17px]"></p>
            <p className="mt-1 text-sm text-muted-foreground">
            </p>
          </li>
          <li>
            <p className="text-[17px]"></p>
            <p className="mt-1 text-sm text-muted-foreground">
             
            </p>
          </li>
        </ul>
      </section>

        <section id="teaching">
        <h2 className="text-3xl">Teaching</h2>
        <ul className="mt-5 space-y-6">
          <li>
            <p className="text-[17px]"></p>
            <p className="mt-1 text-sm text-muted-foreground">
            </p>
          </li>
          <li>
            <p className="text-[17px]"></p>
            <p className="mt-1 text-sm text-muted-foreground">
             
            </p>
          </li>
        </ul>
      </section>

    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-20 bg-primary text-primary-foreground/70">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm">
        <p>© 2026 Ana Catarina Sousa</p>
      </div>
    </footer>
  );
}
