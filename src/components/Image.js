import React, {useState, useContext} from "react"
import {Context} from "../context"
import PropTypes from 'prop-types'
function Image({className, img}) {

  const {toggleFavorite, addToCart}=useContext(Context)

  const [hovered, setHovered]=useState(false)

  let heartClass = img.isFavorite ? "ri-heart-fill" : "ri-heart-line"

  const icons = <div>              
                  <i onClick={()=>{toggleFavorite(img.id)}} className={`${heartClass} favorite`}></i>
                  <i onClick={()=>{addToCart(img)}} className="ri-add-circle-line cart"></i>
                </div>

    return (
        <div onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} className={`${className} image-container`}>
        {hovered && icons}
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
