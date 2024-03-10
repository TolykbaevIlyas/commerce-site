import { Category } from "../../../widgets/Category"
import { DesignesCarousel } from "../../../widgets/DesignesCarousel"
import { Intro } from "../../../widgets/Intro"
import { ProductsShort } from "../../../widgets/ProductsShort"


const Home = () => {
  return (
    <div>
      <Intro/>
      <Category/>
      <ProductsShort/>
      <DesignesCarousel/>
    </div>
  )
}

export default Home