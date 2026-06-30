import ScrollReveal from './ScrollReveal'
import './Experience.css'

const EXPERIENCES = [
  {
    type: 'Internship',
    title: 'Planning and Program Evaluation Intern',
    organization: 'DPRD Kabupaten Pandeglang',
    description: 'Supported the Planning and Program Evaluation Division by managing financial records, validating budget planning data, and maintaining information in a web-based system with accuracy and attention to detail.',
    tags: ['Data Management', 'Data Validation', 'Web-Based Systems'],
  },
  {
    type: 'Capstone Project',
    title: 'Frontend Developer',
    organization: 'DBS Foundation Coding Camp 2026',
    description: 'Developed responsive user interfaces for the SiDoku web application using React, collaborating with a multidisciplinary team throughout the capstone project.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Teamwork'],
  },
  {
    type: 'Organization',
    title: 'Secretary of Internal Department',
    organization: 'Computer Science Student Association (HMIF FT UNTIRTA)',
    description: 'Managed internal documentation, coordinated departmental activities, and supported effective communication within the organization.',
    tags: ['Documentation', 'Coordination', 'Communication'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section" aria-label="Experience section">
      <div className="container">
        <ScrollReveal>
          <div className="section-head">
            <span className="ghost-word" aria-hidden="true">Journey</span>
            <span className="section-eyebrow">Experience</span>
            <h2 className="section-title">My journey so far</h2>
          </div>
        </ScrollReveal>

        <div className="exp-timeline">
          {EXPERIENCES.map((exp, index) => (
            <ScrollReveal key={index} delay={index + 1}>
              <div className="exp-item">
                <div className="exp-marker" aria-hidden="true">
                  <div className="exp-dot"></div>
                  {index < EXPERIENCES.length - 1 && <div className="exp-line"></div>}
                </div>
                <div className="exp-card">
                  <div className="exp-card-header">
                    <span className="exp-type">{exp.type}</span>
                    <span className="exp-org">{exp.organization}</span>
                  </div>
                  <h3 className="exp-title">{exp.title}</h3>
                  <p className="exp-description">{exp.description}</p>
                  <div className="exp-tags">
                    {exp.tags.map(tag => <span key={tag} className="exp-tag">{tag}</span>)}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}