import { LegalDocument } from '../components/LegalDocument'
import { Seo } from '../components/Seo'
import { siteConfig } from '../config/site'

export function PrivacyPage() {
  return <><Seo title="Privacy Policy" description="Read how Memoir handles recordings, memoir content, AI processing, iCloud, photos, purchases, and deletion." path="/privacy" />
    <LegalDocument title="Privacy Policy for Memoir" intro="Effective Date: July 2026. This Privacy Policy explains what information Memoir handles, why it is needed, and the choices available to you.">

    <section><h2>1. Introduction</h2><p>Memoir is operated by {siteConfig.companyName}. Memoir helps you preserve your memories by recording stories, organizing them into written Echoes, attaching photographs, and creating a living memoir that can be exported as a printable book. This Privacy Policy explains what information Memoir handles, why it is needed, and the choices available to you when using the Memoir iOS application. Memoir is designed to preserve your own memories. Artificial Intelligence is used only to assist in organizing and refining the content you choose to create—it never replaces your personal stories.</p></section>

    <section><h2>2. Information You Provide</h2><p>Depending on the features you use, Memoir may handle dictated memoir text, saved Echoes, moods, Sparks, chapter titles and descriptions, tags, people and places mentioned in your stories, Narrator Mirror observations, and photographs you choose to attach. This information may be deeply personal. You decide what to record, edit, and save.</p></section>

    <section><h2>3. Audio and Speech Recognition</h2><p>Memoir requests microphone access only when you choose to dictate a memory. Audio is used to create a transcription and is not permanently retained by Memoir after transcription. Speech recognition may rely on services provided by Apple and iOS, which are governed by Apple's own Privacy Policy and Terms of Service.</p></section>

    <section><h2>4. AI Processing</h2><p>Memoir never sends your memoir content to an external AI service unless you have explicitly granted permission inside the app. When AI processing is enabled, Memoir currently uses OpenAI to help organize memories, improve readability while preserving your voice, generate chapter structure, and create Narrator Mirror observations. Depending on the feature you use, information sent may include your dictated or written memoir text, Echo drafts, Sparks, chapter information, selected mood or tone, and limited Narrator Mirror context. You may withdraw AI permission at any time from Settings. Doing so prevents future AI requests but does not remove memoir content already saved on your device. Processing performed by OpenAI is subject to OpenAI's applicable Privacy Policy and Terms of Service.</p></section>

    <section><h2>5. Local Storage, iCloud and CloudKit</h2><p>Memoir is designed as a local-first application. Your memoir is stored on your device and may synchronize through your personal iCloud account using Apple's private CloudKit infrastructure. No separate Memoir account is required. If iCloud synchronization is disabled, your memoir remains available locally on your device while cloud synchronization is paused.</p></section>

    <section><h2>6. Photos</h2><p>Memoir accesses only the photographs you explicitly choose to attach to an Echo. Your complete photo library is never imported into Memoir. Selected photos become part of your memoir and are stored locally and synchronized through your personal iCloud account when iCloud synchronization is enabled.</p></section>

    <section><h2>7. PDF Export and Sharing</h2><p>You may export your memoir as a PDF and choose where to save or share it. Once exported from Memoir, copies are managed by you and by the destination you select. Other applications, cloud services, or recipients may have their own privacy practices.</p></section>

    <section><h2>8. Purchases and Ink</h2><p>Ink is Memoir's usage-credit system. Purchases are securely processed by Apple through StoreKit. Memoir never receives your payment card information. Apple may retain purchase records to provide services such as purchase restoration and refund management according to Apple's policies.</p></section>

    <section><h2>9. Data Retention</h2><p>Your memoir remains available until you choose to delete it. Content stored in iCloud remains subject to your Apple account and synchronization settings. PDF exports and any copies you share remain wherever you choose to save or distribute them.</p></section>

    <section><h2>10. Data Deletion</h2><p>The app includes a <strong>Delete My Memoir</strong> feature that removes memoir content managed by Memoir, including Echoes, Chapters, Sparks, Narrator Mirror information, and app-managed photo attachments stored by the application. This does not remove PDF exports you previously created, copies shared with other people, or Apple purchase history. Disabling AI processing prevents future AI requests but does not delete memoir content already created.</p></section>

    <section><h2>11. Security</h2><p>Memoir uses reasonable administrative, technical, and organizational safeguards to help protect your information. No device, network, or storage system can be guaranteed completely secure. We recommend protecting your device, Apple ID, passcode, and any exported copies of your memoir.</p></section>

    <section><h2>12. Children</h2><p>Memoir is intended for users who meet the minimum age required to use the application independently under the laws of their country or region. This version of Memoir does not provide parental accounts or parental consent workflows.</p></section>

    <section><h2>13. International Processing</h2><p>When speech recognition or AI features are used, information may be processed in countries other than your own. Processing is performed only for the purpose of providing the features you request and is subject to the privacy practices of the service providers involved.</p></section>

    <section><h2>14. Changes to this Privacy Policy</h2><p>We may update this Privacy Policy from time to time to reflect improvements to Memoir or changes in applicable laws. The latest version will always be published on this page together with its effective date.</p></section>

    <section><h2>15. Contact</h2><p>If you have questions about this Privacy Policy or how Memoir handles your information, please contact us at <a href={`mailto:${siteConfig.privacyEmail}`}>{siteConfig.privacyEmail}</a>.</p></section>

    </LegalDocument>
}
