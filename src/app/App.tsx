import { useSelector } from "react-redux"
import { RootState } from "../shared/Redux/store/store"
import { useGetAllProductsMutation, useGetProductQuery } from "../shared/api/MainApiSlice";
import { getStore } from "../shared/api/api";
import { Header } from "../widgets/header";


function App() {
  const api = useSelector((state:RootState)=>  state.productsApi )
  const {data} = useGetProductQuery({action: 'get_ids'});
  console.log(data);
  return (
    <div>
      <Header/>
    </div>
  )
}

export default App
