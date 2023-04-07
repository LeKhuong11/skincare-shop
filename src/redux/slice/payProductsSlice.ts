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
    quantity: number,
}
interface IPaymentProductState {
    paymentProducts: IProductsCart[]
}

const initialState: IPaymentProductState = {
    paymentProducts: []
}

const paymentProductSlice = createSlice({
    name: 'payment',
    initialState: initialState,
    reducers: {
        addPaymentProduct: (state, action) => {
            state.paymentProducts = action.payload
        }, 
        clearPayment: (state) => {
            state.paymentProducts = []
        }
    },
    
})

export const { 
    addPaymentProduct,
    clearPayment 
} = paymentProductSlice.actions
export default paymentProductSlice