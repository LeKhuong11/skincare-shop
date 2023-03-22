import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


export interface IUser {
    id?: string
    password?: string
    displayName: string;
    email: string;
    firstName: string;
    isAdmin: number;
    lastName: string;
    phone: number;
    avatar?: null
}
interface UserState {
    user: IUser | null
}
const initialState: any = {
    user: {
        id: 'ukf2335236ss',
        displayName: 'Khuong Le',
        email: '11lekhuong@gmail.com',
        firstName: 'Le',
        lastName: 'Khuong',
        isAdmin: 1,
    
    }
} as UserState


//Fetching data from firebase
export const fetchUser = createAsyncThunk(
    "user/fetch",
    async () => {
       

})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, actions) => {
            state.user = actions.payload
        },
        deleteUser: (state) => {
            state.user = null
        }
    },
   
})

export default userSlice;
export const { deleteUser } = userSlice.actions;