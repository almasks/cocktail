import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
const url ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

function SingleCocktail() {
  const {id}=useParams()
  const [loading,setLoading]=useState(true)
  const [cockTail,setCockTail]=useState(null)
  useEffect(()=>{
    setLoading(true)
    const getDrinks=async()=>{
      try{
      const response=await fetch(`${url}${id}`)
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
      setLoading(false)

      }
      catch(error){
        console.log(error)
        setLoading(false)

      }

    }
    getDrinks()

  },[id])
  if(loading){
    return <Loading/>
  }
  if(!cockTail){
   return <h2 className="section-title">no cocktail to display</h2>
  }
  return (
    <div>
      <h2>{id}</h2>
      </div>
  )
}

export default SingleCocktail