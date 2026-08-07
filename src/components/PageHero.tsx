import { assetUrl } from '../utils/assets'
export function PageHero({kicker,title,text,image='/images/perlas-hero-concept.png'}:{kicker:string;title:string;text:string;image?:string}){return <section className="page-hero"><div><span className="eyebrow light">{kicker}</span><h1>{title}</h1><p>{text}</p></div><img src={assetUrl(image)} alt="Perlas Facility Services im Einsatz"/></section>}
