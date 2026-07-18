import { useEffect } from 'react'
import { siteConfig } from '../config/site'
type Props = { title: string; description: string; path?: string }
export function Seo({ title, description, path = '' }: Props) {
  useEffect(() => {
    document.title = `${title} | ${siteConfig.productName}`
    const canonical = `${siteConfig.websiteUrl}${path}`
    const values: Record<string, string> = { description, 'og:title': title, 'og:description': description, 'og:url': canonical, 'twitter:title': title, 'twitter:description': description }
    Object.entries(values).forEach(([key, value]) => {
      const selector = key === 'description' ? 'meta[name="description"]' : key.startsWith('twitter:') ? `meta[name="${key}"]` : `meta[property="${key}"]`
      document.querySelector(selector)?.setAttribute('content', value)
    })
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonical)
  }, [title, description, path])
  return null
}
