import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import md5 from 'md5'

const password = 'Valantis'; 
const timestamp = new Date().toISOString().slice(0, 10).split('-').join(''); 
const data = `${password}_${timestamp}`;

const authorizationString = md5(data);

export const ProductApi = createApi({
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
        getProductTemplates: builder.query({
          query:()=>({
            url: '/',
            method:'POST',
            body: {
              action: 'get_ids',
            }
          })
        }),
        getProductTemplate: builder.mutation({
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
    }),
});


export default ProductApi.reducer
export const {useGetProductTemplateMutation,useGetProductTemplatesQuery} = ProductApi;