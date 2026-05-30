import './SolutionsGrid.css'
import { ArrowIcon, SpiralIcon, CrossIcon, CircleIcon, AsteriskIcon, StarIcon } from '../../assets/icons'

const solutions = [
  { title: 'Core Banking CB7', desc: 'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.', Icon: SpiralIcon },
  { title: 'Digital Banking N7', desc: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.', Icon: CrossIcon },
  { title: 'Open Banking', desc: 'Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.', Icon: CircleIcon },
  { title: 'Loan Origination System', desc: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.', Icon: AsteriskIcon, tag: 'NBFC' },
  { title: 'Loan Management System', desc: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.', Icon: StarIcon, tag: 'NBFC' }
]

export default function SolutionsGrid() {
  return (
    <section className="solutions">
      <div className="solutions-inner">
        <div className="solutions-left">
          <h2 className="solutions-heading">All of our solutions are tailor-made to your needs</h2>
          <button className="solutions-cta">Request Demo</button>
        </div>
        <div className="solutions-glow" />
        <div className="solutions-grid">
          {solutions.map(({ title, desc, Icon, tag }) => (
            <div key={title} className="solutions-card">
              <div className="solutions-card-top">
                <div className="solutions-card-header">
                  <Icon />
                  {tag && <span className="solutions-card-tag">{tag}</span>}
                </div>
                <h3 className="solutions-card-title">{title}</h3>
              </div>
              <p className="solutions-card-desc">{desc}</p>
              <a href="#" className="solutions-card-link">
                <span className="solutions-card-link-text">Learn More <ArrowIcon /></span>
                <div className="solutions-card-link-line" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
