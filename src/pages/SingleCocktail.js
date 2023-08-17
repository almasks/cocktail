import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'

import Loading from '../components/Loading'
const url ='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

function SingleCocktail() {
  const {id}=useParams()
  console.log(id)
  const [loading,setLoading]=useState(true)
  const [cockTail,setCockTail]=useState(null)
  useEffect(()=>{
    setLoading(true)
    const getDrinks=async()=>{
      try{
      const response=await fetch(`${url}${id}`)
      console.log(response)
      const data =await response.json()
      if(data.drinks){
        const {
          strDrink:name,
          strDrinkThumb:image,
          strAlcoholic:info,
          strCategory:category,
          strGlass:glass,
          strInstructions:instructions,
          strIngredients1,
          strIngredients2,
          strIngredients3,
          strIngredients4,
          strIngredients5

        }=data.drinks[0]
        const ingredients=[
          strIngredients1,
          strIngredients2,
          strIngredients3,
          strIngredients4,
          strIngredients5

        ]
        const newCocktails={
          name,image,info,category,glass,instructions,ingredients
        }
        setCockTail(newCocktails)
      }else{
        setCockTail(null)
      }

      }
      catch(error){
        console.log(error)
        setLoading(false)

      }
      setLoading(false)

    }
    getDrinks()

  },[id])
  if(loading){
    return <Loading/>
  }
  if(!cockTail){
   return <h2 className="section-title">no cocktail to display</h2>
  }
  else{
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cockTail
    return (
      <section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={image} alt={name}></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span> {name}
            </p>
            <p>
              <span className='drink-data'>category :</span> {category}
            </p>
            <p>
              <span className='drink-data'>info :</span> {info}
            </p>
            <p>
              <span className='drink-data'>glass :</span> {glass}
            </p>
            <p>
              <span className='drink-data'>instructons :</span> {instructions}
            </p>
            <p>
              <span className='drink-data'>ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null
              })}
            </p>
          </div>
        </div>
      </section>
    )
  }
  
 
}

export default SingleCocktail