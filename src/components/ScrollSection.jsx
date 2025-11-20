import '../styles/ScrollSection.css'

function ScrollSection() {
  return (
    <section className="scroll-section">
      <div className="scroll-section__content">
        <div className="scroll-section__badge" aria-hidden="true">
          <svg viewBox="0 0 64 64" role="presentation">
            <path
              d="M32 8c0 8-8 16-16 16 8 0 16 8 16 16 0-8 8-16 16-16-8 0-16-8-16-16Z"
              fill="#2f7bff"
            />
          </svg>
        </div>

        <p className="scroll-section__text">
        Привет, я Игорь. Делаю ML‑решения, которые органично работают в продукте. Активно учусь и развиваюсь: осваиваю новые подходы, тестирую их на практике и непрерывно повышаю уровень своих навыков.
        </p>

        <div className="scroll-section__indicator" aria-hidden="true">
          <div className="scroll-section__track">
            <span className="scroll-section__shuttle">
              <span className="scroll-section__dot" />
              <span className="scroll-section__bar" />
            </span>
          </div>
          <div className="scroll-section__label">SCROLL</div>
        </div>
      </div>
    </section>
  )
}

export default ScrollSection
