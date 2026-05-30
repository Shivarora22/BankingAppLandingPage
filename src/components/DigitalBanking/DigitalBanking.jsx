import './DigitalBanking.css'
import laptopSVG from './laptop1.svg'
import laptop2SVG from './Laptop2.svg'
import CTABanner from '../CTABanner/CTABanner'

function ArrowIcon() {
  return (
    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.467915 5.92647H11.3854" stroke="#00B4FD" strokeWidth="0.935782" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.92665 0.467885L11.3854 5.92662L5.92665 11.3853" stroke="#00B4FD" strokeWidth="0.935782" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <defs>
        <linearGradient id="db-check-grad" x1="0" y1="0" x2="1" y2="0" gradientTransform="rotate(87.28, 0.5, 0.5)">
          <stop offset="0%" stopColor="#00B4FD" />
          <stop offset="100%" stopColor="#003ACE" />
        </linearGradient>
      </defs>
      <circle cx="15" cy="15.5" r="9.26" fill="url(#db-check-grad)" />
      <path d="M11.8 15.5L14.1 17.8L18.8 13.1" stroke="#E9F4F9" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const leftFeatures = [
  'Customer-On Boarding',
  'Managing deposits and withdrawals',
  'Transaction management',
  'Interest Calculation',
  'Payments processing (cash, cheques, mandates, NEFT, RTGS etc)',
]

const rightFeatures = [
  'CRM Activities',
  'Configuring New Banking Products',
  'Loan disbursal and Loan management',
  'Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.',
]

export default function DigitalBanking() {
  return (
    <>
      {/* Section 1: text left, laptop right */}
      <section className="digital-banking">

        <svg className="db-s1-bg-text" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="db-s1-cb7-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00B4FD" />
              <stop offset="100%" stopColor="#003ACE" />
            </linearGradient>
          </defs>
          <text
            x="0"
            y="0.85em"
            fontFamily="Archivo, sans-serif"
            fontWeight="500"
            fontSize="573"
            fill="none"
            stroke="url(#db-s1-cb7-stroke)"
            strokeWidth="1.59"
          >CB7</text>
        </svg>

        <div className="db-layout">

          <div className="db-left">
            <h2 className="db-heading">A complete cloud-based<br />core banking.</h2>
            <p className="db-desc">Faster time to market with our cloud-based core banking services</p>
            <div className="db-buttons">
              <button className="db-btn-blue">Request Demo</button>
              <button className="db-btn-link">
                <span className="db-btn-link-text">Learn More <ArrowIcon /></span>
                <div className="db-btn-link-line" />
              </button>
            </div>
          </div>

          <div className="db-right">
            <img src={laptopSVG} alt="AML Dashboard" className="db-laptop" />
          </div>

        </div>
      </section>

      {/* Section 2: laptop left (bleeding), features right */}
      <section className="db-section2">

        <div className="db-s2-laptop-wrap">
          <img src={laptop2SVG} alt="Core Banking Dashboard" className="db-s2-laptop" />
        </div>

        <div className="db-s2-content">
          <h3 className="db-s2-heading">
            Run a more efficient, flexible, and digitally connected core banking system
          </h3>
          <div className="db-s2-body">
            <p className="db-s2-label">What you will get:</p>
            <div className="db-s2-grid">
              <div className="db-s2-col">
                {leftFeatures.map((text, i) => (
                  <div className="db-s2-item" key={i}>
                    <CheckIcon />
                    <span className="db-s2-item-text">{text}</span>
                  </div>
                ))}
              </div>
              <div className="db-s2-col">
                {rightFeatures.map((text, i) => (
                  <div className="db-s2-item" key={i}>
                    <CheckIcon />
                    <span className="db-s2-item-text">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </section>

      <CTABanner
        heading="Take the full advantage of going paper-less now."
        desc="CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations."
        style={{ backgroundColor: '#000D12', padding: '80px 0' }}
        bgElement={
          <svg className="cta-cb7-bg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cta-cb7-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00B4FD" />
                <stop offset="100%" stopColor="#003ACE" />
              </linearGradient>
            </defs>
            <text
              x="0"
              y="0.85em"
              fontFamily="Archivo, sans-serif"
              fontWeight="500"
              fontSize="573"
              fill="none"
              stroke="url(#cta-cb7-stroke)"
              strokeWidth="1.59"
            >CB7</text>
          </svg>
        }
      />
    </>
  )
}
