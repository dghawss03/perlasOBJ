import { ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useConsent } from '../context/ConsentContext'
import { assetUrl } from '../utils/assets'
import { ExternalMediaPlaceholder } from './consent/ExternalMediaPlaceholder'

const videoId = 'u8PsU3hYVYU'
const videoUrl=`https://www.youtube.com/watch?v=${videoId}`

export function CompanyVideo(){
  const [playing,setPlaying]=useState(false)
  const [promptVisible,setPromptVisible]=useState(false)
  const {consent,acceptExternalMedia,openSettings}=useConsent()
  useEffect(()=>{if(!consent.externalMedia){setPlaying(false)}else{setPromptVisible(false)}},[consent.externalMedia])
  const requestPlayback=()=>{if(consent.externalMedia){setPlaying(true)}else{setPromptVisible(true)}}
  const acceptAndPlay=()=>{acceptExternalMedia();setPromptVisible(false);setPlaying(true)}
  return <section className="company-video section" aria-labelledby="company-video-title">
    <div className="company-video-heading"><span className="eyebrow">Das sind wir</span><h2 id="company-video-title">Objektbetreuung mit Verantwortung.</h2><p>Perlas ist ein familiengeführtes Unternehmen mit über 25 Jahren Erfahrung. Wir verstehen Objektbetreuung als langfristige Verantwortung für Immobilien.</p></div>
    <div className="company-video-media"><span className="company-video-label">Perlas in 54 Sekunden</span>
      <div className="company-video-frame">{playing&&consent.externalMedia?<iframe src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`} title="Perlas Unternehmensvorstellung" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>:<ExternalMediaPlaceholder image={assetUrl('images/video/perlas-unternehmen-thumbnail.jpg')} alt="Paolo Perla im Titelbild der Perlas Unternehmensvorstellung" promptVisible={promptVisible} onPlay={requestPlayback} onAccept={acceptAndPlay} onSettings={openSettings}/>}</div>
      <div className="company-video-meta"><span>00:54</span><a href={videoUrl} target="_blank" rel="noreferrer">Jetzt auf YouTube öffnen <ArrowUpRight/></a></div>
    </div>
  </section>
}
