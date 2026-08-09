import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { assetUrl } from '../utils/assets'

const slides = [
  { kicker:'Perlas Objektbetreuung', title:'Objekte in besten Händen.', text:'Perlas unterstützt Hausverwaltungen und Unternehmen bei der professionellen Betreuung von Gewerbeimmobilien im Rhein-Main-Gebiet.', cta:'Perlas kennenlernen', href:'/ueber-uns', image:'/images/projects/einsatzfahrzeug-gewerbeobjekt.png', alt:'Perlas Einsatzfahrzeug vor einem betreuten Gewerbeobjekt' },
  { kicker:'Leistungen von Perlas', title:'Alles für Ihr Objekt.', text:'Von der laufenden Objektbetreuung über Reinigung und Außenpflege bis zu Facility Services. Sie erhalten zahlreiche Leistungen aus einer Hand.', cta:'Leistungen entdecken', href:'/leistungen', image:'/images/hero/leistungen-facility-services.jpg', alt:'Gepflegter Eingangsbereich einer modernen Gewerbeimmobilie mit Außenanlage' },
  { kicker:'Karriere bei Perlas', title:'Gemeinsam mehr bewegen.', text:'Perlas wächst und sucht Menschen, die Verantwortung übernehmen und Teil eines zuverlässigen Teams werden möchten.', cta:'Karriere bei Perlas', href:'/karriere', image:'/images/perlas-team-concept.jpg', alt:'Kollegiales Facility Team auf einem Gewerbecampus' },
  { kicker:'Ratgeber', title:'Hartnäckige Flecken professionell entfernen.', text:'Erfahren Sie, wie passende Reinigungsverfahren und eine fachgerechte Pflege stark beanspruchte Oberflächen schützen.', cta:'Artikel lesen', href:'/blog/hartnaeckige-flecken-entfernen', image:'/images/perlas-ratgeber-concept.jpg', alt:'Professionelle maschinelle Reinigung eines stark beanspruchten Steinbodens' },
]
export function HeroSlider(){
 const [active,setActive]=useState(0); const [paused,setPaused]=useState(false); const timer=useRef<number|null>(null); const touchStart=useRef<number|null>(null)
 const go=useCallback((next:number)=>setActive((next+slides.length)%slides.length),[])
 useEffect(()=>{if(paused)return; timer.current=window.setInterval(()=>setActive(i=>(i+1)%slides.length),7000); return()=>{if(timer.current)clearInterval(timer.current)}},[paused,active])
 const finishSwipe=(x:number)=>{if(touchStart.current===null)return; const delta=x-touchStart.current;if(Math.abs(delta)>45)go(active+(delta<0?1:-1));touchStart.current=null}
 return <section className={`hero-slider ${paused?'is-paused':''}`} id="top" aria-label="Perlas Themen" onTouchStart={e=>touchStart.current=e.touches[0].clientX} onTouchEnd={e=>finishSwipe(e.changedTouches[0].clientX)}>
  <div className="hero-slides">{slides.map((s,i)=>{const Title=i===0?'h1':'h2';return <article key={s.kicker} className={`hero-slide ${i===active?'active':''}`} aria-hidden={i!==active}><div className="hero-panel"><span className="eyebrow light">{s.kicker}</span><Title>{s.title}</Title><p>{s.text}</p><div className="hero-actions"><Link className="hero-cta" to={s.href} tabIndex={i===active?0:-1}>{s.cta}<ArrowRight/></Link></div></div><div className="hero-visual"><img src={assetUrl(s.image)} alt={s.alt} loading={i===0?'eager':'lazy'} fetchPriority={i===0?'high':'auto'}/></div></article>})}</div>
  <button className="hero-arrow hero-arrow-left" onClick={()=>go(active-1)} aria-label="Vorheriger Slide"><ChevronLeft/></button><button className="hero-arrow hero-arrow-right" onClick={()=>go(active+1)} aria-label="Nächster Slide"><ChevronRight/></button>
  <div className="hero-controls">
   <div className="hero-pagination" role="tablist" aria-label="Slide auswählen">{slides.map((s,i)=><button key={s.kicker} className={i===active?'active':''} onClick={()=>go(i)} role="tab" aria-selected={i===active} aria-label={`Slide ${i+1}: ${s.kicker}`}/>)}</div>
   <button className="hero-pause" type="button" onClick={()=>setPaused(value=>!value)} aria-label={paused?'Slider fortsetzen':'Slider pausieren'}>{paused?<Play fill="currentColor"/>:<Pause fill="currentColor"/>}</button>
  </div>
 </section>
}
