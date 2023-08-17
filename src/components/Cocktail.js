import React from 'react'
import { Link } from 'react-router-dom'

function Cocktail({id,image,name,glass,info}) {
  return (
    <article className='cocktail'>
      <div className='img'>
        <img src={image} alt={name}/>
      </div>
      <footer className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">details</Link>
      </footer>
    </article>
  )
}

export default Cocktail