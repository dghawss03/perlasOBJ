import { useEffect, useRef, useState } from 'react'
import { Menu, X, Phone, ArrowUpRight, ChevronDown } from 'lucide-react'
import { Link, NavLink, useLocation, type NavLinkRenderProps } from 'react-router-dom'

const services = [
  ['Objektbetreuung', 'objektbetreuung'],
  ['Gebäudereinigung', 'gebaeudereinigung'],
  ['Außenanlagenpflege', 'aussenanlagenpflege'],
  ['Winterdienst', 'winterdienst'],
  ['Facility Services', 'facility-services'],
]

const navClass = ({ isActive }: NavLinkRenderProps) =>
  `nav-link${isActive ? ' is-active' : ''}`

const subNavClass = ({ isActive }: NavLinkRenderProps) =>
  `nav-submenu-link${isActive ? ' is-active' : ''}`

export function Header() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const { pathname } = useLocation()

  const close = () => {
    setOpen(false)
    setServicesOpen(false)
  }

  useEffect(() => {
    const updateScrolled = () => setScrolled(scrollY > 24)
    updateScrolled()
    addEventListener('scroll', updateScrolled)
    return () => removeEventListener('scroll', updateScrolled)
  }, [])

  useEffect(() => {
    close()
  }, [pathname])

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        close()
        menuButton.current?.focus()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.body.classList.remove('nav-open')
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="skip" href="#main">Zum Inhalt</a>
      <div className="nav-wrap">
        <Link to="/" className="brand" aria-label="Perlas Objektbetreuung Startseite" onClick={close}>
          <span className="brand-lockup">
            <strong>Perlas</strong>
            <small>Objektbetreuung GmbH &amp; Co. KG</small>
          </span>
        </Link>
        <nav id="main-navigation" className={open ? 'open' : ''} aria-label="Hauptnavigation">
          <NavLink to="/" end className={navClass} onClick={close}>Startseite</NavLink>
          <div className={`nav-dropdown ${servicesOpen ? 'mobile-open' : ''}`}>
            <div className="nav-dropdown-main">
              <NavLink to="/leistungen" className={navClass} onClick={close}>Leistungen</NavLink>
              <button
                type="button"
                onClick={() => setServicesOpen(value => !value)}
                aria-label="Untermenü Leistungen umschalten"
                aria-expanded={servicesOpen}
              >
                <ChevronDown />
              </button>
            </div>
            <div className="nav-submenu">
              {services.map(([name, slug]) => (
                <NavLink
                  key={slug}
                  to={`/leistungen/${slug}`}
                  end
                  className={subNavClass}
                  onClick={close}
                >
                  {name}
                </NavLink>
              ))}
              <NavLink to="/leistungen" end className={subNavClass} onClick={close}>
                <b>Alle Leistungen</b>
              </NavLink>
            </div>
          </div>
          <NavLink to="/branchen" end className={navClass} onClick={close}>Branchen</NavLink>
          <NavLink to="/ueber-uns" end className={navClass} onClick={close}>Über uns</NavLink>
          <NavLink to="/karriere" end className={navClass} onClick={close}>Karriere</NavLink>
          <NavLink to="/blog" className={navClass} onClick={close}>Blog</NavLink>
          <NavLink to="/kontakt" end className={navClass} onClick={close}>Kontakt</NavLink>
          <a className="mobile-phone" href="tel:+491776867145" onClick={close}>
            <Phone /> +49 177 68 67 145
          </a>
        </nav>
        <div className="nav-actions">
          <a className="phone" href="tel:+491776867145"><Phone /> +49 177 68 67 145</a>
          <Link className="button button-small" to="/kontakt">Anfrage stellen <ArrowUpRight /></Link>
          <button
            ref={menuButton}
            className="menu"
            type="button"
            onClick={() => setOpen(value => !value)}
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
            aria-controls="main-navigation"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  )
}
