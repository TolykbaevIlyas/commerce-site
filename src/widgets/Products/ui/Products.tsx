import React from 'react'
import s from '../assets/css/style.module.css'
import img1 from '../assets/img/Product1.svg'
import img2 from '../assets/img/Product2.svg'
import img3 from '../assets/img/Product3.svg'
import { ProductsCard } from '@/entities/ProductsCard'
import { Button } from '@/shared/ui/Button'

const Products = () => {
    const product = [
        {id: 1, name: 'Syltherine', shortDesc:"Stylish cafe chair", price: 2.500, img:img1},
        {id: 2, name: 'Leviosa', shortDesc:"Stylish cafe chair", price: 2.500, img:img2},
        {id: 3, name: 'Lolito', shortDesc:"Luxury big sofa", price: 7.500, img:img3},
        {id: 4, name: 'Respira', shortDesc:"Stylish cafe chair", price: 2.500, img:img1},
        {id: 5, name: 'Leviosa', shortDesc:"Stylish cafe chair", price: 2.500, img:img2},
        {id: 6, name: 'Lolito', shortDesc:"Luxury big sofa", price: 7.500, img:img3},
        {id: 7, name: 'Leviosa', shortDesc:"Stylish cafe chair", price: 2.500, img:img2},
        {id: 8, name: 'Lolito', shortDesc:"Luxury big sofa", price: 7.500, img:img3}
    
    ]
  return (
    <div>
        <div className='flex justify-around gap-10 flex-wrap pt-5 px-36'>
            {product.map((p)=> <ProductsCard key={p.id} name={p.name} price={p.price} img={p.img} shortDescription={p.shortDesc}/>)}
        </div>
        <div className='flex justify-center gap-5 mt-10'>
            <Button className=' px-5 py-3 rounded-xl hover:bg-primary hover:text-white font-light' variant='6'>Previous</Button>
            <Button className=' px-5 py-3 rounded-xl hover:bg-primary hover:text-white' variant='6'>1</Button>
            <Button className=' px-5 py-3 rounded-xl hover:bg-primary hover:text-white' variant='6'>2</Button>
            <Button className=' px-5 py-3 rounded-xl hover:bg-primary hover:text-white' variant='6'>3</Button>
            <Button className=' px-5 py-3 rounded-xl hover:bg-primary hover:text-white font-light' variant='6'>NEXT</Button>
        </div>
    </div>
  )
}

export default Products