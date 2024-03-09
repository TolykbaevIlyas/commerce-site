import { IntroForPages } from '../../../shared/ui/IntroForPages'
import { ShopSettings } from '../../../widgets/shopSettings'
import { Products } from '../../../widgets/Products'
import { useEffect, useState } from 'react';
import {useGetProductsObjMutation } from '../../../shared/api/MainApiSlice';
import { useProducts } from '../../../features/useProducts/useProducts';


const Catalog = () => {
  const [show, setShow] = useState('16');
  const [getProductsObj,result] = useGetProductsObjMutation()
  const [err,isLoad,pageCount,res] = useProducts();

  useEffect(()=>{
    err ? "Error" : isLoad ? "Loading" : getProductsObj(res)
  },[res])

  console.log(err ? "Error" : isLoad ? "Load" : res)

  return (
    <div>
      <IntroForPages pageName='Shop'/>
      <ShopSettings show={show} setShow={() => setShow}/>
      {
        result.isError ? <>Error</> :
        result.isLoading ? <>isLoad</> :
        result.isSuccess? <Products pageCount={pageCount} productsList={result.data.result}/>:
        "Null"
      }

    </div>
  )
}

export default Catalog