import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Service } from '../data/services'
import { assetUrl } from '../utils/assets'

export function ServicePreview({ items, compact = false }: { items: Service[]; compact?: boolean }) {
  return (
    <div className={`editorial-grid ${compact ? 'compact' : ''}`}>
      {items.map(service => (
        <article className="editorial-card" key={service.slug}>
          <Link to={`/leistungen/${service.slug}`} className="editorial-image">
            <img
              src={assetUrl(service.image)}
              alt={service.imageAlt}
              loading="lazy"
              style={{ objectPosition: service.imagePosition ?? '50% 50%' }}
            />
          </Link>
          <span>{service.category}</span>
          <h3><Link to={`/leistungen/${service.slug}`}>{service.title}</Link></h3>
          <p>{service.summary}</p>
          <Link className="simple-link" to={`/leistungen/${service.slug}`}>
            {service.title} kennenlernen <ArrowRight />
          </Link>
        </article>
      ))}
    </div>
  )
}
