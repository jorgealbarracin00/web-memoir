import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { siteConfig } from '../config/site'
import { faqs } from '../data/faqs'

export function SupportPage() {
  return <><Seo title="Support" description="Helpful answers about creating Echoes, audio, AI, iCloud, Ink, PDF export, purchases, and deleting your memoir." path="/support" />
    <div className="page-shell support-page">
      <header className="page-hero"><p className="eyebrow">Here when you need us</p><h1>Memoir Support</h1><p>Find a quick answer below, or write to us and we’ll help you care for your stories.</p><a className="email-card" href={`mailto:${siteConfig.supportEmail}`}><span>Support email</span><strong>{siteConfig.supportEmail}</strong></a>{siteConfig.supportResponseTime && <p>Typical response time: {siteConfig.supportResponseTime}</p>}</header>
      <section className="faq-section" aria-labelledby="faq-heading"><div className="section-heading"><p className="eyebrow">Questions, answered</p><h2 id="faq-heading">Frequently asked questions</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
      <aside className="support-links"><h2>Policies and privacy</h2><p>Learn how Memoir handles your information and the terms that apply to the app.</p><div><Link to="/privacy">Privacy Policy →</Link><Link to="/terms">Terms of Service →</Link></div></aside>
    </div></>
}
