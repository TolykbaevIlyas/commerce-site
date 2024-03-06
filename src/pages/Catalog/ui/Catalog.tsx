import { IntroForPages } from '../../../shared/ui/IntroForPages'
import { ShopSettings } from '../../../widgets/shopSettings'
import { Products } from '../../../widgets/Products'

const Catalog = () => {
  return (
    <div>
      <IntroForPages pageName='Shop'/>
      <ShopSettings/>
      <Products/>
    </div>
  )
}

export default Catalog