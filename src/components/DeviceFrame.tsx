import type { ReactNode } from 'react'
type Props = { src: string; alt: string; width: number; height: number; caption?: ReactNode; className?: string; priority?: boolean }
export function DeviceFrame({ src, alt, width, height, caption, className = '', priority }: Props) {
  return <figure className={`device-frame ${className}`}>
    <div className="device-frame__shell">
      <span className="device-frame__camera" aria-hidden="true" />
      <img src={src} alt={alt} width={width} height={height} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} />
    </div>
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
}
