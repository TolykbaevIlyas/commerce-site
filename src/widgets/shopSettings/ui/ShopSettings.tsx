import img1 from '../assets/image/Settings.svg'
import img2 from '../assets/image/SettingsIcon2.svg'
import img3 from '../assets/image/SettingsIcon1.svg'
import { Button } from '../../../shared/ui/Button'
import { Input } from '../../../shared/ui/Input'

interface IShopSettings{
  show: number;
  setShow:(e:string) => void;
}

const ShopSettings = ({show, setShow}:IShopSettings) => {
  return (
    <div className='flex justify-between items-center text-center px-28 py-5 bg-primary4'>
        <div className='flex gap-10 items-center text-center '>
            <div className='flex gap-5 items-center text-center border-r-2 border-black pr-10'>
              <Button variant='2' className='flex gap-2 items-center text-center'> 
                <img src={img1} alt={"options"}/>
                <p>Filter</p></Button>
              <Button variant='2'>
                <img src={img2} alt={"view"}/>  
              </Button> 
              <Button variant='2'>
                <img src={img3} alt={"view"}/>  
              </Button> 
            </div>
            <div>
              <p>Showing 1-{show} of 32 results</p>
          </div>
        </div>
        <div className='flex gap-32 items-center text-center'>
          <div className='flex items-center text-center gap-10'>
            <div className='flex gap-3 items-center text-center'>
              <p>Show</p>
              <Input placeholder='16' value={show} onChange={(e) => setShow(e)} className='w-10 py-2 px-2'/>
            </div>
            <div className='flex gap-3 items-center text-center'>
              <p>Short by</p>
              <Input placeholder='Default' className='w-20 py-2 px-2'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ShopSettings