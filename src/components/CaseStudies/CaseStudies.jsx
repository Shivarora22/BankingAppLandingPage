import { useState } from 'react'
import './CaseStudies.css'
import { BrandMark, NavArrow, ArrowIcon } from '../../assets/icons'
import { Zoomerr, SHELLS, SmartFinder, ArtVenue } from '../../assets/logos'

const studies = [
  {
    category: 'Getting Started',
    title: 'How we help brand reach out to more people',
    company: 'Zoomerr',
    Icon: Zoomerr,
  },
  {
    category: 'Digital Banking',
    title: 'Scaling cross-border payments to 40 countries',
    company: 'Stellar Pay',
    Icon: SHELLS,
  },
  {
    category: 'Core Banking',
    title: 'How Nexus Bank reduced onboarding time by 80%',
    company: 'Nexus Bank',
    Icon: SmartFinder,
  },
  {
    category: 'Loan Origination',
    title: 'Launching a fully digital lending product in 6 weeks',
    company: 'Orion Finance',
    Icon: ArtVenue,
  },
]


const CARD_W = 1015
const CARD_GAP = 40

export default function CaseStudies() {
  const [active, setActive] = useState(0)

  const prev = () => setActive(i => Math.max(0, i - 1))
  const next = () => setActive(i => Math.min(studies.length - 1, i + 1))

  return (
    <section className="case-studies">
      <div className="cs-heading-row">
        <h2 className="cs-heading">Our Case Studies</h2>
      </div>

      <div className="cs-carousel">
        <div className="cs-cards-area">
          <div
            className="cs-track"
            style={{
              transform: `translateX(calc(-507.5px - ${active * (CARD_W + CARD_GAP)}px)) translateY(-50%)`
            }}
          >
            {studies.map((study, i) => (
              <div
                key={i}
                className={`cs-card${i === active ? ' cs-card-active' : ''}`}
              >
                <div className="cs-image-panel">
                  <div className="cs-icons-grid">
                    <BrandMark />
                    <BrandMark />
                    <BrandMark />
                    <BrandMark />
                  </div>
                </div>

                <div
                  className="cs-card-content"
                  key={i === active ? `active-${active}` : `ghost-${i}`}
                >
                  <div className="cs-text-group">
                    <span className="cs-category">{study.category}</span>
                    <h3 className="cs-title">{study.title}</h3>
                    <div className="cs-company-row">
                      <div className="cs-company-dot"><study.Icon /></div>
                      <span className="cs-company-name">{study.company}</span>
                    </div>
                  </div>
                  {i === active && (
                    <button className="cs-read-more">Read More</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cs-nav-row">
          <div className="cs-nav-center">
            <button className="cs-nav-btn" onClick={prev} disabled={active === 0} aria-label="Previous">
              <NavArrow left />
            </button>
            <div className="cs-dots">
              {studies.map((_, i) => (
                <button
                  key={i}
                  className={`cs-dot${i === active ? ' cs-dot-active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button className="cs-nav-btn" onClick={next} disabled={active === studies.length - 1} aria-label="Next">
              <NavArrow />
            </button>
          </div>

          <a href="#" className="cs-view-all">
            <span className="cs-view-all-text">View All <ArrowIcon /></span>
            <div className="cs-view-all-line" />
          </a>
        </div>
      </div>
    </section>
  )
}
