import React, { useContext, useEffect, useState } from "react";
const AppContext=React.createContext()
const url ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppProvider=({children})=>{
    const [loading,setloading]=useState(true)
    const [serchTerm,setSerchterm]=useState('a')
    const [cockTail,setCockTail]=useState([])
    const fetchDrinks = async()=>{
        setloading(true)
        try{
            const response = await fetch(`${url}${serchTerm}`)
            const data= await response.json()
            const {drinks}=data
            if(drinks){
                const newCocktails=drinks.map(item=>{
                    const{idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass}=item;
                    return {
                        id:idDrink,
                        name:strDrink,
                        image:strDrinkThumb,
                        info:strAlcoholic,
                        glass:strGlass
                    }
                })
                setCockTail(newCocktails)

            }else{
                setCockTail([])
            }
            setloading(false)


        }catch (error){
            console.log(error)
            setloading(false)

        }
        

    }
    useEffect(()=>{
        fetchDrinks()
    },[serchTerm])

    return<AppContext.Provider value={{
        loading,setSerchterm,cockTail
    }}>
    {children}
</AppContext.Provider>
    

}
export const useGlobalContext=()=>{
   return useContext(AppContext)
}
export {
    AppContext,AppProvider
}