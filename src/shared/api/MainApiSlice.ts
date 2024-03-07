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
          query:({})=>({
            url: '/',
            method:'POST',
            body: {
              action: "get_items",
              params: {ids: ["1789ecf3-f81c-4f49-ada2-83804dcc74b0"]}
          }
          })
        }),
    }),
});


export default mainApi.reducer
export const {useGetProductsMutation,useGetAllProductQuery} = mainApi;