import { IntroForPages } from '../../../shared/ui/IntroForPages'
import { ShopSettings } from '../../../widgets/shopSettings'
import { Products } from '../../../widgets/Products'
import { useEffect, useState } from 'react';
import { useGetAllProductQuery, useGetProductsMutation } from '../../../shared/api/MainApiSlice';

const Catalog = () => {
  const [show, setShow] = useState(16);
  const {error, isLoading,data} = useGetAllProductQuery({page: 2});
  const [getProductTemplate,result] = useGetProductsMutation();
  let pageCount = 0;
  console.log(
    error? "Error" :
    isLoading? "Loading" :
    pageCount = data.result.length
    );

  useEffect(()=>{
    getProductTemplate({page:1});
  },[])
  console.log(result)

  //console.log("show" + show)

  
  return (
    <div>
      <IntroForPages pageName='Shop'/>
      <ShopSettings show={show} setShow={() => setShow()}/>
      <Products pageCount={pageCount}/>
    </div>
  )
}

export default Catalog