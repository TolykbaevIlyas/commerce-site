import { useSelector } from "react-redux"
import { RootState } from "../shared/Redux/store/store"
import { useGetAllProductsMutation, useGetProductQuery } from "../shared/api/MainApiSlice";
import { getStore } from "../shared/api/api";


function App() {
  const api = useSelector((state:RootState)=>  state.productsApi )
  //const { getAllProducts,result} = useGetAllProductsMutation({action: 'get_ids'});
  //console.log(getAllProducts);
  //console.log(result);
  const {data} = useGetProductQuery({action: 'get_ids'});
  console.log(data);
  //console.log(getStore())
  return (
    <div>
      Hello
    </div>
  )
}

export default App
