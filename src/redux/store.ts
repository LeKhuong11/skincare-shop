import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux";
import { TypedUseSelectorHook, useSelector } from "react-redux/es/exports";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./slice/userSlice";


//Persit Config
const persistConfig = {
    key: 'root',
    storage: storage,
}

//Root Reducer
const rootReducer = combineReducers({
   user: userSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer) 


export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		})
})


export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: ()=> typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector