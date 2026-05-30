import './GetConnected.css'
import { BrandMark, ArrowIcon } from '../../assets/icons'

function ArticleCard({ featured = false }) {
  return (
    <div className={`gc-card${featured ? ' gc-card--featured' : ''}`}>
      {featured && (
        <div className="gc-card-image">
          <div className="gc-icons-grid">
            <BrandMark />
            <BrandMark />
            <BrandMark />
            <BrandMark />
          </div>
        </div>
      )}
      <div className={`gc-card-body${featured ? '' : ' gc-card-body--centered'}`}>
        <div className="gc-card-info">
          <span className="gc-card-category">Getting Started</span>
          <h3 className="gc-card-title">How to transition from a traditional to a digital bank</h3>
          <div className="gc-card-meta">
            <span className="gc-card-author">David Grohl</span>
            <span className="gc-card-date">17/08/24</span>
          </div>
        </div>
        <button className="gc-read-more">Read More</button>
      </div>
    </div>
  )
}

export default function GetConnected() {
  return (
    <section className="get-connected">
      <div className="gc-glow" />
      <div className="gc-inner">
        <div className="gc-left">
          <h2 className="gc-heading">
            Get yourself up-to-speed on all the things happening in fintech
          </h2>
          <button className="gc-cta">Insights</button>
        </div>

        <div className="gc-right">
          <ArticleCard featured />

          <div className="gc-row">
            <ArticleCard />
            <ArticleCard />
          </div>

          <div className="gc-read-all-wrapper">
            <a href="#" className="gc-read-all">
              <div className="gc-read-all-text">
                <span>Read All Insights</span>
                <ArrowIcon />
              </div>
              <div className="gc-read-all-line" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
