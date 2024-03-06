import { useSelector } from "react-redux"
import { RootState } from "../shared/Redux/store/store"
import { useGetAllProductsMutation, useGetProductQuery } from "../shared/api/MainApiSlice";
import { getStore } from "../shared/api/api";
import { Header } from "../widgets/header";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Catalog } from "../pages/Catalog";


function App() {
  const api = useSelector((state:RootState)=>  state.productsApi )
  const {data} = useGetProductQuery({action: 'get_ids'});
  console.log(data);
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Catalog/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
