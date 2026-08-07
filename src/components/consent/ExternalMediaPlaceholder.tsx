import { Play } from 'lucide-react'

type ExternalMediaPlaceholderProps = {
  image: string
  alt: string
  promptVisible: boolean
  onPlay: () => void
  onAccept: () => void
  onSettings: () => void
}

export function ExternalMediaPlaceholder({ image, alt, promptVisible, onPlay, onAccept, onSettings }: ExternalMediaPlaceholderProps) {
  return <div className="external-media-placeholder">
    <button type="button" className="company-video-poster" onClick={onPlay} aria-label="Perlas Unternehmensvideo abspielen" tabIndex={promptVisible ? -1 : 0}><img src={image} alt={alt} loading="lazy"/><span><Play fill="currentColor"/></span></button>
    {promptVisible && <div className="external-media-consent" role="status"><strong>Externe Medien sind deaktiviert.</strong><p>Für die Wiedergabe dieses Videos ist Ihre Zustimmung zu externen Medien erforderlich.</p><div><button className="consent-action consent-action-primary" type="button" onClick={onAccept}>Externe Medien akzeptieren und Video laden</button><button className="consent-action consent-action-settings" type="button" onClick={onSettings}>Einstellungen öffnen</button></div></div>}
  </div>
}
