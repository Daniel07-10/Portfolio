import React from 'react'
import { Parrafo } from './ParrafoInicial'

export const DivSkills = ({ content, children}) => {
  return (
    <div className="w-full px-1 sm:px-2 md:px-3">
      <div className="w-full p-3 sm:p-4 md:p-5 rounded-lg shadow-lg">
        <Parrafo content={content}/>
        <div className={`grid gap-2 sm:gap-3 md:gap-5 ${React.Children.count(children) > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"} ` }>
          {children}
        </div>
      </div>
    </div>
  )
}


