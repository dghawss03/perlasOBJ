/** Resolves files from public/ against Vite's configured deployment base. */
export function assetUrl(path:string){return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`}
