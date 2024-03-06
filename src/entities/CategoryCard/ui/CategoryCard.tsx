import React from 'react'
import s from '../assets/css/style.module.css'
import Image from 'next/image'
import { ICategoryCard } from '../types'

const CategoryCard = ({name,img}:ICategoryCard) => {
  return (
    <div>
        <Image src={img} alt={"Photo"} width={400}/>
        <h4 className={`font-bold mt-2 ${s.Title}`}>{name}</h4>
    </div>
  )
}

export default CategoryCard