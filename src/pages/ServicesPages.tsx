import { ArrowRight, Check } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { ServicePreview } from '../components/ServicePreview'
import { ContactBand } from '../components/ContactBand'
import { FAQ } from '../components/FAQ'
import { services } from '../data/services'
import { serviceDetailContent } from '../data/serviceDetails'
import { assetUrl } from '../utils/assets'

const serviceHeroPlaceholders:Partial<Record<string,string>>={
 gebaeudereinigung:'Passendes Bild Gebäudereinigung hinzufügen',
 aussenanlagenpflege:'Passendes Bild Außenreinigung hinzufügen',
 winterdienst:'Passendes Bild Winterdienst hinzufügen',
}

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
 const detail=serviceDetailContent[service.slug]
 return <>
  <SEO title={service.metaTitle} description={service.metaDescription}/>
  <PageHero kicker={service.category} title={service.title} text={service.intro} image={service.image} imageAlt={service.imageAlt} placeholderLabel={serviceHeroPlaceholders[service.slug]}/>

  <section className="service-detail-intro section" aria-labelledby="service-detail-title">
   <div className="service-detail-copy"><span className="eyebrow">Leistung im Detail</span><h2 id="service-detail-title">{service.detailHeading}</h2><p className="service-detail-lead">{service.summary}</p>{service.overview?.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div>
   <figure className="service-detail-image"><img src={assetUrl(detail.detailImage)} alt={detail.detailImageAlt} loading="lazy"/></figure>
  </section>

  <section className="service-scope section-surface" aria-labelledby="service-scope-title">
   <div className="service-section-heading"><span className="eyebrow">Leistungen im Detail</span><h2 id="service-scope-title">Was wir konkret übernehmen.</h2><p>Der konkrete Umfang wird passend zu Objekt, Nutzung und vereinbarten Zuständigkeiten abgestimmt.</p></div>
   <div className="service-scope-grid">{detail.scope.map((item,index)=><article key={item.title}><span>{String(index+1).padStart(2,'0')}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
  </section>

  <section className="service-areas section" aria-labelledby="service-areas-title">
   <div><span className="eyebrow">Typische Einsatzbereiche</span><h2 id="service-areas-title">Passend für unterschiedliche Immobilien.</h2></div>
   <ul>{detail.areas.map(area=><li key={area}><Check/>{area}</li>)}</ul>
  </section>

  <section className="service-process" aria-labelledby="service-process-title">
   <div className="service-process-heading"><span className="eyebrow light">So arbeiten wir</span><h2 id="service-process-title">Klare Schritte für einen verlässlichen Ablauf.</h2></div>
   <ol>{detail.workflow.map((step,index)=><li key={step.title}><span>{String(index+1).padStart(2,'0')}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol>
  </section>

  <section className="service-benefits section" aria-labelledby="service-benefits-title">
   <div className="service-section-heading"><span className="eyebrow">Ihre Vorteile</span><h2 id="service-benefits-title">{service.benefitTitle}</h2><p>{service.benefit}</p></div>
   <div className="service-benefit-list">{detail.benefits.map((benefit,index)=><article key={benefit}><span>{String(index+1).padStart(2,'0')}</span><p>{benefit}</p></article>)}</div>
   <Link className="button" to="/kontakt">Angebot anfragen <ArrowRight/></Link>
  </section>

  {(service.relatedServices?.length||service.relatedArticles?.length)?<section className="service-related section-surface" aria-labelledby="service-related-title">
   <div className="service-section-heading"><span className="eyebrow">Passende Themen</span><h2 id="service-related-title">Verwandte Leistungen sinnvoll verbinden.</h2></div>
   {service.relatedServices?.length?<div className="service-related-grid">{service.relatedServices.map(link=>{const related=services.find(item=>`/leistungen/${item.slug}`===link.href);if(!related)return null;return <Link to={link.href} key={link.href}><img src={assetUrl(related.image)} alt="" loading="lazy"/><span>{related.category}</span><h3>{related.title}</h3><p>{related.summary}</p><b>Leistung ansehen <ArrowRight/></b></Link>})}</div>:null}
   {service.relatedArticles?.length?<nav className="service-reading" aria-label="Passende Ratgeber"><span>Passende Ratgeber</span>{service.relatedArticles.map(link=><Link key={link.href} to={link.href}>{link.label}<ArrowRight/></Link>)}</nav>:null}
  </section>:null}
  <ContactBand/>
 </>
}
