import { ArrowRight, Check } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { ServicePreview } from '../components/ServicePreview'
import { ContactBand } from '../components/ContactBand'
import { FAQ } from '../components/FAQ'
import { services } from '../data/services'
import { assetUrl } from '../utils/assets'

export function ServicesPage(){return <>
 <SEO title="Facility Services & Gebäudeservice Rhein-Main" description="Facility Services und professionelle Objektbetreuung im Rhein-Main-Gebiet: Perlas bündelt Gebäudeservices für Hausverwaltungen und Unternehmen."/>
 <PageHero kicker="Leistungen" title="Alles für ein professionell betreutes Objekt." text="Von Objektbetreuung und Gebäudereinigung bis zu Außenpflege und technischen Services: Wir bündeln Leistungen passend zu Ihrer Immobilie und Ihren Abläufen." image="/images/perlas-praxis-concept.jpg" imageAlt="Mitarbeitende bei der maschinellen Objektpflege in einer Tiefgarage"/>
 <section className="section services-overview">
  <div className="section-head"><div><span className="eyebrow">Gebäudeservice aus einer Hand</span><h2>Facility Services für Ihre Immobilie.</h2></div><p>Für Haus- und Immobilienverwaltungen sowie Unternehmen im Rhein-Main-Gebiet kombinieren wir einzelne Leistungen oder entwickeln ein abgestimmtes Betreuungspaket.</p></div>
  <ServicePreview items={services} compact/>
 </section>
 <section className="faq-section section" aria-labelledby="faq-title"><div className="faq-copy"><span className="eyebrow">Häufige Fragen</span><h2 id="faq-title">Was Auftraggeber wissen möchten.</h2><p>Antworten zu Zusammenarbeit, Leistungsumfang und individueller Objektbetreuung.</p></div><FAQ/></section>
 <ContactBand/>
 </>}

export function ServiceDetailPage(){
 const {slug}=useParams()
 const service=services.find(s=>s.slug===slug)
 if(!service)return <Navigate to="/leistungen" replace/>
 return <>
  <SEO title={service.metaTitle} description={service.metaDescription}/>
  <PageHero kicker={service.category} title={service.title} text={service.intro} image={service.image} imageAlt={service.imageAlt}/>
  <section className="detail-intro section"><div><span className="eyebrow">Leistung im Detail</span><h2>{service.detailHeading}</h2></div><div><p>{service.summary}</p>{service.overview?.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div></section>
  <section className="detail-columns section-surface"><div><h2>Was wir übernehmen</h2>{service.details.map(d=><p key={d}><Check/>{d}</p>)}</div><div><h2>Typische Einsatzbereiche</h2>{service.areas.map(a=><p key={a}><Check/>{a}</p>)}</div><div><h2>So arbeiten wir</h2><p><b>01</b>Objekt und Anforderungen aufnehmen</p><p><b>02</b>Leistungen und Intervalle planen</p><p><b>03</b>Qualität regelmäßig dokumentieren</p></div></section>
  <section className="image-text section"><img src={assetUrl(service.benefitImage??'images/perlas-praxis-concept.jpg')} alt={service.benefitImageAlt??'Mitarbeitende von Perlas bei der maschinellen Objektpflege'} loading="lazy"/><div><span className="eyebrow">Ihre Vorteile</span><h2>{service.benefitTitle}</h2><p>{service.benefit}</p><Link className="button" to="/kontakt">Angebot anfragen <ArrowRight/></Link></div></section>
  {(service.relatedServices?.length||service.relatedArticles?.length)?<section className="service-links section" aria-labelledby="service-links-title"><div><span className="eyebrow">Passende Themen</span><h2 id="service-links-title">Leistungen und Wissen sinnvoll verbinden.</h2></div><div className="service-links-groups">{service.relatedServices?.length?<nav aria-label="Ergänzende Leistungen"><h3>Ergänzende Leistungen</h3>{service.relatedServices.map(link=><Link key={link.href} to={link.href}>{link.label}<ArrowRight/></Link>)}</nav>:null}{service.relatedArticles?.length?<nav aria-label="Passende Ratgeber"><h3>Passende Ratgeber</h3>{service.relatedArticles.map(link=><Link key={link.href} to={link.href}>{link.label}<ArrowRight/></Link>)}</nav>:null}</div></section>:null}
  <ContactBand/>
 </>
}
