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
        prepareHeaders: (headers, { }) => {
          headers.set('X-Auth', authorizationString)
          return headers 
        }
      }),
    endpoints:(builder) => ({
        getAllProduct: builder.query({
          query:()=>({
            url: '/',
            method:'POST',
            body: {
              action: 'get_ids',
            }
          })
        }),
        getProducts: builder.mutation({
          query:({limit = 16, page = 1})=>({
            url: '/',
            method:'POST',
            body: {
              action: 'get_ids',
              params: {
                    offset: limit * page, 
                    limit: limit
                  }
            }
          })
        }),
        getProductsObj: builder.mutation({
          query:(prod)=>({
            url: '/',
            method:'POST',
            body: {
              action: "get_items",
              params: {ids: prod}
          }
          })
        }),
    }),
});


export default mainApi.reducer
export const {useGetProductsMutation,useGetAllProductQuery,useGetProductsObjMutation} = mainApi;