import { mainApi } from './../../api/MainApiSlice';
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';
import cartReducer from '../../../features/ShoppingModal/reduxSlice/AddToCart';

export const store = configureStore ({
  reducer:{
    cartReducer,
    [mainApi.reducerPath]: mainApi.reducer,
    
  },
  middleware:(getDefaultMiddleware) => 
  getDefaultMiddleware().concat(mainApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState> ;
export type AppDispatch = typeof store.dispatch;