import img1 from '../assets/img/Product1.svg'
import img2 from '../assets/img/Product2.svg'
import img3 from '../assets/img/Product3.svg'
import { Button } from '../../../shared/ui/Button'
import { ProductsCard } from '../../../entities/ProductsCard'

interface IProducts{
    pageCount: number;
    productsList: any;
    setCurrentPage:any;
    currentPage: number;
}

const Products = ({pageCount,productsList,setCurrentPage,currentPage}:IProducts) => {
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

    let pages =[];
    for (let i=1; i <= pageCount; i++){
        if(pageCount > 100){
            pageCount = 20;
        }
        pages.push(i);
    }

  return (
    <div>
        <div className='flex justify-around gap-10 flex-wrap pt-5 px-36'>
            {productsList.map((p:any)=><ProductsCard key={p.id} product={p.product} price={p.price} shortDescription={product[1].shortDesc} img={img1}/>)}
        </div>
        <div className='flex justify-center gap-5 mt-10 mx-56'>
            <Button className=' px-5 py-3 rounded-xl hover:bg-primary hover:text-white font-light' variant='6' onClick={() => setCurrentPage(currentPage - 1)} 
                  >Previous</Button>
            <div className='flex flex-wrap gap-5'>
                {
                    pages.map((n,l)=><Button key={l} onClick={() => setCurrentPage(n)}  className={`${currentPage == n ? 'bg-black text-white ' : null } px-5 py-3 rounded-xl hover:bg-primary hover:text-white `} variant='6'>{n}</Button>)
                }
            </div>
            <Button className=' px-5 py-3 rounded-xl hover:bg-primary hover:text-white font-light' variant='6' onClick={() => setCurrentPage(currentPage + 1)}>NEXT</Button>
        </div>
    </div>
  )
}

export default Products