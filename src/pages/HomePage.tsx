import { Button } from '../components/Button'
import { DeviceFrame } from '../components/DeviceFrame'
import { SectionHeading } from '../components/SectionHeading'
import { Seo } from '../components/Seo'
import { siteConfig } from '../config/site'
import welcomeImage from '../assets/screenshots/memoir-welcome-ipad.webp'
import homeImage from '../assets/screenshots/memoir-home-ipad.webp'
import indexImage from '../assets/screenshots/memoir-book-index-ipad.webp'
import readingImage from '../assets/screenshots/memoir-reading-ipad.webp'

const features = [
  ['01', 'Record naturally', 'Speak as you remember. There is no blank page and no need to write perfectly.'],
  ['02', 'Your voice, gently refined', 'Memoir organizes and polishes your words without replacing the way you naturally tell stories.'],
  ['03', 'Build a living memoir', 'Echoes become chapters, and chapters become a book that evolves as your life does.'],
  ['04', 'Add photographs', 'Place meaningful images beside the memories where they belong.'],
  ['05', 'Read and print your story', 'Enjoy your memoir on iPhone and iPad, then export a beautifully formatted PDF.'],
  ['06', 'Private by design', 'Your memoir is local-first and may synchronize through your personal iCloud account.'],
]

export function HomePage() {
  return <>
    <Seo title="Your life. Beautifully remembered." description="Speak your memories naturally and turn them into a living memoir with Memoir." />
    <section className="hero-section">
      <div className="hero-glow" aria-hidden="true" />
      <div className="page-shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span aria-hidden="true">✦</span> A living book of your life</p>
          <h1>Your life.<br /><em>Beautifully remembered.</em></h1>
          <p className="hero-lead">Speak the moments that shaped you. Memoir gently turns your memories into beautifully written Echoes and a living book that grows with your life.</p>
          <div className="button-row">
            <Button href={siteConfig.appStoreUrl} disabled={!siteConfig.appStoreUrl}>Coming soon to the App Store</Button>
            <Button to="/privacy" variant="secondary">Read our Privacy Policy</Button>
          </div>
          <p className="hero-note">Designed for iPhone and iPad · No separate Memoir account required</p>
        </div>
        <div className="hero-visual">
          <DeviceFrame src={homeImage} alt="Memoir on iPad showing options to record an Echo, recent stories, a living memoir, and its table of contents" width={1600} height={1112} priority />
          <div className="hero-quote"><span>“</span><p>We do not remember days,<br />we remember moments.</p></div>
        </div>
      </div>
    </section>

    <section className="editorial-intro page-shell section-space">
      <p className="ornament" aria-hidden="true">◆</p>
      <p>Stories change as we do. A memory told today may mean something different years from now. Memoir helps preserve the voice, context, and feeling of the moments you do not want to lose.</p>
    </section>

    <section className="journey section-space">
      <div className="page-shell">
        <SectionHeading eyebrow="From memory to memoir" title="Begin with your voice. Let the story unfold." body="Memoir follows the natural rhythm of remembering—one moment, one photograph, one chapter at a time." />
        <div className="feature-journey">
          {features.map(([number, title, body]) => <article className="feature-story" key={number}>
            <p className="feature-number">{number}</p><div><h3>{title}</h3><p>{body}</p></div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="mirror-section section-space">
      <div className="page-shell split-layout">
        <div>
          <SectionHeading eyebrow="Narrator Mirror" title="Notice the voice that is uniquely yours." />
          <p>Over time, Memoir notices gentle patterns in the way you tell stories—your tone, recurring themes, humor, and the moments that bring your memories to life.</p>
          <p className="callout-note">The Narrator Mirror is a reflective writing aid. It is not a diagnosis, a personality score, or a public profile.</p>
        </div>
        <div className="mirror-card"><p className="mirror-label">A gentle observation</p><blockquote>“You naturally bring the emotional purpose of a moment forward, making your stories feel warm and deeply human.”</blockquote><div className="mirror-tags"><span>Reflective</span><span>Conversational</span><span>Family</span></div></div>
      </div>
    </section>

    <section className="book-section section-space">
      <div className="page-shell">
        <SectionHeading eyebrow="The living book" title="What begins as a spoken memory becomes something your family can keep." body="Arrange Echoes into chapters, read them as a beautifully composed book, and create a printable PDF when the time feels right." align="center" />
        <div className="book-spread">
          <DeviceFrame src={indexImage} alt="The Living Book index in Memoir, with five chapters and controls for selecting Echoes and exporting a PDF" width={1600} height={1112} caption="Arrange your chapters and choose what belongs in the book." />
          <DeviceFrame src={readingImage} alt="An open memoir page showing a chapter titled My Dad and the Sinclair Spectrum with a photograph and story text" width={1600} height={1112} caption="Read your memories in the calm rhythm of a printed page." />
        </div>
      </div>
    </section>

    <section className="privacy-section section-space">
      <div className="page-shell privacy-panel">
        <div><p className="eyebrow">Privacy, quietly considered</p><h2>Your memories deserve thoughtful care.</h2></div>
        <div className="privacy-copy"><p>No separate Memoir account is required. Your memoir is stored locally and may synchronize through your private iCloud account.</p><ul>
          <li>Audio is used for transcription and is not permanently retained by Memoir.</li>
          <li>Memoir text is sent to an external AI provider only after you give permission.</li>
          <li>You may withdraw permission for future AI processing and delete your memoir in the app.</li>
          <li>PDFs and other exports you save or share remain under your control.</li>
        </ul><Button to="/privacy" variant="quiet">Read the full Privacy Policy →</Button></div>
      </div>
    </section>

    <section className="gallery-section section-space">
      <div className="page-shell">
        <SectionHeading eyebrow="Inside Memoir" title="A journal, a library, and a book—all in one quiet place." />
        <div className="gallery-grid">
          <DeviceFrame src={welcomeImage} alt="Memoir welcome screen with the words Your stories today. Their legacy forever." width={1600} height={1112} caption="A calm beginning." />
          <DeviceFrame src={homeImage} alt="Memoir home screen presented as an open book with Echoes, chapters, and Narrator Mirror insights" width={1600} height={1112} caption="Your memories, gathered together." />
        </div>
      </div>
    </section>

    <section className="closing-section section-space"><div className="page-shell closing-card"><p className="ornament" aria-hidden="true">✦</p><h2>The stories you remember today may become the stories someone treasures tomorrow.</h2><div className="button-row"><Button href={siteConfig.appStoreUrl} disabled={!siteConfig.appStoreUrl}>Coming soon to the App Store</Button><Button to="/privacy" variant="secondary">Learn how Memoir protects your privacy</Button></div></div></section>
  </>
}
