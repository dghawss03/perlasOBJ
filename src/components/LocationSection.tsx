import { ArrowUpRight, Globe, MapPin, Phone } from 'lucide-react'

const mapsUrl=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Perla's Objektbetreuung GmbH & Co. KG, Hauptstraße 1, 65843 Sulzbach (Taunus)")}`

export function LocationSection(){return <section className="location-section section" aria-labelledby="location-title">
 <a className="location-map" href={mapsUrl} target="_blank" rel="noreferrer" aria-label="Standort von Perlas in Google Maps öffnen">
  <span className="location-map-grid" aria-hidden="true"/>
  <span className="location-pin" aria-hidden="true"><MapPin/></span>
  <span className="location-map-label"><small>Standort</small><strong>Sulzbach (Taunus)</strong></span>
  <span className="location-map-action">Route öffnen <ArrowUpRight/></span>
 </a>
 <div className="location-copy">
  <span className="eyebrow">Unser Standort</span>
  <h2 id="location-title">Direkt im Rhein-Main-Gebiet.</h2>
  <p>Von Sulzbach (Taunus) aus betreuen wir Gewerbeimmobilien, Wohnanlagen und Verwaltungsobjekte in der Region.</p>
  <address><strong>Perla&apos;s Objektbetreuung GmbH &amp; Co. KG</strong><span>Hauptstraße 1</span><span>65843 Sulzbach (Taunus)</span></address>
  <div className="location-links"><a href="tel:+491776867145"><Phone/>0177 6867145</a><a href="https://www.perlas.de/" target="_blank" rel="noreferrer"><Globe/>www.perlas.de</a></div>
  <a className="button" href={mapsUrl} target="_blank" rel="noreferrer">In Google Maps öffnen <ArrowUpRight/></a>
 </div>
 </section>}
