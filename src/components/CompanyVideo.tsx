import { useState } from 'react'
import { Play } from 'lucide-react'

const videoId = 'u8PsU3hYVYU'

export function CompanyVideo(){
  const [playing,setPlaying]=useState(false)
  return <section className="company-video section" aria-labelledby="company-video-title">
    <div className="company-video-heading"><span className="eyebrow">Das sind wir</span><h2 id="company-video-title">Objektbetreuung mit Verantwortung.</h2><p>Perlas ist ein familiengeführtes Unternehmen mit über 25 Jahren Erfahrung. Wir verstehen Objektbetreuung als langfristige Verantwortung für Immobilien.</p></div>
    <div className="company-video-media">
      {playing?<iframe src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`} title="Perlas Unternehmensvorstellung" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>:<button type="button" className="company-video-poster" onClick={()=>setPlaying(true)} aria-label="Perlas Unternehmensvideo abspielen"><img src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`} alt="Vorschaubild der Perlas Unternehmensvorstellung" loading="lazy"/><span><Play fill="currentColor"/></span></button>}
    </div>
  </section>
}
