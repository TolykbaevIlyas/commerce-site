
import { ICarouselCard } from '../types'
import s from '../assets/css/style.module.css'

const CarouselCard = ({title,description,image,className}:ICarouselCard) => {
  return (
    <div className={`${className} ${s.CarouselCard} `}>
        <img src={image} alt={'photo'} height={700}/>
        <div className={`${s.CarouselBlock}`}>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
    </div>
  )
}

export default CarouselCard