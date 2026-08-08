import { Component, type ErrorInfo, type ReactNode } from 'react'

export class ErrorBoundary extends Component<{children:ReactNode},{error:Error|null}>{
 state:{error:Error|null}={error:null}
 static getDerivedStateFromError(error:Error){return {error}}
 componentDidCatch(error:Error,info:ErrorInfo){console.error('Perlas rendering error',error,info)}
 render(){if(this.state.error)return <main style={{padding:'140px 24px',maxWidth:900,margin:'0 auto',fontFamily:'Arial, sans-serif',color:'#182428'}}><h1 style={{fontSize:36}}>Die Vorschau konnte nicht geladen werden.</h1><p>Bitte kopiere die folgende Fehlermeldung:</p><pre style={{whiteSpace:'pre-wrap',padding:20,background:'#ecefed',borderLeft:'4px solid #1e6f9f'}}>{this.state.error.message}</pre><button style={{padding:'12px 18px',background:'#1e6f9f',color:'white',border:0}} onClick={()=>location.reload()}>Neu laden</button></main>;return this.props.children}
}
