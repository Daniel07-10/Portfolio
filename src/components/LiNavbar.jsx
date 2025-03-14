import React from 'react'
import { NavLink } from "react-router-dom";

export const LiNav = ({content, Listyles, route}) => {
  return (
    
    <li className="mx-2">
      <NavLink 
        className={`px-2 py-2 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white ${Listyles}`} 
        to={route}
      >
        {content}
      </NavLink>
    </li>

   
  )
}







