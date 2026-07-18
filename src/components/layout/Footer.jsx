import SocialLinks from '../common/SocialLinks.jsx'
import './Footer.css'

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/maxi.xlri/' },
  { label: 'LinkedIn', href: 'https://in.linkedin.com/company/marketing-association-of-xlri-maxi' },
  { label: 'Facebook', href: 'https://www.facebook.com/maxi.at.xlri/' },
  { label: 'Website', href: 'https://maxi-xlri.in/' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={`${import.meta.env.BASE_URL}images/branding/maxi-logo.svg`} alt="MAXI, XLRI Jamshedpur" />
          <img src={`${import.meta.env.BASE_URL}images/branding/xlri-logo.svg`} alt="XLRI Jamshedpur" />
          <p>
            MAXI is the Marketing Association of XLRI, Jamshedpur — Section Wars is its flagship
            inter-section festival.
          </p>
        </div>

        <div className="footer__links">
          <SocialLinks links={socialLinks} />
        </div>

        <p className="footer__copyright">© {new Date().getFullYear()} MAXI, XLRI Jamshedpur</p>
      </div>
    </footer>
  )
}

export default Footer
