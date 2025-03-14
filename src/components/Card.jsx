import React from 'react'

export const Card = ({content}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center text-lg font-medium text-gray-700">
     {content}
    </div> 
  )
};

