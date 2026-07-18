type Props = { eyebrow?: string; title: string; body?: string; align?: 'left' | 'center' }
export function SectionHeading({ eyebrow, title, body, align = 'left' }: Props) {
  return <header className={`section-heading section-heading--${align}`}>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2>{title}</h2>
    {body && <p>{body}</p>}
  </header>
}
