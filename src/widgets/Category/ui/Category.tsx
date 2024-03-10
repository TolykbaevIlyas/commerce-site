import { CategoryCard } from '../../../entities/CategoryCard'
import img from '../assets/img/Category.svg'
import s from '../assets/styles/styles.module.css'

const Category = () => {
  const category = [
  {id:1,name:"Dining", img:img},{id:2,name:"Living", img:img},{id:3,name:"Bedroom", img:img}
  ]
  return (
    <div className='flex flex-col text-center mt-10'>
      <h3 className={`${s.Title} font-bold`}>Browse The Range</h3>
      <p className={`${s.Description} font-light`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
      <div className='flex mt-5 justify-center gap-4'>
        {category.map((cate)=><CategoryCard key={cate.id} name={cate.name} img={cate.img}/>)}
      </div>
    </div>
  )
}

export default Category