import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = { children: ReactNode; to?: string; href?: string | null; variant?: 'primary' | 'secondary' | 'quiet'; disabled?: boolean }

export function Button({ children, to, href, variant = 'primary', disabled }: Props) {
  const className = `button button--${variant}${disabled ? ' button--disabled' : ''}`
  if (to) return <Link className={className} to={to}>{children}</Link>
  if (href && !disabled) return <a className={className} href={href}>{children}</a>
  return <span className={className} aria-disabled="true">{children}</span>
}
