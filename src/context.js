import React, { useState, useEffect } from "react";
import Photos from "./pages/Photos";

const Context = React.createContext()
const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
function ContextProvider ({children}){
  const [allPhotos, setAllphotos] = useState([])
  function toggleFavorite(id){
     setAllphotos(prevPhotos=>prevPhotos.map(
       photo =>(
         photo.id === id ?
         {...photo, isFavorite: !photo.isFavorite} :
        photo
        )))
        
  }
  useEffect(
    ()=>{
      fetch(url)
        .then(res=>res.json())
        .then(data=>setAllphotos(data))
    },[]
  )
  console.log(allPhotos)
  return(
    <Context.Provider value={{allPhotos, toggleFavorite}}>
      {children}
    </Context.Provider>
  )
}

export  {ContextProvider, Context}