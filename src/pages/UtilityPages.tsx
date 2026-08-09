import { useState } from 'react'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { Partners } from '../components/Partners'
import { LocationSection } from '../components/LocationSection'

export function ReferencesPage(){return <><SEO title="Referenzen in Objektbetreuung & Facility Services" description="Erfahren Sie mehr über Partnerschaften und Einsatzfelder von Perlas in der professionellen Objektbetreuung und bei abgestimmten Facility Services."/><PageHero kicker="Referenzen" title="Vertrauen entsteht durch verlässliche Zusammenarbeit." text="Langfristige Partnerschaften entstehen durch klare Zuständigkeiten, nachvollziehbare Leistungen und persönliche Kommunikation." image="/images/projects/parkdeck-perlas-fahrzeug.png" imageAlt="Perlas Einsatzfahrzeug auf einem betreuten Parkdeck"/><Partners/></>}

const requestSteps=[
 {number:'01',title:'Anfrage',text:'Sie erreichen Perlas per Formular, Telefon oder E-Mail.'},
 {number:'02',title:'Vor-Ort-Besprechung',text:'Bei Bedarf werden Objekt, Flächen und Besonderheiten vor Ort besprochen.'},
 {number:'03',title:'Leistungen & Intervalle',text:'Aufgaben, Bereiche, Häufigkeiten und Anforderungen werden gemeinsam abgestimmt.'},
 {number:'04',title:'Angebot',text:'Auf Grundlage der abgestimmten Leistungen erstellt Perlas ein individuelles Angebot.'},
 {number:'05',title:'Start',text:'Nach Freigabe werden Termine, Ansprechpartner und organisatorische Abläufe festgelegt.'},
]

export function ContactPage(){
 const [noticeVisible,setNoticeVisible]=useState(false)
 return <><SEO title="Objektbetreuung Rhein-Main: Kontakt" description="Kontaktieren Sie Perlas in Sulzbach im Main-Taunus-Kreis für Objektbetreuung und Facility Services im Rhein-Main-Gebiet und Raum Frankfurt am Main."/>
 <PageHero kicker="Kontakt" title="Wie können wir Ihr Objekt unterstützen?" text="Von Sulzbach (Taunus) im Main-Taunus-Kreis betreuen wir Gewerbeimmobilien im Rhein-Main-Gebiet und im Raum Frankfurt am Main." image="/images/projects/gebaeude-aussen.png" imageAlt="Betreutes Gewerbeobjekt im Rhein-Main-Gebiet"/>
 <section className="contact-page section"><div><span className="eyebrow">Direkt erreichbar</span><h2>Wir freuen uns auf Ihre Anfrage.</h2><a href="tel:+491776867145"><Phone/>+49 177 68 67 145</a><a href="mailto:mail@perlas.de"><Mail/>mail@perlas.de</a><p>Telefonisch und per E-Mail erreichen Sie Perlas direkt. Das Formular wird derzeit noch nicht technisch übermittelt.</p></div><form onSubmit={event=>{event.preventDefault();setNoticeVisible(true)}}><label>Name<input name="name" autoComplete="name" required/></label><label>Unternehmen<input name="company" autoComplete="organization"/></label><label>E-Mail<input type="email" name="email" autoComplete="email" required/></label><label>Telefonnummer<input type="tel" name="phone" autoComplete="tel"/></label><label>Ihr Anliegen<textarea name="message" rows={5} required/></label><button className="button" type="submit">Absenden <ArrowRight/></button>{noticeVisible&&<div className="form-notice" role="status" aria-live="polite"><strong>Ihre Nachricht wurde noch nicht versendet.</strong><p>Die Online-Übermittlung ist derzeit nicht angebunden. Bitte kontaktieren Sie uns bis dahin <a href="tel:+491776867145">telefonisch</a> oder per <a href="mailto:mail@perlas.de">E-Mail</a>.</p></div>}</form></section>
 <section className="request-process section-surface" aria-labelledby="request-process-title"><div className="request-process-heading"><span className="eyebrow">Von der Anfrage bis zur Betreuung</span><h2 id="request-process-title">So läuft Ihre Anfrage ab.</h2></div><ol>{requestSteps.map(step=><li key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></section>
 <LocationSection showContactLinks={false}/>
 </>}

export function NotFoundPage(){return <section className="not-found"><span className="eyebrow">404</span><h1>Diese Seite wurde nicht gefunden.</h1><p>Vielleicht finden Sie über unsere Startseite den passenden Einstieg.</p><Link className="button" to="/">Zur Startseite <ArrowRight/></Link></section>}
