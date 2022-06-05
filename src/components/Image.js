import React, {useState, useContext} from "react"
import {Context} from "../context"
function Image({className, img}) {
  const {toggleFavorite}=useContext(Context)
  const [hovered, setHovered]=useState(false)
  const heartClass = img.isFavorite ? "ri-heart-fill" : "ri-heart-line"
  const icons = <div>              
                  <i onClick={()=>{toggleFavorite(img.id)}} className={`${heartClass} favorite`}></i>
                  <i className="ri-add-circle-line cart"></i>
                </div>

    return (
        <div onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} className={`${className} image-container`}>
        {hovered && icons}
            <img   src={img.url} className="image-grid" alt=""/>
        </div>
    )
}

export default Image
