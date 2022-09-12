
import React from 'react'


const Photo = ({imgUrl}) => {
  return (
   <img src={imgUrl} alt="" width="98%" height="98%" loading='lazy'/>
  )
}

export default Photo