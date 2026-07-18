import { Button } from '../components/Button'
import { Seo } from '../components/Seo'
export function NotFoundPage() { return <><Seo title="Page not found" description="Return to the Memoir homepage." /><div className="page-shell not-found"><p className="eyebrow">A page out of place</p><h1>We couldn’t find that page.</h1><p>The story may have moved, but Memoir is still here.</p><Button to="/">Return home</Button></div></> }
