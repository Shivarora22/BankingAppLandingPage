import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import SolutionsGrid from './components/SolutionsGrid/SolutionsGrid'
import CTABanner from './components/CTABanner/CTABanner'
import DigitalBanking from './components/DigitalBanking/DigitalBanking'
import MobileBanking from './components/MobileBanking/MobileBanking'
import GetConnected from './components/GetConnected/GetConnected'
import CaseStudies from './components/CaseStudies/CaseStudies'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />      
      <SolutionsGrid />
      <DigitalBanking />
      <MobileBanking />
      <GetConnected />
      <CaseStudies />
      <CTABanner
        heading="Take the full advantage of going paper-less now."
        desc="N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations"
        innerStyle={{ background: 'transparent', borderRadius: 0, margin: '0 auto' }}
        style={{ backgroundColor: '#000D12', padding: '80px 0' }}
      />
      <Footer />
    </>
  )
}
