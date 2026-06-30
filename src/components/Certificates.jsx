import { useState, useEffect, useCallback } from 'react'
import { X, ArrowUpRight, Award } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import './Certificates.css'

const CERTIFICATES = [
  {
    title: 'BSI Scholarship Awardee',
    issuer: 'Bank Syariah Indonesia',
    year: '2024',
    accent: 'gold',
    credentialUrl: '#',
    category: 'Scholarship',
    image: '/certificates/bsi-scholarship.jpg',
  },
  {
    title: 'Oracle Cloud Infrastructure Foundations I & II – DTS',
    issuer: 'Oracle Academy & Digitalent Kominfo',
    year: '2024',
    accent: 'primary',
    credentialUrl: '#',
    category: 'Cloud',
    image: '/certificates/oracle-dts.png',
  },
  {
    title: 'Belajar Fundamental Aplikasi Web dengan React',
    issuer: 'Dicoding Indonesia',
    year: '2026',
    accent: 'secondary',
    credentialUrl: '#',
    category: 'Frontend',
    image: '/certificates/react-fundamental.png',
  },
  {
    title: 'Belajar Membuat Aplikasi Web dengan React',
    issuer: 'Dicoding Indonesia',
    year: '2026',
    accent: 'secondary',
    credentialUrl: '#',
    category: 'Frontend',
    image: '/certificates/react-web.png',
  },
  {
    title: 'Belajar Membuat Front-End Web untuk Pemula',
    issuer: 'Dicoding Indonesia',
    year: '2026',
    accent: 'secondary',
    credentialUrl: '#',
    category: 'Frontend',
    image: '/certificates/frontend-beginner.png',
  },
  {
    title: 'Belajar Fundamental Back-End dengan JavaScript',
    issuer: 'Dicoding Indonesia',
    year: '2026',
    accent: 'primary',
    credentialUrl: '#',
    category: 'Backend',
    image: '/certificates/backend-fundamental.png',
  },
]

function CertificateModal({ certificate, onClose }) {
  const handleKeyDown = useCallback((e) => { if (e.key === 'Escape') onClose() }, [onClose])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', handleKeyDown); document.body.style.overflow = '' }
  }, [handleKeyDown])

  return (
    <div className="cert-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={certificate.title}>
      <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cert-modal-header">
          <div className="cert-modal-header-left">
            <span className={`cert-modal-badge cert-accent-${certificate.accent}`}>{certificate.category}</span>
          </div>
          <button className="cert-modal-close" onClick={onClose} aria-label="Close modal"><X size={16} /></button>
        </div>

        {certificate.image ? (
          <div className="cert-modal-image-container">
            <img src={certificate.image} alt={`${certificate.title} preview`} className="cert-modal-image" />
          </div>
        ) : (
          <div className={`cert-modal-preview cert-accent-${certificate.accent}`}>
            <div className="cert-modal-preview-inner">
              <Award size={36} strokeWidth={1.2} className="cert-preview-icon" />
              <div className="cert-preview-lines">
                <div className="cert-preview-line cert-preview-line-long" />
                <div className="cert-preview-line cert-preview-line-short" />
                <div className="cert-preview-line cert-preview-line-medium" />
              </div>
            </div>
            <span className="cert-modal-preview-label">Certificate Preview</span>
          </div>
        )}

        <div className="cert-modal-body">
          <div className="cert-modal-meta">
            <span className="cert-modal-year">{certificate.year}</span>
            <span className="cert-modal-issuer">{certificate.issuer}</span>
          </div>
          <h4 className="cert-modal-title">{certificate.title}</h4>
          {certificate.credentialUrl && certificate.credentialUrl !== '#' && (
            <a href={certificate.credentialUrl} target="_blank" rel="noopener noreferrer" className="cert-modal-cta">
              View Credential <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section id="certificates" className="section" aria-label="Certificates section">
      <div className="container">
        <ScrollReveal>
          <div className="section-head">
            <span className="ghost-word" aria-hidden="true">Proof</span>
            <span className="section-eyebrow">Recognition</span>
            <h2 className="section-title">Certifications & awards</h2>
          </div>
        </ScrollReveal>

        <div className="cert-gallery">
          {CERTIFICATES.map((cert, index) => (
            <ScrollReveal key={index} delay={Math.min(index + 1, 5)}>
              <div
                className={`cert-card cert-accent-${cert.accent}`}
                onClick={() => setSelectedCert(cert)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedCert(cert) } }}
                tabIndex={0}
                role="button"
                aria-label={`View ${cert.title} certificate`}
              >
                <div className="cert-card-top-bar" />
                <div className="cert-card-body">
                  <div className="cert-card-meta">
                    <span className="cert-card-category">{cert.category}</span>
                    <span className="cert-card-year">{cert.year}</span>
                  </div>
                  <h3 className="cert-card-title">{cert.title}</h3>
                  <p className="cert-card-issuer">{cert.issuer}</p>
                  <span className="cert-card-cta">View Credential <ArrowUpRight size={12} /></span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {selectedCert && <CertificateModal certificate={selectedCert} onClose={() => setSelectedCert(null)} />}
    </section>
  )
}