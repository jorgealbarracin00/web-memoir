import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { siteConfig } from '../config/site'

export function ContactPage() {
  return <><Seo title="Contact" description={`Contact ${siteConfig.companyName} for Memoir support or privacy questions.`} path="/contact" />
    <div className="page-shell contact-page"><header className="page-hero"><p className="eyebrow">A thoughtful reply, from a real person</p><h1>Contact Memoir</h1><p>Whether you need help with the app or have a question about your information, choose the address that best fits.</p></header>
      <section className="contact-grid" aria-label="Contact options">
        <article><p className="contact-icon" aria-hidden="true">✦</p><h2>App support</h2><p>Questions about Echoes, iCloud, Ink, purchases, or PDF export.</p><a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a><Link to="/support">Visit Support →</Link></article>
        <article><p className="contact-icon" aria-hidden="true">◇</p><h2>Privacy</h2><p>Questions about data handling, consent, or deleting your memoir.</p><a href={`mailto:${siteConfig.privacyEmail}`}>{siteConfig.privacyEmail}</a><Link to="/privacy">Read our Privacy Policy →</Link></article>
      </section>
      <section className="company-note"><p className="eyebrow">About the maker</p><h2>{siteConfig.companyName}</h2><p>{siteConfig.companyName} creates Memoir: a quiet, personal place to preserve the stories that make a life.</p></section>
    </div></>
}
