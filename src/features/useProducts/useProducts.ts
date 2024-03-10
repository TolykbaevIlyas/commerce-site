import { useEffect } from "react";
import { useGetAllProductQuery, useGetProductsMutation } from "../../shared/api/MainApiSlice";

interface IuseProducts{
  page: number;
  limit: number;
}

export const useProducts = ({page,limit}:IuseProducts) => {
    const {error, isLoading,data} = useGetAllProductQuery({});
    const [getProducts,result] = useGetProductsMutation();
    let pageCount = error? 0 : isLoading? 0 : data.result.length;
    let obj = [];
    obj = error ? [0] : isLoading ? [0] : result?.data?.result

    console.log(error);

    useEffect(()=>{
      getProducts({limit: limit, page: page})
      console.log(page)
    },[page,limit])

    return [error, isLoading ,pageCount,obj]
}