import type { ReactNode } from 'react'
import { siteConfig } from '../config/site'
type Props = { title: string; intro: string; children: ReactNode }
export function LegalDocument({ title, intro, children }: Props) {
  return <article className="legal-page page-shell">
    <header className="legal-hero"><p className="eyebrow">Memoir · {siteConfig.companyName}</p><h1>{title}</h1><p className="legal-intro">{intro}</p><p className="effective-date">Effective date: {siteConfig.effectiveDate}</p></header>
    <div className="legal-document">{children}</div>
  </article>
}
