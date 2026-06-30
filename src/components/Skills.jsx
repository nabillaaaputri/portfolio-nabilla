
import ScrollReveal from './ScrollReveal'
import './Skills.css'

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Backend',
    skills: ['PHP', 'Node.js', 'Express'],
  },
  {
    title: 'Database',
    skills: ['MySQL'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section" aria-label="Skills section">
      <div className="container">
        <ScrollReveal>
          <div className="section-head">
            <span className="ghost-word" aria-hidden="true">Skills</span>
            <span className="section-eyebrow">Toolbox</span>
            <h2 className="section-title">Technologies I work with</h2>
          </div>
        </ScrollReveal>

        <div className="skills-categories">
          {SKILL_CATEGORIES.map((category, index) => (
            <ScrollReveal key={category.title} delay={index + 1}>
              <div className="skill-row">
                <div className="skill-row-label">
                  {category.title}
                </div>
                <div className="skill-list">
                  {category.skills.map((skill, i) => (
                    <span key={skill} className="skill-item">
                      {skill}
                      {i < category.skills.length - 1 && <span className="skill-dot" aria-hidden="true">•</span>}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}