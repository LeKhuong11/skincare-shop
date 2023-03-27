import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export interface IProducts {
    _id: string
    name: string
    price: number
    email: string
    description: string
    discouter: number
    star: number
    categories: number
    amount: string
    color: string
    bgColor: string
    oldPrice: number
    img: {
        public_id: string
        url: string
    }
}
interface IProductsState {
    products: IProducts[]
}

const initialState: IProductsState = {
    products: []
}

//Fetching data from firebase
export const fetchProducts = createAsyncThunk(
    "products/fetch",
    async () => {
        let getListProduct: any = [] 
        try {
            getListProduct = await axios.get('https://backend-skincare-shop.vercel.app/api/products')
            
        } catch(err) {
            console.log(err);
        }
    return getListProduct
})

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload.data
        });
      }, 
   
})

export default productSlice;
export const {  } = productSlice.actions;