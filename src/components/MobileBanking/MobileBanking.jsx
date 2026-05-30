import './MobileBanking.css'
import CTABanner from '../CTABanner/CTABanner'
import { AnimationIcon, GradientArrowIcon, CheckIcon, SpiralDecor, BgTextN7 } from '../../assets/icons'
import iphone1 from '../../assets/iphone13ProSVG1.svg'
import iphone2 from '../../assets/iphone13ProSVG2.svg'
import iphone3 from '../../assets/iphone13ProSVG3.svg'

const brands = ['CB7', 'N7']

const MarqueeItem = ({ brand }) => (
  <>
    <span className="marquee-separator"><AnimationIcon /></span>
    <span className="marquee-text">Say</span>
    <span className="marquee-hand">✋</span>
    <span className="marquee-text">to the new way of banking</span>
    <span className="marquee-separator"><AnimationIcon /></span>
    <span className="marquee-brand">{brand}</span>
  </>
)

const marqueeItems = brands.flatMap((brand, i) =>
  Array.from({ length: 2 }, (_, j) => <MarqueeItem key={`${i}-${j}`} brand={brand} />)
)

export default function MobileBanking() {
  return (
    <section className="mobile-banking">

      {/* Marquee header */}
      <div className="mobile-banking-header">
        <div className="marquee-track">
          <div className="marquee-content">{marqueeItems}</div>
          <div className="marquee-content" aria-hidden="true">{marqueeItems}</div>
        </div>
      </div>

      {/* Feature sections */}
      <div className="mb-features">

        <SpiralDecor className="mb-spiral" />

        <div className="mb-layout">

          {/* Left column: intro — spans full height */}
          <div className="mb-left">
            <h2 className="mb-heading">Digital banking<br />out-of-the-box</h2>
            <p className="mb-desc">N7 helps your financial institution improve the client experience, automate and optimize procedures.</p>
            <div className="mb-buttons">
              <button className="mb-btn-blue">Request Demo</button>
              <button className="mb-btn-link">
                <span className="mb-btn-link-text">Learn More <GradientArrowIcon /></span>
                <div className="mb-btn-link-line" />
              </button>
            </div>
          </div>

          {/* Right column: all phone + feature rows stacked */}
          <div className="mb-right">
            <BgTextN7 className="mb-bg-text" />

            {/* phone | compliance text */}
            <div className="mb-row">
              <div className="mb-phone">
                <img src={iphone1} alt="N7 app screen" />
              </div>
              <div className="mb-feature-card">
                <h3 className="mb-feature-heading">Fully compliant with regulatory requirement</h3>
                <p className="mb-feature-desc">The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational risk protocols and procedures.</p>
                <ul className="mb-bullets">
                  <li><CheckIcon />Pre-integrated Security System</li>
                  <li><CheckIcon />Fully Compliant With Regulatory Requirement</li>
                  <li><CheckIcon />Digitally Connected Core</li>
                </ul>
              </div>
            </div>

            {/* feature text | phone */}
            <div className="mb-row">
              <div className="mb-feature-card">
                <h3 className="mb-feature-heading">No legacy IT systems</h3>
                <p className="mb-feature-desc">Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.</p>
                <ul className="mb-bullets">
                  <li><CheckIcon />Adaptive & Intelligent API monetization</li>
                  <li><CheckIcon />Ambient User Experience</li>
                  <li><CheckIcon />Cloud-native With lower TCO</li>
                </ul>
              </div>
              <div className="mb-phone">
                <img src={iphone2} alt="N7 app screen" />
              </div>
            </div>

            {/* phone | feature text */}
            <div className="mb-row">
              <div className="mb-phone">
                <img src={iphone3} alt="N7 app screen" />
              </div>
              <div className="mb-feature-card">
                <h3 className="mb-feature-heading">No traditional branches</h3>
                <p className="mb-feature-desc">Our Digital Banking out of the box helps you to accelerate innovation while reducing risks and optimizing operational costs for a seamless branchless experience.</p>
                <ul className="mb-bullets">
                  <li><CheckIcon />Branchless & Paperless Banking</li>
                  <li><CheckIcon />Digital Transformation Capability</li>
                  <li><CheckIcon />Optimized, Adaptable and Scalable</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <CTABanner
        heading="Take the full advantage of going paper-less now."
        desc="N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations."
        bgElement={<BgTextN7 className="cta-n7-bg" />}
      />

    </section>
  )
}