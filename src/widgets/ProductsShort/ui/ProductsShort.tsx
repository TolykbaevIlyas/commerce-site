
import { ProductsCard } from '../../../entities/ProductsCard'
import { Button } from '../../../shared/ui/Button'
import s from '../assets/css/style.module.css'
import img1 from '../assets/img/Product1.svg'
import img2 from '../assets/img/Product2.svg'
import img3 from '../assets/img/Product3.svg'


const ProductsShort = () => {
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
    <div className='mt-5 mx-40'>
        <h3 className={`${s.Title} font-extrabold text-center`}>Our Products</h3>
        <div className={`flex justify-center gap-8 flex-wrap mt-10`}>
            {product.map((p)=><ProductsCard key={p.id} product={p.name} price={p.price} shortDescription={p.shortDesc} img={img1}/>)}
        </div>
        <div className='flex justify-center mt-10'>
            <Button variant='4' className=' hover:bg-primary hover:text-white duration-100'>Show More</Button>
        </div>
    </div>
  )
}

export default ProductsShort