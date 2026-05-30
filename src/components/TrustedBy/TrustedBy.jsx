import './TrustedBy.css'
import { SHELLS, SmartFinder, Zoomerr, ArtVenue, Kontrastr, WAVESMARATHON } from '../../assets/logos'


const logos = [
  { name: 'SHELLS', icon: <SHELLS /> },
  { name: 'SmartFinder', icon: <SmartFinder /> },
  { name: 'Zoomerr', icon: <Zoomerr /> },
  { name: 'ArtVenue', icon: <ArtVenue /> },
  { name: 'kontrastr', icon: <Kontrastr /> },
  { name: 'WAVESMARATHON', icon: <WAVESMARATHON /> }
]

export default function TrustedBy() {
  return (
    <section className="trusted-by">
      <p className="trusted-by-label">Trusted By:</p>
      <div className="trusted-by-logos">
        {logos.map(({ name, icon }) => (
          <div key={name} className="trusted-by-logo">
            <div className="trusted-by-icon">{icon}</div>
            <span className="trusted-by-name">{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
