import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    Cart:[
    {product: "hello", price: 100, img: 'image'}

    ],
}

export const addToCart = createSlice({
  name: 'addToCart',
  initialState,
  reducers: {
    addCart: (state:any,action:PayloadAction<any>)=>{
        return{
            ...state,
            Cart:[
                ...state.Cart, 
                action.payload,
            ],       
        }
    },
    delCart:(state,action:PayloadAction<any>)=>{
        state.Cart = state.Cart.filter((obj:any) => obj.id !== action.payload.id)
    }
  },
})

export const {addCart,delCart} = addToCart.actions

export default addToCart.reducer