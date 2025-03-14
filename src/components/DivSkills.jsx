import React from 'react'
import { Parrafo } from './ParrafoInicial'


export const DivSkills = ({ content, children}) => {
  return (
    <div className="w-100">
      <div className="w-full p-5 rounded-lg shadow-lg">
        <Parrafo content={content}/>
        <div className={`grid gap-5 ${React.Children.count(children) > 1 ? "grid-cols-2" : "grid-cols-1"} ` }>
          {children}
        </div>
      </div>
      
    </div>
  )
}


