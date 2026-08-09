import { ArrowRight, Check } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { ContentPlaceholder } from '../components/ContentPlaceholder'
import { ContactBand } from '../components/ContactBand'
import { industryDetails, jobs } from '../data/company'
import { services } from '../data/services'
import { assetUrl } from '../utils/assets'

export function IndustriesPage(){return <>
 <SEO title="Objektbetreuung für Hausverwaltungen, öffentliche Gebäude und Gewerbe" description="Objektbetreuung und Facility Services für Hausverwaltungen, öffentliche Gebäude und Gewerbeimmobilien im Rhein-Main-Gebiet."/>
 <PageHero kicker="Branchen" title="Passende Betreuung für unterschiedliche Immobilien." text="Hausverwaltungen, öffentliche Gebäude und Gewerbeobjekte haben unterschiedliche Abläufe. Perlas stimmt Leistungen, Intervalle und Ansprechpartner auf das jeweilige Objekt ab." image="/images/projects/gebaeude-aussen.png" imageAlt="Betreutes Gewerbe- und Verwaltungsgebäude"/>
 <div className="industry-detail-list">{industryDetails.map((industry,index)=><section className={`industry-detail ${index%2?'industry-detail-reverse':''}`} key={industry.slug} id={industry.slug}>
  <div className="industry-detail-media">{industry.placeholderLabel?<ContentPlaceholder label={industry.placeholderLabel}/>:<img src={assetUrl(industry.image!)} alt={`Beispiel für ${industry.title}`} loading="lazy"/>}</div>
  <div className="industry-detail-copy"><span className="eyebrow">{industry.title}</span><h2>{industry.intro}</h2><div className="industry-detail-columns"><div><h3>Typische Objekte</h3><ul>{industry.objects.map(item=><li key={item}><Check/>{item}</li>)}</ul></div><div><h3>Im Alltag relevant</h3><ul>{industry.challenges.map(item=><li key={item}><Check/>{item}</li>)}</ul></div></div><p>{industry.support}</p><div className="industry-service-links">{industry.services.map(slug=>{const service=services.find(item=>item.slug===slug);return service?<Link to={`/leistungen/${service.slug}`} key={service.slug}>{service.title}<ArrowRight/></Link>:null})}</div><Link className="button" to="/kontakt">Betreuungskonzept besprechen <ArrowRight/></Link></div>
 </section>)}</div>
 <ContactBand/>
</>}

export function AboutPage(){return <>
 <SEO title="Familienunternehmen für Objektbetreuung" description="Perlas verbindet über 25 Jahre Erfahrung mit professioneller Objektbetreuung, festen Ansprechpartnern und kurzen Wegen im Rhein-Main-Gebiet."/>
 <PageHero kicker="Über Perlas" title="Persönlich geführt. Professionell aufgestellt." text="Perlas ist ein Familienunternehmen, das Erfahrung, persönliche Verantwortung und die Weiterentwicklung professioneller Objektbetreuung miteinander verbindet." placeholderLabel="Gemeinsames Bild Vater & Sohn"/>
 <section className="family-intro section"><div><span className="eyebrow">Familienunternehmen</span><h2>Erfahrung, die weitergegeben wird.</h2></div><div><p>Seit über 25 Jahren übernimmt Perlas Verantwortung für Immobilien im Rhein-Main-Gebiet. Die heutige Generation ist in das Unternehmen und die praktische Objektbetreuung hineingewachsen.</p><p>Langfristige Zusammenarbeit, direkte Ansprechpartner und eine verbindliche Kommunikation bleiben dabei die Grundlage. Gleichzeitig entwickelt sich Perlas konsequent in Richtung professioneller Objektbetreuung und Facility Services weiter.</p></div></section>
 <section className="family-profiles section-surface" aria-labelledby="family-profiles-title"><div className="family-section-heading"><span className="eyebrow">Menschen im Mittelpunkt</span><h2 id="family-profiles-title">Erfahrung und Zukunft im direkten Austausch.</h2><p>Die Namen, Funktionen, Bilder und persönlichen Statements werden vor dem Kundentermin ergänzt.</p></div><div className="family-profile-grid">
  {/* Kundendaten ausstehend: Name, Funktion, Foto und Statement Vater. */}<article><ContentPlaceholder label="Bild Vater"/><span>Vater</span><h3>Name Vater</h3><p className="family-role">Funktion Vater</p><blockquote>„Persönliches Statement Vater“</blockquote></article>
  {/* Kundendaten ausstehend: Name, Funktion, Foto und Statement Sohn. */}<article><ContentPlaceholder label="Bild Sohn"/><span>Sohn</span><h3>Name Sohn</h3><p className="family-role">Funktion Sohn</p><blockquote>„Persönliches Statement Sohn“</blockquote></article>
 </div></section>
 <section className="family-together section"><ContentPlaceholder label="Gemeinsames Bild Vater & Sohn"/><div><span className="eyebrow">Gemeinsam weiterdenken</span><h2>Persönliche Verantwortung bleibt. Die Betreuung wird professioneller.</h2><p>Perlas verbindet die Erfahrung aus dem Objektalltag mit klaren Prozessen, Dokumentation und abgestimmten Facility Services. Mitdenken bedeutet dabei, Auffälligkeiten früh zu erkennen und die passenden nächsten Schritte transparent zu koordinieren.</p></div></section>
 <section className="family-vision section-surface"><div><span className="eyebrow">Heute und morgen</span><h2>Objektbetreuung mit klarer Perspektive.</h2></div><div><p>Perlas entwickelt die persönliche Nähe eines Familienunternehmens weiter in eine professionelle, strukturierte Objektbetreuung. Direkte Ansprechpartner und langfristige Zusammenarbeit bleiben dabei erhalten.</p><p>Der Anspruch ist kein lautes Versprechen, sondern ein verlässlicher Blick auf das gesamte Objekt: Leistungen sinnvoll verbinden, Veränderungen dokumentieren und Verantwortung im Alltag übernehmen.</p></div></section>
 <ContactBand/>
</>}

