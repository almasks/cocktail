import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'

function SearchForm() {
    const {setSerchterm}=useGlobalContext()
    const serchValue= React.createRef('')
    useEffect(()=>{
      serchValue.current.focus()
    },[serchValue])
    const handleserch=()=>{
      setSerchterm(serchValue.current.value)
    }
    const handleSubmit=(e)=>{
      e.preventDefault()

    }
  return (
    <section className='section search'>
      <form className='search-form form-control ' onSubmit={handleSubmit}>
        <label htmlFor='name'>search your favourite cocktail</label>
        <input type='text' id='name' ref={serchValue} onChange={handleserch}/>
      </form>
    </section>
  )
}

export default SearchForm