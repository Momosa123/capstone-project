import React, {useContext} from "react"
import {Context} from "../context"
import PropTypes from 'prop-types'
import useHover from "../hooks/useHover"
function Image({className, img}) {

  const {toggleFavorite, addToCart,removeFromCart, cartItems}=useContext(Context)

  
  const [hovered, ref]=useHover()
  let cartClass = cartItems.some( item=>item.id===img.id) ? true :false
  let heartClass = img.isFavorite ? "ri-heart-fill" : "ri-heart-line"

  const heartIcons =  hovered && <i onClick={()=>{toggleFavorite(img.id)}} className={`${heartClass} favorite`}></i>
                  

  const cartIcons =     (cartClass && <i onClick={()=>{removeFromCart(img.id)}} className="ri-shopping-cart-fill cart"></i>) ||
                        (hovered && <i onClick={()=>{addToCart(img)}} className="ri-add-circle-line cart"></i>) 
    
  
    return (
        <div ref={ref} className={`${className} image-container`}>
          { heartIcons}
          {cartIcons}
            <img   src={img.url} className="image-grid" alt=""/>
        </div>
    )
}
Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
}
export default Image
