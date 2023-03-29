import { createSlice } from "@reduxjs/toolkit"
import { IProductsCart } from "./cartSlice";


export interface IUser {
    id?: string
    password?: string
    displayName: string;
    email: string;
    firstName: string;
    isAdmin: number;
    lastName: string;
    phone: number;
    cart: IProductsCart
    avatar?: string | null
}
interface UserState {
    user: IUser | null
}
const initialState: any = {
    user: null
} as UserState



export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, actions) => {
            state.user = actions.payload
        },
        updateCartUser: (state, actions) => {
            state.user.cart = actions.payload
        },
        deleteUser: (state) => {
            state.user = null
        }
    },
   
})

export default userSlice;
export const { addUser, deleteUser, updateCartUser } = userSlice.actions;