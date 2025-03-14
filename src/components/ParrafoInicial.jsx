import React from 'react';

export const Parrafo = ({ content }) => {
  return (
    <p className="text-2xl font-semibold text-gray-800 text-center my-4">
      {content}
    </p>
  );
};