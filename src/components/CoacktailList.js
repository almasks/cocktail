import React from 'react'
import Cocktail from './Cocktail'
import { useGlobalContext } from '../context'
import Loading from './Loading'

function CoacktailList() {
    const {loading,cockTail}=useGlobalContext()
    if(loading){
       return <Loading/>
    }
    if(cockTail.length<1){
     return (
     <h2 className='section-title'>No matching cocktails to your search</h2>
     )
    }
  return (
    
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cockTail.map((item)=>{
          return(
           
            <Cocktail key={item.id} {...item}/>
          )

        })}
      </div>
    </section>
  )
}

export default CoacktailList