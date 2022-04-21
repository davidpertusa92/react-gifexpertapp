import React from 'react'

const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img
        title={ title }
        alt={ title }
        src={ url }
      />
      <p>{ title }</p>
    </div>
  )
}

export default GifGridItem;
