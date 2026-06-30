import ScrollReveal from './ScrollReveal'
import './About.css'

const STATS = [
  { value: '6+', label: 'Projects shipped' },
  { value: '10+', label: 'Certificates' },
  { value: '2+', label: 'Years Learning' },
  { value: '7+', label: 'Technologies' },
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
                I'm an Informatics student with a strong interest in web development and building responsive, user-friendly applications. I enjoy turning ideas into functional websites using modern technologies while continuously improving my technical and problem-solving skills.
              </p>
              <p>
                My journey started with HTML and CSS and has grown to include JavaScript, PHP, React, and MySQL through academic and personal projects. I'm currently learning Laravel and Node.js to expand my knowledge of full-stack web development and build more scalable applications.
              </p>
              <p>
                I am seeking a web developer internship opportunity to contribute to real-world projects while continuing to improve my skills in modern web development. Feel free to contact me via email or LinkedIn.
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