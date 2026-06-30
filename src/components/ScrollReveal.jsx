import { useEffect, useRef } from 'react'

export default function ScrollReveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('revealed')
          observer.unobserve(node)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const delayClass = delay ? `delay-${delay}` : ''

  return (
    <div ref={ref} className={`scroll-reveal ${delayClass} ${className}`}>
      {children}
    </div>
  )
}