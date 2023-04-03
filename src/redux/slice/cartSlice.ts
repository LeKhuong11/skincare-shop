import { createSlice } from "@reduxjs/toolkit";

export interface IProductsCart {
    _id: string
    name: string
    price: number
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
    quantity: number
}
interface ICartState {
    cart: IProductsCart[]
}

const initialState: ICartState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addCart: (state, action) => {
            state.cart = action.payload
        }, 
        clearCart: (state) => {
            state.cart = []
        }
    },
    
})

export const { 
    addCart,
    clearCart 
} = cartSlice.actions
export default cartSlice