import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      setVisible(true)
      observer.disconnect()
    }, { threshold: 0.12 })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>{children}</div>
}
