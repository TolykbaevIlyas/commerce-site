'use client'
import { useState } from 'react'
import { IProductCard } from '../types'
import s from '../assets/css/style.module.css'
import { Button } from '../../../shared/ui/Button'
import { useDispatch } from 'react-redux'
import { addCart } from '../../../features/ShoppingModal/reduxSlice/AddToCart'

const ProductsCard = ({product,price,shortDescription,img}:IProductCard) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const dispatch = useDispatch();

  const handleMouseOver = () => {
    setIsMouseOver(true);
  }

  const handleMouseOut = () => {
    setIsMouseOver(false);
  }

  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='cursor-pointer group-hover:bg-slate-300'>
        <img src={img} alt={"ProductImg"} width={600}/>
        <div className='flex flex-col bg-gray-100 px-5 py-2 gap-2 '>
            <h4 className={`font-bold ${s.Title}`}>{product}</h4>
            <p className={`font-extralight ${s.Description}`}>{shortDescription}</p>
            <p className={`font-bold ${s.price}`}>{price} руб</p>
        </div>
        {isMouseOver ? 
        <div className=' flex justify-center items-center z-10 w-full h-full relative -top-full bg-black/40'> 
          <Button variant='5' className='absolute hover:bg-primary hover:text-white duration-100' onClick={() => dispatch(addCart({product: product, price: price, shortDescription:shortDescription, img:img}))}>
            Add to Cart
          </Button> 
          <div className='flex absolute mt-24 gap-10'>
            <Button variant='2' className='relative text-white font-bold hover:text-primary duration-100'>Share</Button>
            <Button variant='2' className='relative text-white font-bold hover:text-primary duration-100'>Compare</Button>
            <Button variant='2' className='relative text-white font-bold hover:text-primary duration-100'>Like</Button>
          </div>
        </div> : null}
    </div>
  )
}

export default ProductsCard