import { useEffect, useRef, useState } from 'react'
import '../styles/Intro.css'
import portraitUrl from '../assets/pictures/photo_igor.jpeg'

function Intro() {
  const introRef = useRef(null)
  const frameRef = useRef(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      if (!introRef.current) return
      const rect = introRef.current.getBoundingClientRect()
      const x = event.clientX - rect.left - rect.width / 2
      const y = event.clientY - rect.top - rect.height / 2
      const strength = 0.035
      const next = { x: -x * strength, y: -y * strength }

      if (frameRef.current) return
      frameRef.current = requestAnimationFrame(() => {
        setOffset(next)
        frameRef.current = null
      })
    }

    const handleLeave = () => setOffset({ x: 0, y: 0 })

    const node = introRef.current
    if (node) {
      node.addEventListener('pointermove', handleMove)
      node.addEventListener('pointerleave', handleLeave)
    }

    return () => {
      if (node) {
        node.removeEventListener('pointermove', handleMove)
        node.removeEventListener('pointerleave', handleLeave)
      }
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <div
      className="intro"
      ref={introRef}
      style={{ '--offset-x': `${offset.x}px`, '--offset-y': `${offset.y}px` }}
    >
      <div className="intro__layer intro__stripes" aria-hidden="true" />

      <header className="intro__header">
        <nav className="intro__nav">
          <a className="intro__link intro__link--active" href="#">
            <span className="intro__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path
                  d="M5 10.5 12 4l7 6.5V20a1 1 0 0 1-1 1h-4.5a.5.5 0 0 1-.5-.5v-4a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4a.5.5 0 0 1-.5.5H6a1 1 0 0 1-1-1z"
                  fill="currentColor"
                />
              </svg>
            </span>
            Home
          </a>
          <a className="intro__link" href="#">
            <span className="intro__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path
                  d="M4.5 6.75A1.25 1.25 0 0 1 5.75 5.5h12.5a1.25 1.25 0 0 1 1.25 1.25v2.5a1.25 1.25 0 0 1-1.25 1.25h-12.5A1.25 1.25 0 0 1 4.5 9.25zM4.5 14a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2h-13a1 1 0 0 1-1-1Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            Work
          </a>
          <a className="intro__link" href="#">
            <span className="intro__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path
                  d="M12 12.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm0 1.5c-2.485 0-4.5 1.12-4.5 2.5a.75.75 0 0 0 .75.75h7.5a.75.75 0 0 0 .75-.75c0-1.38-2.015-2.5-4.5-2.5Z"
                  fill="currentColor"
                />
                <path
                  d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 1.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            About
          </a>
          <a className="intro__link" href="#">
            <span className="intro__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path
                  d="M4.5 6.25A2.25 2.25 0 0 1 6.75 4h10.5A2.25 2.25 0 0 1 19.5 6.25v11.5a.75.75 0 0 1-1.15.62l-4.57-3.02a.75.75 0 0 0-.82 0l-4.57 3.02a.75.75 0 0 1-1.15-.62zM6 6.25c0-.414.336-.75.75-.75h10.5c.414 0 .75.336.75.75v9.76l-3.82-2.52a2.25 2.25 0 0 0-2.46 0L6 16.01z"
                  fill="currentColor"
                />
              </svg>
            </span>
            Contact
          </a>
        </nav>
      </header>

      <main className="intro__main">
        <p className="intro__eyebrow">BEGINNER ML ENGINEER SINCE — 2024</p>

        <div className="intro__title-stack">
          <h1 className="intro__title intro__title--top">ИГОРЬ</h1>
          <h1 className="intro__title intro__title--bottom">ЖАРОВ</h1>

          <div className="intro__portrait">
            <img src={portraitUrl} alt="Игорь Жаров" />
          </div>

          <div className="intro__title intro__title--reflection" aria-hidden="true">
            ЖАРОВ
          </div>
        </div>

        <div className="intro__cta">
          <button className="intro__btn intro__btn--solid">
            <span className="intro__icon intro__icon--btn" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path
                  d="M5 8.5A3.5 3.5 0 0 1 8.5 5h7A3.5 3.5 0 0 1 19 8.5V15a2 2 0 0 1-2 2h-1.086a1 1 0 0 0-.707.293l-1.5 1.5a1 1 0 0 1-1.414 0l-1.5-1.5A1 1 0 0 0 10.086 17H9a2 2 0 0 1-2-2Z"
                  fill="currentColor"
                />
                <path
                  d="M8.75 11.75a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Zm0-2.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            Созвониться
          </button>
          <button className="intro__btn intro__btn--ghost">
            <span className="intro__icon intro__icon--btn" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path
                  d="M4.75 5A2.75 2.75 0 0 0 2 7.75v8.5A2.75 2.75 0 0 0 4.75 19h5.507c.224 0 .427.125.527.323l.887 1.755a.4.4 0 0 0 .358.222.4.4 0 0 0 .357-.222l.887-1.755a.6.6 0 0 1 .538-.323h5.439A2.75 2.75 0 0 0 22 16.25v-8.5A2.75 2.75 0 0 0 19.25 5Zm-.25 3a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5H5.25A.75.75 0 0 1 4.5 8Zm0 3a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            Написать
          </button>
        </div>
      </main>
    </div>
  )
}

export default Intro
