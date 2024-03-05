import { ThunkDispatch } from '@reduxjs/toolkit';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import md5 from 'md5'

const password = 'Valantis'; 
const timestamp = new Date().toISOString().slice(0, 10).split('-').join(''); 
const data = `${password}_${timestamp}`;

const authorizationString = md5(data);

export const mainApi = createApi({
    reducerPath: "productsApi",
    tagTypes: ['products'],
    baseQuery: fetchBaseQuery({
        baseUrl:"http://api.valantis.store:40000",
        prepareHeaders: (headers, { getState }) => {
          headers.set('X-Auth', authorizationString)
          return headers 
        }
      }),
    endpoints:(builder) => ({
        getProduct: builder.query({
          query:(body)=>({
            url: '/',
            method:'POST',
            body
          })
        }),
        getAllProducts: builder.mutation({
            query:(body)=>({
              url: '/',
              method: 'POST',
              body,
            }),
          }),
    }),
});


export default mainApi.reducer
export const {useGetAllProductsMutation,useGetProductQuery} = mainApi;