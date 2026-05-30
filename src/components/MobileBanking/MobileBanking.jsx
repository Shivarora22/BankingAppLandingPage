import './MobileBanking.css'
import CTABanner from '../CTABanner/CTABanner'
import iphone1 from '../../assets/iphone13ProSVG1.svg'
import iphone2 from '../../assets/iphone13ProSVG2.svg'
import iphone3 from '../../assets/iphone13ProSVG3.svg'

function loadAnimationSVG(){
  return (
    <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.3" d="M56.4857 27.4845H37.6496C35.8088 27.4845 34.8861 25.2584 36.1896 23.9572L49.508 10.6389C50.0997 10.0472 50.0997 9.08594 49.508 8.49654C48.9163 7.90486 47.9551 7.90486 47.3635 8.49654L34.0451 21.8149C32.7439 23.1161 30.5177 22.1957 30.5177 20.3527V1.51658C30.5177 0.677806 29.8399 0 29.0011 0C28.1624 0 27.4846 0.677806 27.4846 1.51658V20.3527C27.4846 22.1935 25.2584 23.1161 23.9572 21.8149L10.6388 8.49654C10.0471 7.90486 9.08597 7.90486 8.49429 8.49654C7.90262 9.08821 7.90262 10.0472 8.49429 10.6389L21.8126 23.9572C23.1139 25.2584 22.1935 27.4845 20.3527 27.4845H1.51661C0.6801 27.4845 0 28.1624 0 29.0012C0 29.8399 0.677833 30.5177 1.51661 30.5177H20.3527C22.1935 30.5177 23.1161 32.7439 21.8126 34.0451L8.49429 47.3635C7.90262 47.9552 7.90262 48.9141 8.49429 49.5058C9.08597 50.0974 10.0449 50.0974 10.6388 49.5058L23.9572 36.1874C25.2584 34.8862 27.4846 35.8065 27.4846 37.6473V56.4834C27.4846 57.3199 28.1624 58 29.0011 58C29.8399 58 30.5177 57.3199 30.5177 56.4834V37.6473C30.5177 35.8065 32.7439 34.8839 34.0451 36.1851L47.3635 49.5035C47.9551 50.0952 48.914 50.0952 49.508 49.5035C50.0997 48.9118 50.0997 47.9506 49.508 47.3612L36.1896 34.0429C34.8884 32.7416 35.8088 30.5155 37.6496 30.5155H56.4857C57.3222 30.5155 58.0023 29.8377 58.0023 28.9989C58.0023 28.1601 57.3245 27.4823 56.4857 27.4823V27.4845Z" fill="#000D12"/>
    </svg>
  )
}

