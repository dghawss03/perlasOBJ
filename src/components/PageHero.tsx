import { assetUrl } from '../utils/assets'
import { ContentPlaceholder } from './ContentPlaceholder'

export function PageHero({kicker,title,text,image='/images/objects/gewerbeimmobilie-hero.jpg',imageAlt='Moderne gepflegte Gewerbeimmobilie mit begrüntem Eingangsbereich',placeholderLabel}:{kicker:string;title:string;text:string;image?:string;imageAlt?:string;placeholderLabel?:string}){
 return <>
  <section className="page-hero">
   <div><span className="eyebrow light">{kicker}</span><h1>{title}</h1><p>{text}</p></div>
   {placeholderLabel?<ContentPlaceholder className="page-hero-placeholder" label={placeholderLabel}/>:<img src={assetUrl(image)} alt={imageAlt}/>}
  </section>
  <div className="page-hero-spacer" aria-hidden="true" />
 </>
}
