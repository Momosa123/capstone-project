import React, { useState, useEffect } from "react";


const Context = React.createContext()

const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

function ContextProvider ({children}){
  const [allPhotos, setAllphotos] = useState([])

  const [cartItems, setCartItems] = useState([])

  function addToCart (img){
    setCartItems(
      prevCart =>
      [...prevCart, img]
      )
      
  }
  function removeFromCart (id){
    setCartItems(
      prevCart =>
      prevCart.filter(item =>item.id !== id)
      )
      
  }
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

  return(
    <Context.Provider value={{allPhotos, toggleFavorite, addToCart, cartItems, removeFromCart, setCartItems}}>
      {children}
    </Context.Provider>
  )
}

export  {ContextProvider, Context}