function loadArrowSVG() {
  return (
<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.467915 5.92647H11.3854" stroke="url(#paint0_linear_16888_289)" strokeWidth="0.935782" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.92665 0.467885L11.3854 5.92662L5.92665 11.3853" stroke="url(#paint1_linear_16888_289)" strokeWidth="0.935782" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_16888_289" x1="22.5636" y1="8.43162" x2="15.5685" y2="-2.84506" gradientUnits="userSpaceOnUse">
<stop stopColor="#00B4FD"/>
<stop offset="1" stopColor="#003ACE"/>
</linearGradient>
<linearGradient id="paint1_linear_16888_289" x1="10.0793" y1="22.898" x2="5.43052" y2="21.232" gradientUnits="userSpaceOnUse">
<stop stopColor="#00B4FD"/>
<stop offset="1" stopColor="#003ACE"/>
</linearGradient>
</defs>
</svg>

  )
}

const brands = ['CB7', 'N7']

const MarqueeItem = ({ brand }) => (
  <>
    <span className="marquee-separator">{loadAnimationSVG()}</span>
    <span className="marquee-text">Say</span>
    <span className="marquee-hand">✋</span>
    <span className="marquee-text">to the new way of banking</span>
    <span className="marquee-separator">{loadAnimationSVG()}</span>
    <span className="marquee-brand">{brand}</span>
  </>
)

const marqueeItems = brands.flatMap((brand, i) =>
  Array.from({ length: 2 }, (_, j) => <MarqueeItem key={`${i}-${j}`} brand={brand} />)
)

const CheckIcon = () => (
  <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="14.8862" cy="16.0496" r="9.26182" fill="url(#paint0_linear_24_4119)"/>
<path d="M13.2437 18.3328L11.3438 16.4329C11.2415 16.3306 11.1026 16.2731 10.9579 16.2731C10.8131 16.2731 10.6742 16.3306 10.5719 16.4329C10.4695 16.5353 10.412 16.6742 10.412 16.8189C10.412 16.8906 10.4261 16.9616 10.4535 17.0278C10.481 17.094 10.5212 17.1542 10.5719 17.2049L12.8604 19.4935C13.0739 19.707 13.4189 19.707 13.6324 19.4935L19.4249 13.7009C19.5273 13.5985 19.5848 13.4597 19.5848 13.3149C19.5848 13.1702 19.5273 13.0313 19.4249 12.9289C19.3226 12.8266 19.1837 12.7691 19.039 12.7691C18.8942 12.7691 18.7553 12.8266 18.653 12.9289L13.2437 18.3328Z" fill="#E9F4F9"/>
<defs>
<linearGradient id="paint0_linear_24_4119" x1="-9.11863" y1="-15.9254" x2="25.1246" y2="-17.5505" gradientUnits="userSpaceOnUse">
<stop stopColor="#00B4FD"/>
<stop offset="0.815786" stopColor="#003ACE"/>
</linearGradient>
</defs>
</svg>


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

        {/* Decorative spiral — left side background */}
        <svg className="mb-spiral" aria-hidden="true" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mb-spiral-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00B4FD" />
              <stop offset="100%" stopColor="#003ACE" />
            </linearGradient>
          </defs>
          <path d="M27.5303 19.083C30.967 21.1855 33.1898 24.8754 33.334 28.999L33.3408 29.4434C33.4328 36.0144 27.7455 41.7243 21.0918 41.5635L21.085 41.5625C16.6567 41.5098 12.7881 39.1266 10.6816 35.4521C19.9757 36.7907 28.5976 28.3514 27.5303 19.083ZM6.39551 10.0469C4.97566 17.8965 10.5037 25.9559 18.3955 27.3232L18.4385 27.3311H18.4463C19.7495 27.5761 21.1514 27.6432 22.5039 27.5283C18.4878 33.4749 9.03227 34.4605 3.99805 29.1191L3.98633 29.1064L3.97363 29.0957L3.70703 28.8389C1.00296 26.1488 0.0587785 22.2186 0.685547 18.5156C1.27712 15.0207 3.25787 11.7909 6.39551 10.0469ZM27.2754 8.66504C31.1006 7.96996 35.2042 8.97584 37.9961 11.9443L38.0195 11.9678C40.8339 14.5907 41.8942 18.4974 41.3721 22.2129C40.894 25.6142 39.0967 28.7972 36.1816 30.6436C36.5292 26.3991 35.0015 22.1306 32.1416 19.1396C28.8369 15.5458 23.6374 13.8094 18.8174 14.6025C20.5331 11.3702 23.76 9.30392 27.2754 8.66504ZM9.08398 12.5723C9.05868 0.655643 24.6205 -3.86534 31.1387 5.58887C21.6239 4.32336 12.9943 13.2924 14.5449 22.7031C11.3005 20.5622 9.22842 16.9821 9.09082 12.9961L9.08398 12.5723Z" stroke="url(#mb-spiral-gradient)" strokeWidth="0.1" />
        </svg>

        <div className="mb-layout">

          {/* Left column: intro — spans full height */}
          <div className="mb-left">
            <h2 className="mb-heading">Digital banking<br />out-of-the-box</h2>
            <p className="mb-desc">N7 helps your financial institution improve the client experience, automate and optimize procedures.</p>
            <div className="mb-buttons">
              <button className="mb-btn-blue">Request Demo</button>
              <button className="mb-btn-link">
                <span className="mb-btn-link-text">Learn More {loadArrowSVG()}</span>
                <div className="mb-btn-link-line" />
              </button>
            </div>
          </div>

          {/* Right column: all phone + feature rows stacked */}
          <div className="mb-right">
            <svg className="mb-bg-text" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="n7-stroke-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
                stroke="url(#n7-stroke-gradient)"
                strokeWidth="1.59"
              >N7</text>
            </svg>

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
        bgElement={
          <svg
            className="cta-n7-bg"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="cta-n7-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
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
              stroke="url(#cta-n7-stroke)"
              strokeWidth="1.59"
            >N7</text>
          </svg>
        }
      />

    </section>
  )
}