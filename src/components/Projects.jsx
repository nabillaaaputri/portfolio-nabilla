import { ExternalLink, BarChart3 } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import './Projects.css'

const FEATURED_PROJECTS = [
  {
    title: 'SiDoku',
    description: 'Business management web application for small and medium-sized businesses, featuring product, inventory, expense, and financial management. Developed the responsive front-end using React.',
    image: '/projects/sidoku.png',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Axios'],
    demo: 'https://sidoku.vercel.app',
    github: 'https://github.com/nabillaaaputri/SiDoku-capstone-project',
  },
  {
    title: 'NovaEdge',
    description: 'Modern and responsive agency website template built with HTML, CSS, and JavaScript. Designed for startups and service businesses with multi-page layouts, dark mode, and interactive user experiences.',
    image: '/projects/novaedge.png',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    demo: 'https://novaedge-template.vercel.app/',
    github: 'https://github.com/nabillaaaputri/NovaEdge-HTML-Agency-Template',
  },
  {
    title: 'Pretty Things',
    description: 'Mobile e-commerce application for fashion accessories with user authentication, product catalog, and CRUD product management. Built with Flutter using a structured, component-based architecture.',
    image: '/projects/pretty-things.png',
    tags: ['Flutter', 'Dart', 'Mock API'],
    demo: '',
    github: 'https://github.com/nabillaaaputri/pretty_things_frontend',
  },
]

const OTHER_PROJECTS = [
  {
    title: 'Retail Analytics',
    description: 'Flutter mobile application featuring responsive mobile UI, navigation, and basic state management for retail data analysis.',
    tags: ['Flutter', 'Dart'],
  },
  {
    title: 'Pomodoro Timer',
    description: 'Flutter-based Pomodoro timer application with customizable work and break sessions to help users stay focused and manage productivity.',
    tags: ['Flutter', 'Dart'],
  },
  {
    title: 'Athleon',
    description: 'Responsive e-commerce web application with a modern user interface. Includes product catalog pages and interactive shopping features.',
    tags: ['React', 'JavaScript', 'CSS'],
  },
]

function ProjectActions({ demo, github }) {
  return (
    <div className="project-actions">
      {demo && (
        <a href={demo} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
          <ExternalLink size={14} /> Live Demo
        </a>
      )}
      <a href={github} className="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
        GitHub
      </a>
    </div>
  )
}

function ProjectTags({ tags }) {
  return (
    <div className="project-tags">
      {tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section" aria-label="Projects section">
      <div className="container">
        <ScrollReveal>
          <div className="section-head">
            <span className="ghost-word" aria-hidden="true">Work</span>
            <span className="section-eyebrow">Projects</span>
            <h2 className="section-title">Featured projects</h2>
            <p className="section-subtitle">A selection of projects I've built to sharpen my skills and solve real problems.</p>
          </div>
        </ScrollReveal>

        <div className="featured-projects">
          <ScrollReveal>
            <div className="featured-project">
              <div className="featured-project-image">
                <img src={FEATURED_PROJECTS[0].image} alt={`${FEATURED_PROJECTS[0].title} screenshot`} loading="lazy" />
              </div>
              <div className="featured-project-info">
                <span className="featured-project-number">01</span>
                <h3 className="featured-project-title">{FEATURED_PROJECTS[0].title}</h3>
                <p className="featured-project-description">{FEATURED_PROJECTS[0].description}</p>
                <ProjectTags tags={FEATURED_PROJECTS[0].tags} />
                <ProjectActions demo={FEATURED_PROJECTS[0].demo} github={FEATURED_PROJECTS[0].github} />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="featured-project featured-project-reversed">
              <div className="featured-project-image">
                <img src={FEATURED_PROJECTS[1].image} alt={`${FEATURED_PROJECTS[1].title} screenshot`} loading="lazy" />
              </div>
              <div className="featured-project-info">
                <span className="featured-project-number">02</span>
                <h3 className="featured-project-title">{FEATURED_PROJECTS[1].title}</h3>
                <p className="featured-project-description">{FEATURED_PROJECTS[1].description}</p>
                <ProjectTags tags={FEATURED_PROJECTS[1].tags} />
                <ProjectActions demo={FEATURED_PROJECTS[1].demo} github={FEATURED_PROJECTS[1].github} />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="featured-project">
              <div className="featured-project-image">
                <img src={FEATURED_PROJECTS[2].image} alt={`${FEATURED_PROJECTS[2].title} screenshot`} loading="lazy" />
              </div>
              <div className="featured-project-info">
                <span className="featured-project-number">03</span>
                <h3 className="featured-project-title">{FEATURED_PROJECTS[2].title}</h3>
                <p className="featured-project-description">{FEATURED_PROJECTS[2].description}</p>
                <ProjectTags tags={FEATURED_PROJECTS[2].tags} />
                <ProjectActions demo={FEATURED_PROJECTS[2].demo} github={FEATURED_PROJECTS[2].github} />
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="other-projects-header"><h3>Other projects</h3></div>
        </ScrollReveal>

        <div className="other-projects-grid">
          {OTHER_PROJECTS.map((project, index) => (
            <ScrollReveal key={index} delay={1}>
              <div className="other-project-card">
                <div className="other-project-icon" aria-hidden="true"><BarChart3 size={22} strokeWidth={1.8} /></div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="other-project-tags">
                  {project.tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}