import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ErrorBoundary } from './components/ErrorBoundary'
import { ConsentProvider } from './context/ConsentContext'
import { assetUrl } from './utils/assets'
import './styles.css'
document.documentElement.style.setProperty('--hero-concept-image',`url("${assetUrl('images/objects/gewerbeimmobilie-hero.jpg')}")`)
document.documentElement.style.setProperty('--praxis-concept-image',`url("${assetUrl('images/perlas-praxis-concept.jpg')}")`)
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><ErrorBoundary><ConsentProvider><App /></ConsentProvider></ErrorBoundary></React.StrictMode>)
