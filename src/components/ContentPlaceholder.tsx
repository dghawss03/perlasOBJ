type ContentPlaceholderProps={label:string;className?:string;note?:string}

export function ContentPlaceholder({label,className='',note='Finales Kundenmaterial wird ergänzt'}:ContentPlaceholderProps){
 return <div className={`content-placeholder ${className}`} role="img" aria-label={`${label}. ${note}`}>
  <span>{label}</span><small>{note}</small>
 </div>
}
