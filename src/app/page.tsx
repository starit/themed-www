export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section min-h-[85vh] flex flex-col justify-center">
        <div className="container-main">
          <div className="grid-editorial">
            <div className="col-span-4 md:col-span-6 lg:col-span-8">
              <header className="space-y-8">
                <div className="flex items-center gap-4">
                  <Logo />
                  <h1 className="text-heading-1 md:text-display text-text-primary">
                    Themed Labs
                  </h1>
                </div>
                
                <p className="text-heading-2 md:text-heading-1 text-text-secondary font-mono">
                  Where themes become mechanisms.
                </p>
                
                <p className="text-body text-text-tertiary max-w-content">
                  A studio at the intersection of content structure and system design.
                </p>
              </header>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-main">
        <hr className="border-surface-300" />
      </div>

      {/* What We Do Section */}
      <section className="section" id="what-we-do">
        <div className="container-main">
          <div className="grid-editorial">
            <div className="col-span-4 md:col-span-2 lg:col-span-3 mb-6 md:mb-0">
              <span className="label">What We Do</span>
            </div>
            <div className="col-span-4 md:col-span-6 lg:col-span-7 space-y-8">
              <p className="text-heading-2 text-text-primary">
                We connect content creators with mechanism designers to build coherent systems around recurring themes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-heading-3 text-text-primary font-mono">Theme Modeling</h3>
                  <p className="text-body text-text-secondary">
                    Identifying structural patterns in content and formalizing them into schemas.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-heading-3 text-text-primary font-mono">Mechanism Generation</h3>
                  <p className="text-body text-text-secondary">
                    Translating identified patterns into functional systems, tools, or collaborative protocols.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-heading-3 text-text-primary font-mono">System Deployment</h3>
                  <p className="text-body text-text-secondary">
                    Packaging mechanisms into modular systems that can be launched, iterated, and reused.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-heading-3 text-text-primary font-mono">Collaboration Frameworks</h3>
                  <p className="text-body text-text-secondary">
                    Establishing clear protocols for how creators and designers work together on shared themes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-main">
        <hr className="border-surface-300" />
      </div>

      {/* What We Don't Do Section */}
      <section className="section" id="what-we-dont-do">
        <div className="container-main">
          <div className="grid-editorial">
            <div className="col-span-4 md:col-span-2 lg:col-span-3 mb-6 md:mb-0">
              <span className="label">What We Don't Do</span>
            </div>
            <div className="col-span-4 md:col-span-6 lg:col-span-7">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-text-tertiary font-mono text-small">01</span>
                  <div className="space-y-2">
                    <p className="text-body text-text-primary">We are not a marketing agency.</p>
                    <p className="text-small text-text-tertiary">
                      We do not produce promotional content, campaigns, or brand assets.
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <span className="text-text-tertiary font-mono text-small">02</span>
                  <div className="space-y-2">
                    <p className="text-body text-text-primary">We are not a content platform.</p>
                    <p className="text-small text-text-tertiary">
                      We do not host, distribute, or monetize content directly.
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <span className="text-text-tertiary font-mono text-small">03</span>
                  <div className="space-y-2">
                    <p className="text-body text-text-primary">We are not hype-driven.</p>
                    <p className="text-small text-text-tertiary">
                      We do not pursue trends, virality, or short-term engagement metrics.
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <span className="text-text-tertiary font-mono text-small">04</span>
                  <div className="space-y-2">
                    <p className="text-body text-text-primary">We do not promise quick results.</p>
                    <p className="text-small text-text-tertiary">
                      Research takes time. Systems require iteration. We prioritize quality over speed.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-main">
        <hr className="border-surface-300" />
      </div>

      {/* Projects Section */}
      <section className="section" id="projects">
        <div className="container-main">
          <div className="grid-editorial">
            <div className="col-span-4 md:col-span-2 lg:col-span-3 mb-6 md:mb-0">
              <span className="label">Projects</span>
            </div>
            <div className="col-span-4 md:col-span-6 lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ProjectCard
                  index="T-001"
                  title="Themed.js"
                  status="Demo"
                  description="A powerful theme management library with AI-powered theme generation."
                  link="https://github.com/starit/themed.js"
                />
                <ProjectCard
                  index="T-002"
                  title="Themed Extension"
                  status="Demo"
                  description="A Chrome Extension that lets any webpage call an LLM API while keeping the API key completely secure."
                  link="https://github.com/starit/themed-extension"
                />
                <ProjectCard
                  index="T-003"
                  title="Themed Arcade"
                  status="WIP"
                  description="A platform connecting game content and mechanics."
                  link="#"
                />
                {/* <ProjectCard
                  index="T-004"
                  title="Pattern Language"
                  status="Planned"
                  description="A shared vocabulary for discussing theme-mechanism relationships."
                />
                <ProjectCard
                  index="T-005"
                  title="Case Studies"
                  status="Ongoing"
                  description="Documentation of applied theme-to-mechanism processes."
                />
                <ProjectCard
                  index="T-006"
                  title="Open Questions"
                  status="Continuous"
                  description="A living document of unresolved problems in the space."
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-main">
        <hr className="border-surface-300" />
      </div>

      {/* About Section */}
      <section className="section" id="about">
        <div className="container-main">
          <div className="grid-editorial">
            <div className="col-span-4 md:col-span-2 lg:col-span-3 mb-6 md:mb-0">
              <span className="label">About</span>
            </div>
            <div className="col-span-4 md:col-span-6 lg:col-span-6 space-y-6">
              <p className="text-heading-2 text-text-primary">
                Themed Labs operates at the boundary between content and systems.
              </p>
              <p className="text-body text-text-secondary">
                We believe that in the age of AI, structured mechanisms enable more diverse forms of expression—while making content easier to generate, scale, and evolve.
              </p>
              <p className="text-body text-text-secondary">
                We believe that mechanism design and thematic expression require fundamentally different mindsets. By separating them at the system level, we allow creators and designers to focus on what they do best—while enabling them to work together through shared structures.
              </p>
              <p className="text-body text-text-secondary">
                We build systems that connect themes and mechanisms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 mt-section-sm">
        <div className="container-main">
          <div className="border-t border-surface-300 pt-8">
            <div className="grid-editorial">
              <div className="col-span-4 md:col-span-4 lg:col-span-4 mb-6 md:mb-0">
                <div className="flex items-center gap-3">
                  <Logo size="sm" />
                  <span className="text-small text-text-tertiary">Themed Labs</span>
                </div>
              </div>
              <div className="col-span-4 md:col-span-4 lg:col-span-4 mb-6 md:mb-0">
                <nav className="space-y-2">
                  <p className="label mb-3">Navigation</p>
                  <a href="#what-we-do" className="block text-small text-text-secondary hover:text-text-primary transition-colors">
                    What We Do
                  </a>
                  <a href="#projects" className="block text-small text-text-secondary hover:text-text-primary transition-colors">
                    Projects
                  </a>
                  <a href="#about" className="block text-small text-text-secondary hover:text-text-primary transition-colors">
                    About
                  </a>
                </nav>
              </div>
              <div className="col-span-4 md:col-span-4 lg:col-span-4">
                <p className="label mb-3">Contact</p>
                <p className="text-small text-text-secondary">
                  research@themedlabs.studio
                </p>
              </div>
            </div>
            <div className="mt-12 pt-6 border-t border-surface-300">
              <p className="text-caption text-text-tertiary">
                © {new Date().getFullYear()} Themed Labs. Research in progress.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

