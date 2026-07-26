import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Building2, Github, Linkedin, Mail, GraduationCap, FlaskConical, Search } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
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
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
      <JobBanner />
      <main className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          <Sidebar />
          <Content activeTab={activeTab} />
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

function Nav({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "about", label: "About Me" },
    { id: "research", label: "Research" },
    { id: "teaching", label: "Teaching" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-primary text-primary-foreground">
      <nav className="mx-auto flex max-w-6xl items-center gap-8 px-6 py-6 text-[15px]">
        <Link to="/" className="!text-primary-foreground !no-underline font-normal tracking-tight">
          Ana Catarina Sousa
        </Link>
        <div className="ml-auto flex items-center gap-7">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`!no-underline transition-colors ${
                activeTab === tab.id
                  ? "!text-primary-foreground"
                  : "!text-primary-foreground/70 hover:!text-primary-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
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

function Content({ activeTab }) {
  return (
    <div className="max-w-2xl space-y-12">
      {activeTab === "about" && (
        <>
          <section id="about" className="scroll-mt-24">
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
            <h2 className="text-3xl">Have We Met? I've Been To…</h2>
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
        </>
      )}

      {activeTab === "research" && (
        <section id="research" className="scroll-mt-24">
          <h2 className="text-3xl">Research</h2>
          <h3 className="text-2xl mt-5">Conference Papers</h3>
          <ul className="mt-5 space-y-6">
            <li className="relative overflow-hidden">
              <p className="text-[14px]">2025</p>
              <p className="text-[17px]"><a href="https://link.springer.com/chapter/10.1007/978-3-031-99536-1_18" target="_blank" rel="noopener noreferrer">Proof Search in Classical Propositional Logic with Partial Proof Terms</a></p>
              <p className="mt-1 text-sm text-muted-foreground">
                <em>José Espírito Santo, Ana Catarina Sousa</em>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                <em>WoLLIC: 31st Workshop on Logic, Language, Information and Computation</em>
              </p>
            </li>
            <li className="relative overflow-hidden">
              <p className="text-[14px]">2024</p>
              <p className="text-[17px]"><a href="https://link.springer.com/chapter/10.1007/978-3-031-66997-2_16" target="_blank" rel="noopener noreferrer">Partial Proof Terms in the Study of Idealized Proof Search</a></p>
              <p className="mt-1 text-sm text-muted-foreground">
                <em>José Espírito Santo, Ana Catarina Sousa</em>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                <em>CICM: 17th International Conference on Intelligent Computer Mathematics</em>
              </p>
            </li>
          </ul>

           <h3 className="text-2xl mt-5">Abstracts</h3>
          <ul className="mt-5 space-y-6">
            <li className="relative overflow-hidden">
              <p className="text-[14px]">2026</p>
              <p className="text-[17px]"><a href="https://drive.google.com/file/d/1pshKxvEb9FkH9AttcAwu3cfULkXepdOM/view?usp=sharing" target="_blank" rel="noopener noreferrer">An Intercalation Calculus with Partial Proof Terms</a></p>
              <p className="mt-1 text-sm text-muted-foreground">
                <em>Ana Catarina Sousa</em>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                <em>Women in Logic</em>
              </p>
            </li>
            <li className="relative overflow-hidden">
              <p className="text-[14px]">2024</p>
              <p className="text-[17px]"><a href="https://drive.google.com/file/d/1g_0TmajGGSK8D4w0C7IZPXOTy_Y9hdUb/view" target="_blank" rel="noopener noreferrer">Partial Proof Terms in the Study of Proof Search</a></p>
              <p className="mt-1 text-sm text-muted-foreground">
                <em>José Espírito Santo, Ana Catarina Sousa</em>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                <em>Women in Logic</em>
              </p>
            </li>
          </ul>

          <h3 className="text-2xl mt-5">Presentations</h3>
          <ul className="mt-5 space-y-6">
            <li className="relative overflow-hidden">
              <p className="text-[14px]">2026</p>
              <p className="text-[17px]"><a href="WiL2026.pdf">An Intercalation Calculus with Partial Proof Terms</a></p>
              <p className="mt-1 text-sm text-muted-foreground">
                <em>Women in Logic 2026 (Lisbon, PT) </em>
              </p>
            </li>
            <li className="relative overflow-hidden">
              <p className="text-[14px]">2025</p>
              <p className="text-[17px]"><a href="WoLLIC.pptx">Proof Search in Classical Propositional Logic with Partial Proof Terms</a></p>
              <p className="mt-1 text-sm text-muted-foreground">
                <em>WoLLIC 2025 (Porto, PT) </em>
              </p>
            </li>
            <li className="relative overflow-hidden">
              <p className="text-[14px]">2024</p>
              <p className="text-[17px]"><a href="OpenDay2024.pdf">Partial Proof Terms in the Study of Proof Search</a></p>
              <p className="mt-1 text-sm text-muted-foreground">
                <em>Open Day of CMAT (Braga, PT) </em>
              </p>
              <p className="mr-2 text-[17px]"><a href="WiL2024.pdf">Partial Proof Terms in the Study of Proof Search</a></p>
              <p className="mt-1 text-sm text-muted-foreground">
                <em>Women in Logic 2024 (Tallinn, EE) </em>
              </p>
            </li>
            
            <li className="relative overflow-hidden">
              <p className="text-[14px]">2023</p>
              <p className="text-[17px]"><a href="SPLogic.pdf">Proof Search in Natural Deduction</a></p>
              <p className="mt-1 text-sm text-muted-foreground">
                <em>SPLogic (Campinas, BR) </em>
              </p>
              <p className="mr-2 text-[17px]"><a href="CMATLabsFest2023.pdf">Personal and professional trajectory (in portuguese) </a></p>
              <p className="mt-1 text-sm text-muted-foreground">
                <em>CMAT Labs Fest 2023 (Braga, PT) </em>
              </p>
            </li>
            <li className="relative overflow-hidden">
              <p className="text-[14px]">2022</p>
              <p className="text-[17px]"><a href="ALCMeeting2022.pdf">Proof Search in Natural Deduction: towards human-centered theorem proving</a></p>
              <p className="mt-1 text-sm text-muted-foreground">
                <em>ALC Meeting 2022 (Braga, PT) </em>
              </p>
            </li>
            <li className="relative overflow-hidden">
              <p className="text-[14px]">2021</p>
              <p className="text-[17px]"><a href="ALCMeeting2021.pdf">Minimal Quantum Logic: a brief comparison with Classical Logic</a></p>
              <p className="mt-1 text-sm text-muted-foreground">
                <em>ALC Meeting 2021 (Braga, PT) </em>
              </p>
            </li>
           
          </ul>

          <h3 className="text-2xl mt-5">Posters</h3>
          <ul className="mt-5 space-y-6">
            <li className="relative overflow-hidden">
              <p className="text-[14px]">2021</p>
              <p className="text-[17px]"><a href="PosterOpenDayCMAT2021.pdf" target="_blank" rel="noopener noreferrer">Minimal Quantum Logic: a brief comparison with Classical Logic</a></p>
              <p className="mt-1 text-sm text-muted-foreground">
                <em>CMAT Open Day (Vila Real, PT) </em>
              </p>
            </li>
          </ul>

          <h3 className="text-2xl mt-5">PhD Thesis</h3>
          <ul className="mt-5 space-y-6">
            <li className="relative overflow-hidden">
              <p className="text-[14px]">2026</p>
              <p className="text-[17px]"><a href="PhD_AnaCatarinaSousa.pdf" target="_blank" rel="noopener noreferrer">Proof Search in Natural Deduction with Partial Proof Terms</a></p>
              <p className="mt-1 text-sm text-muted-foreground">
                <em>Supervised by José Espírito Santo</em>
              </p>
            </li>
          </ul>

        </section>

  
      )}

      {activeTab === "teaching" && (
        <section id="teaching" className="scroll-mt-24">
          <h2 className="text-3xl">Teaching</h2>
          <ul className="mt-5 space-y-6">
            <li>
              <p className="text-[17px]"></p>
              <p className="mt-1 text-sm text-muted-foreground"></p>
            </li>
            <li>
              <p className="text-[17px]"></p>
              <p className="mt-1 text-sm text-muted-foreground"></p>
            </li>
          </ul>
        </section>
      )}
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