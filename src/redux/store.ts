import { configureStore } from '@reduxjs/toolkit'
import pizza from './Slices/pizzaSlice'
import cart from './Slices/cartSlice'
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        pizza,
        cart,

    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()