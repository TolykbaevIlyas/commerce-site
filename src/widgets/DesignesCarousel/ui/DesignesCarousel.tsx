
import s from '../assets/css/style.module.css'
import img from '../assets/img/CarouselImg.svg'
import { Button } from '../../../shared/ui/Button'
import { Carousel } from '../../../features/Carousel'

const DesignesCarousel = () => {
    const carousel = [
        {id:1,title:'Bed Room', Description:'Inner Place', image:img},
        {id:2,title:'Bed Room', Description:'Inner Place', image:img},
        {id:3,title:'Bed Room', Description:'Inner Place', image:img},
        {id:4,title:'Bed Room', Description:'Inner Place', image:img}
    ]

  return (
    <div className={`flex pl-40 overflow-hidden mt-10 gap-20 bg-primary3 ${s.DSliderBlock}`}>
        <div className='flex justify-center gap-20 mt-10'>
            <div className={`flex flex-col gap-3 justify-center ${s.TextBlock} z-10`}>
                <h3 className={`${s.Title} font-bold`}>50+ Beatiful rooms inspiration</h3>
                <p className={`${s.Description} font-light`}>Our designer already made a lot of beatiful prototype of rooms that ispire you</p>
                <Button variant='1' className='hover:bg-primary3 hover:text-primary hover:border-2 hover:border-black duration-100'>Explore More</Button>
            </div>
            <div className=''>
                <Carousel slides={carousel}/>
            </div>
        </div>
    </div>
  )
}

export default DesignesCarousel