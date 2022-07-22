import {configureStore} from '@reduxjs/toolkit'
import pizza from './Slices/pizzaSlice'
import cart from './Slices/cartSlice'
import order from './Slices/orderSlice'
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        pizza,
        cart,
        order
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()