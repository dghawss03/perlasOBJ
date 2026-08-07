import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export const CONSENT_VERSION = 1
export const CONSENT_STORAGE_KEY = 'perlas-consent'

export type OptionalConsentCategory = 'externalMedia' | 'statistics' | 'marketing'
export type ConsentSelection = Record<OptionalConsentCategory, boolean>
export type ConsentPreferences = ConsentSelection & {
  version: number
  necessary: true
  timestamp: string
}

type ConsentState = {
  consent: ConsentPreferences
  hasDecision: boolean
}

type ConsentContextValue = ConsentState & {
  settingsOpen: boolean
  acceptAll: () => void
  acceptNecessary: () => void
  acceptExternalMedia: () => void
  saveSelection: (selection: ConsentSelection) => void
  openSettings: () => void
  closeSettings: () => void
  hasConsent: (category: OptionalConsentCategory) => boolean
}

const defaultSelection: ConsentSelection = {
  externalMedia: false,
  statistics: false,
  marketing: false,
}

const emptyConsent = (): ConsentPreferences => ({
  version: CONSENT_VERSION,
  necessary: true,
  ...defaultSelection,
  timestamp: '',
})

function isStoredConsent(value: unknown): value is ConsentPreferences {
  if (!value || typeof value !== 'object') return false
  const candidate = value as Partial<ConsentPreferences>
  return candidate.version === CONSENT_VERSION
    && candidate.necessary === true
    && typeof candidate.externalMedia === 'boolean'
    && typeof candidate.statistics === 'boolean'
    && typeof candidate.marketing === 'boolean'
    && typeof candidate.timestamp === 'string'
}

function readStoredConsent(): ConsentState {
  if (typeof window === 'undefined') return { consent: emptyConsent(), hasDecision: false }
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!raw) return { consent: emptyConsent(), hasDecision: false }
    const parsed: unknown = JSON.parse(raw)
    if (isStoredConsent(parsed)) return { consent: parsed, hasDecision: true }
  } catch {
    // Eine blockierte oder beschädigte Speicherung darf die Website nicht stoppen.
  }
  return { consent: emptyConsent(), hasDecision: false }
}

const ConsentContext = createContext<ConsentContextValue | null>(null)

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ConsentState>(readStoredConsent)
  const [settingsOpen, setSettingsOpen] = useState(false)

  const saveSelection = useCallback((selection: ConsentSelection) => {
    const consent: ConsentPreferences = {
      version: CONSENT_VERSION,
      necessary: true,
      ...selection,
      timestamp: new Date().toISOString(),
    }
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent))
    } catch {
      // Die Auswahl bleibt für die laufende Sitzung trotzdem reaktiv erhalten.
    }
    setState({ consent, hasDecision: true })
    setSettingsOpen(false)
  }, [])

  const acceptAll = useCallback(() => saveSelection({
    externalMedia: true,
    statistics: true,
    marketing: true,
  }), [saveSelection])

  const acceptNecessary = useCallback(() => saveSelection(defaultSelection), [saveSelection])

  const acceptExternalMedia = useCallback(() => saveSelection({
    externalMedia: true,
    statistics: state.consent.statistics,
    marketing: state.consent.marketing,
  }), [saveSelection, state.consent.marketing, state.consent.statistics])

  useEffect(() => {
    const updateFromStorage = (event: StorageEvent) => {
      if (event.key === CONSENT_STORAGE_KEY) setState(readStoredConsent())
    }
    window.addEventListener('storage', updateFromStorage)
    return () => window.removeEventListener('storage', updateFromStorage)
  }, [])

  const value = useMemo<ConsentContextValue>(() => ({
    ...state,
    settingsOpen,
    acceptAll,
    acceptNecessary,
    acceptExternalMedia,
    saveSelection,
    openSettings: () => setSettingsOpen(true),
    closeSettings: () => setSettingsOpen(false),
    hasConsent: category => state.consent[category],
  }), [acceptAll, acceptExternalMedia, acceptNecessary, saveSelection, settingsOpen, state])

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
}

export function useConsent() {
  const context = useContext(ConsentContext)
  if (!context) throw new Error('useConsent muss innerhalb des ConsentProvider verwendet werden.')
  return context
}
