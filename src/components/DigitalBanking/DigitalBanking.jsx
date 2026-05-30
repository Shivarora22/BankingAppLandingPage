import './DigitalBanking.css'
import CTABanner from '../CTABanner/CTABanner'
import { ArrowIcon, CheckIcon, BgTextCB7 } from '../../assets/icons'
import laptopSVG from '../../assets/images/laptop1.svg'
import laptop2SVG from '../../assets/images/Laptop2.svg'

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

        <BgTextCB7 className="db-s1-bg-text" />

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
        bgElement={<BgTextCB7 className="cta-cb7-bg" />}
      />
    </>
  )
}
