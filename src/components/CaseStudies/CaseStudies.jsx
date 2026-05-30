import { useState } from 'react'
import './CaseStudies.css'
import { Zoomerr, SHELLS, SmartFinder, ArtVenue } from '../TrustedBy/TrustedBy.jsx'

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

function BrandMark() {
  return (
    <svg width="97" height="97" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.3779 25.5645H19.3789C21.955 25.561 24.5573 26.5556 26.5225 28.5225V28.5234L32.2363 34.2373L28.4238 38.0488L22.71 32.335L22.5322 32.167C21.6317 31.3535 20.5172 30.9579 19.3799 30.9541H19.377C18.2377 30.9578 17.124 31.3534 16.2236 32.167L16.0469 32.335L10.332 38.0488L6.51953 34.2373L12.2344 28.5234V28.5225C14.1995 26.5558 16.8037 25.561 19.3779 25.5645ZM10.2334 12.2363C12.2001 14.2013 13.1957 16.8047 13.1924 19.3789V19.3809C13.1955 21.7942 12.3209 24.232 10.5908 26.1465L10.2334 26.5225L4.51953 32.2363L0.707031 28.4238L6.42188 22.709C7.34692 21.7799 7.79678 20.5929 7.80078 19.3799V19.377C7.79678 18.1639 7.34701 16.976 6.42188 16.0469H6.4209L0.707031 10.333L4.51855 6.52148L10.2334 12.2363ZM38.0508 10.3311L32.3369 16.0469C31.4113 16.9745 30.962 18.1623 30.958 19.377V19.3799C30.962 20.5928 31.411 21.7799 32.3359 22.709L38.0508 28.4238L34.2412 32.2344L28.5264 26.5205L28.1689 26.1445C26.4392 24.2314 25.5642 21.7923 25.5674 19.3789V19.3779C25.564 16.8036 26.5596 14.1995 28.5264 12.2344L34.2402 6.52051L38.0508 10.3311ZM32.2363 4.51855L26.5225 10.2334C24.5573 12.2003 21.955 13.1958 19.3789 13.1924H19.3779C16.9645 13.1956 14.525 12.3207 12.6104 10.5908L12.2344 10.2334L6.51953 4.51855L10.3311 0.707031L16.0449 6.4209V6.42188C16.9737 7.34663 18.1614 7.79776 19.375 7.80176H19.3779C20.5911 7.79776 21.7788 7.34905 22.708 6.42188V6.4209L28.4229 0.705078L32.2363 4.51855Z" fill="#00B4FD"/>
    </svg>
  )
}

function NavArrow({ left }) {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="21" cy="21" r="20" stroke="#00B4FD" strokeWidth="1.36"/>
      {left
        ? <path d="M24 14L17 21L24 28" stroke="#00B4FD" strokeWidth="0.95" strokeLinecap="round" strokeLinejoin="round"/>
        : <path d="M18 14L25 21L18 28" stroke="#00B4FD" strokeWidth="0.95" strokeLinecap="round" strokeLinejoin="round"/>
      }
    </svg>
  )
}

function ViewAllArrow() {
  return (
    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.46 7.49H12.38" stroke="#00B4FD" strokeWidth="0.94" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.92 2.03L12.38 7.49L6.92 12.95" stroke="#00B4FD" strokeWidth="0.94" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

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
            <span className="cs-view-all-text">View All <ViewAllArrow /></span>
            <div className="cs-view-all-line" />
          </a>
        </div>
      </div>
    </section>
  )
}
