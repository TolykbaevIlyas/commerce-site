import { useEffect } from "react";
import { useGetAllProductQuery, useGetProductsMutation } from "../../shared/api/MainApiSlice";

export const useProducts = () => {
    const {error, isLoading,data} = useGetAllProductQuery({});
    const [getProducts,result] = useGetProductsMutation();
    let pageCount = error? 0 : isLoading? 0 : data.result.length;
    let obj = [];
    obj = error ? [0] : isLoading ? [0] : result.data.result

    useEffect(()=>{
        getProducts({page:1}) 
      },[])

    return [error, isLoading ,pageCount,obj]
}