import { ArrowUpRight, Globe, MapPinned, Phone } from 'lucide-react'
import { useConsent } from '../context/ConsentContext'

const location="Perla's Objektbetreuung GmbH & Co. KG, Hauptstraße 1, 65843 Sulzbach (Taunus)"
const mapsUrl=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`
const mapEmbedUrl=`https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`

export function LocationSection({showContactLinks=true}:{showContactLinks?:boolean}){const {consent,acceptExternalMedia,openSettings}=useConsent();return <section className="location-section section" aria-labelledby="location-title">
 <div className="location-map">
  {consent.externalMedia?<iframe src={mapEmbedUrl} title="Google Maps: Standort von Perlas in Sulzbach (Taunus)" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>:<div className="location-map-consent"><MapPinned/><strong>Google Maps Karte</strong><p>Die interaktive Karte wird erst nach Zustimmung zu externen Medien geladen.</p><div><button className="consent-action consent-action-primary" type="button" onClick={acceptExternalMedia}>Karte laden</button><button className="consent-action consent-action-settings" type="button" onClick={openSettings}>Einstellungen</button></div></div>}
  <a className="location-map-action" href={mapsUrl} target="_blank" rel="noreferrer">Route öffnen <ArrowUpRight/></a>
 </div>
 <div className="location-copy">
  <span className="eyebrow">Unser Standort</span>
  <h2 id="location-title">Direkt im Rhein-Main-Gebiet.</h2>
  <p>Von Sulzbach (Taunus) aus betreuen wir Gewerbeimmobilien, Wohnanlagen und Verwaltungsobjekte in der Region.</p>
  <address><strong>Perla&apos;s Objektbetreuung GmbH &amp; Co. KG</strong><span>Hauptstraße 1</span><span>65843 Sulzbach (Taunus)</span></address>
  {showContactLinks&&<div className="location-links"><a href="tel:+491776867145"><Phone/>0177 6867145</a><a href="https://www.perlas.de/" target="_blank" rel="noreferrer"><Globe/>www.perlas.de</a></div>}
  <a className="button" href={mapsUrl} target="_blank" rel="noreferrer">In Google Maps öffnen <ArrowUpRight/></a>
 </div>
 </section>}
