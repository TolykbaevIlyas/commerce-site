import { IntroForPages } from '../../../shared/ui/IntroForPages'
import { ShopSettings } from '../../../widgets/shopSettings'
import { Products } from '../../../widgets/Products'
import { useEffect, useState } from 'react';
import {useGetProductsObjMutation } from '../../../shared/api/MainApiSlice';
import { useProducts } from '../../../features/useProducts/useProducts';


const Catalog = () => {
  const [show, setShow] = useState('50');
  const [currentPage, setCurrentPage] = useState(1);
  const [getProductsObj,result] = useGetProductsObjMutation()
  const [err,isLoad,pageCount,res] = useProducts({page:currentPage, limit:parseInt(show)});

  useEffect(()=>{
    err ? "Error" : isLoad ? "Loading" : getProductsObj(res)
  },[res])

  console.log(err ? "Error" : isLoad ? "Load" : res)

  return (
    <div>
      <IntroForPages pageName='Shop'/>
      <ShopSettings show={show} setShow={setShow} currentPage={currentPage}/>
      {
        result.isError ? <>Error</> :
        result.isLoading ? <>isLoad</> :
        result.isSuccess? <Products pageCount={pageCount} productsList={result.data.result} setCurrentPage={setCurrentPage} currentPage={currentPage}/>:
        "Please wait..."
      }

    </div>
  )
}

export default Catalog