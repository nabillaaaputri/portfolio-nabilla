import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-top">
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="mailto:nabillaptr1612@gmail.com" className="footer-email">nabillaptr1612@gmail.com</a>
      </div>

      <div className="footer-giant" aria-hidden="true">NABILLA</div>

      <div className="container footer-bottom">
        <p className="footer-copyright">&copy; 2026 Nabilla Putri Nuraini. Last updated June 2026.</p>
      </div>
    </footer>
  )
}