export function CareerPage(){return <>
 <SEO title="Karriere in der Objektbetreuung" description="Karriere bei Perlas im Rhein-Main-Gebiet: Verantwortung übernehmen, im Team arbeiten und professionelle Objektbetreuung aktiv mitgestalten."/>
 <PageHero kicker="Karriere bei Perlas" title="Gemeinsam Verantwortung übernehmen." text="Arbeiten bei Perlas bedeutet: im Familienunternehmen direkt zusammenarbeiten, praktische Verantwortung übernehmen und unterschiedliche Objekte im Team betreuen." placeholderLabel="Bild Team"/>
 <section className="career-intro section"><div><span className="eyebrow">Arbeiten bei Perlas</span><h2>Praktisch arbeiten. Direkt abstimmen. Gemeinsam vorankommen.</h2></div><div><p>Perlas verbindet ein persönliches Umfeld mit klarer Verantwortung im Objektalltag. Direkte Ansprechpartner, abwechslungsreiche Objekte und Zusammenarbeit im Team stehen im Mittelpunkt.</p><p>Konkrete Informationen zu den einzelnen Stellen und Arbeitsbedingungen werden mit den finalen Kundendaten ergänzt.</p></div></section>
 <section className="career-benefits section-surface" aria-labelledby="career-benefits-title"><div className="family-section-heading"><span className="eyebrow">Benefits</span><h2 id="career-benefits-title">Was Perlas als Arbeitgeber bietet.</h2><p>Die konkreten Benefits werden vor Veröffentlichung kundenseitig bestätigt und ergänzt.</p></div><div className="benefit-placeholder-grid">{['Benefit wird ergänzt','Benefit wird ergänzt','Benefit wird ergänzt'].map((label,index)=><article key={index}><span>{String(index+1).padStart(2,'0')}</span><h3>{label}</h3><p>Finale Benefit-Information wird ergänzt.</p></article>)}</div></section>
 <section className="jobs section" aria-labelledby="jobs-title"><span className="eyebrow">Aktuelle Möglichkeiten</span><h2 id="jobs-title">Offene Stellen</h2><div className="job-card-grid">{jobs.map(job=><article key={job.slug}><span>{job.location} · {job.type}</span><h3>{job.title}</h3><p>{job.summary}</p><Link className="simple-link" to={`/karriere/${job.slug}`}>Stelle ansehen <ArrowRight/></Link></article>)}</div></section>
 <ContactBand/>
</>}

const jobSections=['Ihre Aufgaben','Ihr Profil','Das bieten wir','Arbeitszeit','Bewerbung']
export function JobDetailPage(){const {slug}=useParams();const job=jobs.find(item=>item.slug===slug);if(!job)return <Navigate to="/karriere" replace/>;return <>
 <SEO title={job.title} description={job.metaDescription}/><PageHero kicker="Karriere bei Perlas" title={job.title} text="Informationen zu Aufgaben, Profil und Rahmenbedingungen werden mit den finalen Stellendaten ergänzt." placeholderLabel="Bild Team"/>
 <section className="job-detail section"><div className="job-detail-meta"><span>{job.location}</span><span>{job.type}</span></div><p className="job-detail-summary">{job.summary}</p><div className="job-detail-grid">{jobSections.map(title=><section key={title}><h2>{title}</h2><p>Informationen zu diesem Bereich werden ergänzt.</p></section>)}</div><a className="button" href="mailto:karriere@perlas.de">Jetzt bewerben <ArrowRight/></a></section>
</>}
