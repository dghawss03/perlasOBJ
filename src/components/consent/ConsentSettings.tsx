import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { useConsent, type ConsentSelection } from '../../context/ConsentContext'

type ToggleProps = {
  id: string
  title: string
  description: string
  checked: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
}

function ConsentToggle({ id, title, description, checked, disabled = false, onChange }: ToggleProps) {
  return <div className={`consent-category ${disabled ? 'is-required' : ''}`}>
    <div><h3>{title}</h3><p id={`${id}-description`}>{description}</p>{disabled && <small>Immer aktiv</small>}</div>
    <button id={id} className="consent-toggle" type="button" role="switch" aria-checked={checked} aria-describedby={`${id}-description`} disabled={disabled} onClick={() => onChange?.(!checked)}>
      <span className="sr-only">{title} {disabled ? 'ist immer aktiv' : checked ? 'deaktivieren' : 'aktivieren'}</span>
    </button>
  </div>
}

export function ConsentSettings() {
  const { consent, saveSelection, acceptAll, acceptNecessary, closeSettings } = useConsent()
  const [draft, setDraft] = useState<ConsentSelection>({
    externalMedia: consent.externalMedia,
    statistics: consent.statistics,
    marketing: consent.marketing,
  })
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    document.body.classList.add('consent-modal-open')
    closeButtonRef.current?.focus()
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeSettings()
        return
      }
      if (event.key !== 'Tab' || !dialogRef.current) return
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button:not([disabled]), input:not([disabled]), a[href]'))
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.classList.remove('consent-modal-open')
      document.removeEventListener('keydown', handleKeyDown)
      previousFocus?.focus()
    }
  }, [closeSettings])

  const setCategory = (category: keyof ConsentSelection, checked: boolean) => setDraft(current => ({ ...current, [category]: checked }))

  return <div className="consent-backdrop" onMouseDown={event => { if (event.target === event.currentTarget) closeSettings() }}>
    <div ref={dialogRef} className="consent-dialog" role="dialog" aria-modal="true" aria-labelledby="consent-settings-title" aria-describedby="consent-settings-description">
      <header className="consent-dialog-header"><div><span className="eyebrow">Datenschutz</span><h2 id="consent-settings-title">Einstellungen verwalten</h2><p id="consent-settings-description">Sie entscheiden, welche optionalen Kategorien verwendet werden dürfen. Nicht vorhandene Statistik- oder Marketingdienste werden durch Ihre Auswahl nicht automatisch installiert.</p></div><button ref={closeButtonRef} className="consent-close" type="button" onClick={closeSettings} aria-label="Datenschutz-Einstellungen schließen"><X/></button></header>
      <div className="consent-categories">
        <ConsentToggle id="consent-necessary" title="Notwendig" description="Erforderlich für den Betrieb der Website und die Speicherung Ihrer Datenschutz-Auswahl." checked disabled/>
        <ConsentToggle id="consent-external-media" title="Externe Medien" description="Erlaubt das Laden eingebetteter Inhalte von Drittanbietern, aktuell insbesondere des YouTube-Unternehmensvideos." checked={draft.externalMedia} onChange={checked => setCategory('externalMedia', checked)}/>
        <ConsentToggle id="consent-statistics" title="Statistik" description="Vorgesehen für eine spätere, einwilligungsbasierte Reichweitenmessung. Aktuell ist kein Statistikdienst eingebunden." checked={draft.statistics} onChange={checked => setCategory('statistics', checked)}/>
        <ConsentToggle id="consent-marketing" title="Marketing" description="Vorgesehen für mögliche spätere Marketingdienste. Aktuell ist kein Marketingdienst eingebunden." checked={draft.marketing} onChange={checked => setCategory('marketing', checked)}/>
      </div>
      <div className="consent-dialog-actions">
        <button className="consent-action consent-action-primary" type="button" onClick={() => saveSelection(draft)}>Auswahl speichern</button>
        <button className="consent-action consent-action-necessary" type="button" onClick={acceptAll}>Alle akzeptieren</button>
        <button className="consent-action consent-action-settings" type="button" onClick={acceptNecessary}>Nur notwendige</button>
      </div>
    </div>
  </div>
}
