import './Footer.css'
import { ArrowIcon } from '../../assets/icons'

const locations = [
  {
    city: 'London',
    address: 'Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.',
  },
  {
    city: 'Dubai',
    address:
      'Linktia Infosystems Ltd – CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates',
  },
  {
    city: 'London',
    address:
      'Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India',
  },
]

const linkCols = [
  {
    heading: 'Solutions',
    items: [
      'Core Banking CB7',
      'Digital Banking N7',
      'Open Banking',
      'Loan Origination System',
      'Loan Management System',
      'Digital Transformation',
    ],
  },
  {
    heading: 'N7 Banking',
    items: ['About Us', 'Solutions', 'Contact', 'Company', 'Careers', 'Insights', 'Core Team', 'Brand Center'],
  },
  {
    heading: 'Our Socials',
    items: ['LinkedIn', 'X'],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <span className="footer-logo">N7</span>
        </div>

        <div className="footer-right">
          <div className="footer-locations">
            {locations.map((loc, i) => (
              <div key={i} className="footer-location">
                <h4 className="footer-location-city">{loc.city}</h4>
                <p className="footer-location-address">{loc.address}</p>
              </div>
            ))}
          </div>

          <div className="footer-links">
            {linkCols.map((col) => (
              <div key={col.heading} className="footer-col">
                <h4 className="footer-col-heading">{col.heading}</h4>
                <ul className="footer-col-list">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a href="#">
                        <span>{item}</span>
                        <ArrowIcon />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the
              Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
