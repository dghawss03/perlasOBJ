import { ArrowRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { PageHero } from '../components/PageHero'
import { BlogPreview } from '../components/BlogPreview'
import { ContactBand } from '../components/ContactBand'
import { postImageAlt, posts } from '../data/blog'
import { services } from '../data/services'
import { assetUrl } from '../utils/assets'

const articleServiceSlugs:Record<string,string[]>={
 'parkhausreinigung-wichtig':['parkhausreinigung','gebaeudereinigung','objektbetreuung'],
 'hartnaeckige-flecken-entfernen':['gebaeudereinigung','sonderreinigung','parkhausreinigung'],
 'winterdienst-gewerbeimmobilien':['winterdienst','aussenanlagenpflege','objektbetreuung'],
 'immobilie-langfristig-gepflegt':['objektbetreuung','facility-services','technische-objektbetreuung'],
}

export function BlogPage(){return <>
 <SEO title="Ratgeber zu Objektbetreuung & Gebäudeservice" description="Praxiswissen von Perlas zu Objektbetreuung, Gebäudereinigung, Parkhauspflege und Winterdienst für Gewerbeimmobilien und Verwaltungen."/>
 <PageHero kicker="Ratgeber & Wissen" title="Wissen, das im Objektalltag weiterhilft." text="Praxisnahe Informationen für Hausverwaltungen, Unternehmen und Verantwortliche rund um Objektbetreuung und Gebäudeservices." image="/images/perlas-ratgeber-concept.jpg" imageAlt="Mitarbeiter bei der maschinellen Reinigung eines stark beanspruchten Bodens"/>
 <section className="section"><div className="section-head"><div><span className="eyebrow">Praxiswissen</span><h2>Ratgeber für professionell betreute Immobilien.</h2></div><p>Materialien richtig einschätzen, Leistungen sinnvoll planen und Abläufe nachvollziehbar organisieren.</p></div><BlogPreview items={posts}/></section>
 </>}

export function BlogDetailPage(){
 const {slug}=useParams()
 const post=posts.find(p=>p.slug===slug)
 if(!post)return <Navigate to="/blog" replace/>
 const cta=post.cta??{title:'Unterstützung für Ihr Objekt',text:'Sie möchten die passende Vorgehensweise für Ihre Immobilie besprechen?',label:'Kontakt aufnehmen'}
 const relatedServices=(articleServiceSlugs[post.slug]??[]).map(serviceSlug=>services.find(service=>service.slug===serviceSlug)).filter(Boolean)
 return <>
  <SEO title={post.metaTitle??post.title} description={post.metaDescription??post.teaser}/>
  <article className="article"><header><span className="eyebrow">{post.category} · {post.date}</span><h1>{post.title}</h1><p>{post.teaser}</p></header><img className="article-lead" src={assetUrl(post.image)} alt={postImageAlt(post)}/><div className="article-body"><p className="lead">{post.lead??'Professionelle Objektpflege beginnt mit der richtigen Einschätzung von Nutzung, Material und gewünschtem Ergebnis.'}</p>{post.sections.map(section=><section key={section.heading}><h2>{section.heading}</h2>{section.text&&<p>{section.text}</p>}{section.paragraphs?.map(paragraph=><p key={paragraph}>{paragraph}</p>)}{section.items&&<div className="article-item-grid">{section.items.map(item=><div key={item.heading}><h3>{item.heading}</h3><p>{item.text}</p></div>)}</div>}{section.bullets&&<ul>{section.bullets.map(item=><li key={item}>{item}</li>)}</ul>}{section.steps&&<ol>{section.steps.map(item=><li key={item}>{item}</li>)}</ol>}{section.note&&<div className="article-note"><strong>{section.note.title}</strong><p>{section.note.text}</p></div>}{section.image&&<figure className="article-inline-image"><img src={assetUrl(section.image.src)} alt={section.image.alt} loading="lazy"/>{section.image.caption&&<figcaption>{section.image.caption}</figcaption>}</figure>}</section>)}{relatedServices.length===3&&<section className="article-service-links" aria-labelledby="article-services-title"><span className="eyebrow">Passende Leistungen</span><h2 id="article-services-title">Diese Leistungen passen zum Thema.</h2><div>{relatedServices.map(service=>service&&<Link key={service.slug} to={`/leistungen/${service.slug}`}><span>{service.category}</span><h3>{service.title}</h3><p>{service.summary}</p><b>Zur passenden Leistung <ArrowRight/></b></Link>)}</div></section>}<aside className="article-cta"><h2>{cta.title}</h2><p>{cta.text}</p><Link className="button" to="/kontakt">{cta.label} <ArrowRight/></Link></aside></div></article>
 </>
}
