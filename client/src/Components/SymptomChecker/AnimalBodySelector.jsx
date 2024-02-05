import React from 'react'
import ImageMapper from 'react-image-mapper';
import IMAGE from "../../assets/SymptomChecker/DogBodyImg.png";

const AnimalBodySelector = () => {
  return (
    <div>
        <ImageMapper src={IMAGE} map={AREAS_MAP}/>
    </div>
  )
}

export default AnimalBodySelector