// Logo Component - Geometric, modular, neutral
function Logo({ size = 'default' }: { size?: 'sm' | 'default' }) {
  const dimensions = size === 'sm' ? 'w-6 h-6' : 'w-10 h-10 md:w-12 md:h-12'
  
  return (
    <div className={`${dimensions} relative`}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Outer frame */}
        <rect x="2" y="2" width="44" height="44" stroke="currentColor" strokeWidth="1.5" className="text-text-tertiary" />
        {/* Inner grid - representing modularity */}
        <rect x="10" y="10" width="12" height="12" fill="currentColor" className="text-text-secondary" />
        <rect x="26" y="10" width="12" height="12" stroke="currentColor" strokeWidth="1" className="text-text-tertiary" />
        <rect x="10" y="26" width="12" height="12" stroke="currentColor" strokeWidth="1" className="text-text-tertiary" />
        <rect x="26" y="26" width="12" height="12" fill="currentColor" className="text-text-secondary" />
      </svg>
    </div>
  )
}

// Project Card Component
function ProjectCard({ 
  index, 
  title, 
  status, 
  description 
}: { 
  index: string
  title: string
  status: string
  description: string
}) {
  return (
    <article className="card-module flex flex-col h-full">
      <header className="flex items-start justify-between mb-4">
        <span className="text-caption font-mono text-text-tertiary">{index}</span>
        <StatusBadge status={status} />
      </header>
      <h3 className="text-heading-3 text-text-primary mb-3">{title}</h3>
      <p className="text-small text-text-secondary flex-1">{description}</p>
    </article>
  )
}

// Status Badge Component
function StatusBadge({ status }: { status: string }) {
  const getStatusColor = (s: string) => {
    switch (s.toLowerCase()) {
      case 'in progress':
        return 'bg-surface-200 text-text-primary'
      case 'research':
        return 'bg-surface-200 text-text-secondary'
      case 'draft':
        return 'bg-surface-100 text-text-tertiary'
      case 'planned':
        return 'bg-surface-100 text-text-tertiary'
      case 'ongoing':
        return 'bg-surface-200 text-text-secondary'
      case 'continuous':
        return 'bg-surface-200 text-text-secondary'
      default:
        return 'bg-surface-100 text-text-tertiary'
    }
  }
  
  return (
    <span className={`text-caption font-mono px-2 py-0.5 ${getStatusColor(status)}`}>
      {status}
    </span>
  )
}


