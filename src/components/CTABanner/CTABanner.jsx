import './CTABanner.css'

export default function CTABanner({ bgElement, style , heading, desc}) {
  return (
    <section className="cta-banner" style={style}>
      {bgElement}
      <div className="cta-banner-inner">
        <div className="cta-banner-content">
          <h2 className="cta-banner-heading">
            {heading || 'Ready to transform your banking experience?'}
          </h2>
          <p className="cta-banner-desc">
            {desc || 'N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations.'}
          </p>
        </div>
        <div className="cta-banner-buttons">
          <button className="cta-btn-outline">Contact Us</button>
          <button className="cta-btn-blue">Request Demo</button>
        </div>
      </div>
    </section>
  )
}
