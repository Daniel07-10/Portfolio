import React from 'react'

export const Href = ({route,titulo}) => {
  return (
    <div>
      <a target="_blank" rel="noopener noreferrer"  href={route} > {titulo}  </a>
    </div>
    
  )
}


