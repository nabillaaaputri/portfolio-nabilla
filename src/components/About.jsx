import ScrollReveal from './ScrollReveal'
import './About.css'

const STATS = [
  { value: '6+', label: 'Projects Completed' },
  { value: '12+', label: 'Technologies Used' },
  { value: '2+', label: 'Team Collaborations' },
  { value: '6+', label: 'Certifications' },
]

export default function About() {
  return (
    <section id="about" className="section" aria-label="About section">
      <div className="container">
        <ScrollReveal>
          <div className="section-head">
            <span className="ghost-word" aria-hidden="true">About</span>
            <span className="section-eyebrow">Who I am</span>
            <h2 className="section-title">A bit about me</h2>
          </div>
        </ScrollReveal>

        <div className="about-layout">
          <ScrollReveal>
            <div className="about-text">
              <p>
                I'm an Informatics student building my path as a software engineer, with experience developing web applications across frontend and backend layers. I enjoy turning ideas into functional digital products with a focus on clean implementation and maintainable code.
              </p>
              <p>
                My experience includes frontend development with React.js, backend development with Node.js and Express.js, REST API integration, database management, and AI-based features in academic and personal projects. I am comfortable contributing across the stack to connect interfaces, services, and data.
              </p>
              <p>
                I am open to Frontend Developer, Web Developer, and Software Engineer internship opportunities where I can contribute to real-world product development while continuing to grow as a developer.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <dl className="about-stats">
              {STATS.map(({ value, label }) => (
                <div className="stat-item" key={label}>
                  <dt className="stat-value">{value}</dt>
                  <dd className="stat-label">{label}</dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}