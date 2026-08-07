import { Link } from 'react-router-dom'
import { useConsent } from '../../context/ConsentContext'

export function ConsentBanner() {
  const { acceptAll, acceptNecessary, openSettings } = useConsent()
  return <div className="consent-banner-shell">
    <aside className="consent-banner" role="region" aria-labelledby="consent-banner-title">
      <div className="consent-banner-copy">
        <span className="eyebrow">Ihre Auswahl</span>
        <strong id="consent-banner-title">Datenschutz-Einstellungen</strong>
        <p>Wir verwenden notwendige Technologien für den Betrieb dieser Website. Mit Ihrer Einwilligung können außerdem externe Medien und weitere optionale Dienste geladen werden. Ihre Auswahl können Sie jederzeit ändern.</p>
        <Link to="/datenschutz">Datenschutz</Link>
      </div>
      <div className="consent-banner-actions" aria-label="Datenschutz-Auswahl">
        <button className="consent-action consent-action-primary" type="button" onClick={acceptAll}>Alle akzeptieren</button>
        <button className="consent-action consent-action-necessary" type="button" onClick={acceptNecessary}>Nur notwendige</button>
        <button className="consent-action consent-action-settings" type="button" onClick={openSettings}>Einstellungen</button>
      </div>
    </aside>
  </div>
}
