import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { siteConfig } from '../config/site'

const links = [['/', 'Home'], ['/privacy', 'Privacy'], ['/support', 'Support'], ['/contact', 'Contact']]

export function SiteLayout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="wordmark" to="/" aria-label="Memoir home"><span>Memoir</span><small>Your life, remembered</small></Link>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(v => !v)}>
          <span className="sr-only">{open ? 'Close' : 'Open'} menu</span><span aria-hidden="true">{open ? '×' : '☰'}</span>
        </button>
        <nav id="site-navigation" className={`site-nav${open ? ' is-open' : ''}`} aria-label="Primary navigation">
          {links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}
          {siteConfig.appStoreUrl && <a className="nav-cta" href={siteConfig.appStoreUrl}>View on the App Store</a>}
        </nav>
      </div>
    </header>
    <main id="main-content"><Outlet /></main>
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div><Link className="footer-wordmark" to="/">Memoir</Link><p>Your life. Beautifully remembered.</p><p className="footer-company">A product of {siteConfig.companyName}</p></div>
        <nav aria-label="Footer navigation">
          <Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><Link to="/support">Support</Link><Link to="/contact">Contact</Link>
        </nav>
      </div>
      <p className="copyright">© {siteConfig.copyrightYear} {siteConfig.companyName}. All rights reserved.</p>
    </footer>
  </>
}
