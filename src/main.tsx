import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ErrorBoundary } from './components/ErrorBoundary'
import { assetUrl } from './utils/assets'
import './styles.css'
document.documentElement.style.setProperty('--hero-concept-image',`url("${assetUrl('images/perlas-hero-concept.png')}")`)
document.documentElement.style.setProperty('--praxis-concept-image',`url("${assetUrl('images/perlas-praxis-concept.png')}")`)
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><ErrorBoundary><App /></ErrorBoundary></React.StrictMode>)
