import { useState } from 'react'
import { ICarousel } from '../types'


import s from '../assets/css/style.module.css'
import { CarouselCard } from '../../../entities/CarouselCard';

const Carousel = ({slides}:ICarousel) => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  // };

  return (
    <div className={`relative ${s.Slider}`}>
        <div className='relative overflow-hidden'>
          <div className={`flex relative overflow-hidden gap-20 duration-200  ${s.Slides}`} style={{
              transform: `translateX(-${currentSlide * (90 / slides.length)}%)`,
            }}>
            {slides.map((sl:any) => <CarouselCard key={sl.id} title={sl.title} description={sl.description} image={sl.image} className={`${currentSlide + 1 == sl.id ? s.currentSlideCss : null}`}/>)}
          </div>
        </div>
        <button
          className={`${s.nextSlideBtn} text-primary`}
          onClick={nextSlide}
        >
          &gt;
        </button>
        <div className={`flex gap-2 ${s.SliderCount}`}>
          {slides.map((sl:any)=> <div key={sl.id} className={`bg-gray-300 border-2 border-gray-300 rounded-full duration-100  ${s.SliderDot} ${currentSlide + 1 == sl.id ? 'bg-primary border-2 border-primary' : null}`}></div>)}
        </div>
    </div>
  )
}

export default Carousel