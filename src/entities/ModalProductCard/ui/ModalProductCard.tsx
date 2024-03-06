'use client'
import React, { useState } from 'react'
import { IModalProductCard } from '../types'
import cancel from '../assets/img/delete.svg'
import s from '../assets/styles/style.module.css'

const ModalProductCard = ({image, title, price}:IModalProductCard) => {
  const[count, setCount] = useState(1);
  return (
    <div className='mt-5 flex justify-between'>
        <div className='flex '>
          <img alt="ProductImg" src={image} width={100}/>
          <div className='flex flex-col ml-5 justify-center'>
            <h5 className={`text-lg font-bold ${s.Title}`}>{title}</h5>
            <p className={`${s.Count}`}>{count} X {price}</p>
          </div>
        </div>
        <div className={`${s.Cancel} flex cursor-pointer`}>
            <img alt="Cancel" src={cancel} width={20}/>
        </div>
    </div>
  )
}

export default ModalProductCard