import heroImage from '../../assets/hero-image.png'
import './HeroSection.css'
import TrustedBy from '../TrustedBy/TrustedBy'

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-glow" />

      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-text">
            <h1 className="hero-title">The new foundation of modern banking</h1>
            <p className="hero-subtitle">We drive innovation and growth, provide seamless customer experience and operational excellence</p>
          </div>
          <div className="hero-buttons">
            <button className="hero-btn-primary">Request Demo</button>
            <button className="hero-btn-secondary">Contact Us</button>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImage} alt="Banking dashboard" className="hero-image" />
        </div>
      </div>
      <TrustedBy/>
    </section>
  )
}