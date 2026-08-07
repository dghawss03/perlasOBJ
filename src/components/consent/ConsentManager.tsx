import { useConsent } from '../../context/ConsentContext'
import { ConsentBanner } from './ConsentBanner'
import { ConsentSettings } from './ConsentSettings'

export function ConsentManager() {
  const { hasDecision, settingsOpen } = useConsent()
  return <>{!hasDecision && !settingsOpen && <ConsentBanner/>}{settingsOpen && <ConsentSettings/>}</>
}
