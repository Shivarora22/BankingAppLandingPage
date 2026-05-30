import './GetConnected.css'

function BrandIcon() {
  return (
    <svg width="97" height="97" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.3779 25.5645H19.3789C21.955 25.561 24.5573 26.5556 26.5225 28.5225V28.5234L32.2363 34.2373L28.4238 38.0488L22.71 32.335L22.5322 32.167C21.6317 31.3535 20.5172 30.9579 19.3799 30.9541H19.377C18.2377 30.9578 17.124 31.3534 16.2236 32.167L16.0469 32.335L10.332 38.0488L6.51953 34.2373L12.2344 28.5234V28.5225C14.1995 26.5558 16.8037 25.561 19.3779 25.5645ZM10.2334 12.2363C12.2001 14.2013 13.1957 16.8047 13.1924 19.3789V19.3809C13.1955 21.7942 12.3209 24.232 10.5908 26.1465L10.2334 26.5225L4.51953 32.2363L0.707031 28.4238L6.42188 22.709C7.34692 21.7799 7.79678 20.5929 7.80078 19.3799V19.377C7.79678 18.1639 7.34701 16.976 6.42188 16.0469H6.4209L0.707031 10.333L4.51855 6.52148L10.2334 12.2363ZM38.0508 10.3311L32.3369 16.0469C31.4113 16.9745 30.962 18.1623 30.958 19.377V19.3799C30.962 20.5928 31.411 21.7799 32.3359 22.709L38.0508 28.4238L34.2412 32.2344L28.5264 26.5205L28.1689 26.1445C26.4392 24.2314 25.5642 21.7923 25.5674 19.3789V19.3779C25.564 16.8036 26.5596 14.1995 28.5264 12.2344L34.2402 6.52051L38.0508 10.3311ZM32.2363 4.51855L26.5225 10.2334C24.5573 12.2003 21.955 13.1958 19.3789 13.1924H19.3779C16.9645 13.1956 14.525 12.3207 12.6104 10.5908L12.2344 10.2334L6.51953 4.51855L10.3311 0.707031L16.0449 6.4209V6.42188C16.9737 7.34663 18.1614 7.79776 19.375 7.80176H19.3779C20.5911 7.79776 21.7788 7.34905 22.708 6.42188V6.4209L28.4229 0.705078L32.2363 4.51855Z" fill="#00B4FD"/>
    </svg>
  )
}

function ArticleCard({ featured = false }) {
  return (
    <div className={`gc-card${featured ? ' gc-card--featured' : ''}`}>
      {featured && (
        <div className="gc-card-image">
          <div className="gc-icons-grid">
            <BrandIcon />
            <BrandIcon />
            <BrandIcon />
            <BrandIcon />
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
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                  <path d="M0.5 6H13M7.5 1L13 6L7.5 11" stroke="#00B4FD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="gc-read-all-line" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
