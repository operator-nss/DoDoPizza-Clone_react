import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {fetchCart} from "../asyncActions";
import {Pizza} from "./pizzaSlice";



interface CartInterface {
    cartOpened: boolean,
    cartItems: Pizza[],
    statusCart: string,
}

const initialState: CartInterface = {
    cartOpened: false,
    cartItems: [],
    statusCart: 'cart idle',
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItems: (state, action:PayloadAction<Pizza[]>) => {
            state.cartItems = action.payload;
        },
        setCartOpened: (state, action:PayloadAction<boolean>) => {
            state.cartOpened = action.payload
        },
        setStatusCart: (state, action:PayloadAction<string>) => {
            state.statusCart = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCart.pending, (state) => {
            state.cartItems = [];
        })
        builder.addCase(fetchCart.fulfilled, (state, action:PayloadAction<Pizza[]>) => {
            state.cartItems = action.payload;
        })
        builder.addCase(fetchCart.rejected, (state, action:PayloadAction<any>) => {
            console.log(action.payload)
            state.statusCart = 'error';
        })
    }
})

export const { setCartItems, setCartOpened, setStatusCart } = cartSlice.actions

export default cartSlice.reducer