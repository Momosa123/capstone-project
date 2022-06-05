import React, {useState, useContext} from "react"
import {Context} from "../context"
function Image({className, img}) {
  const {allPhotos, toggleFavorite}=useContext(Context)
  const [hovered, setHovered]=useState(false)
  const icons = <div>              
                  <i onClick={()=>{toggleFavorite(img.id)}} className="ri-heart-line favorite"></i>
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
