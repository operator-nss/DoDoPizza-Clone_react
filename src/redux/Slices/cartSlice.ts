import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {getCartFromLocalStorage} from "../../utils/getCartFromLocalStorage";


export type PizzaCart = {
    title: string,
    price: number,
    image: string,
    removeFromPizza: string[],
    size: string,
    radius: number,
    type: string,
    addableItems: string[],
    count: number,
    realId: number,
    id: number,
}

export interface CartSliceState {
    totalPrice: number;
    cartItems: PizzaCart[];
    cartOpened: boolean;
    statusCart: string;

}


const initialState: CartSliceState = getCartFromLocalStorage();

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItems: (state, action: PayloadAction<PizzaCart>) => {
            const findItem = state.cartItems.find(item => JSON.stringify(item.removeFromPizza) === JSON.stringify(action.payload.removeFromPizza) && item.realId === action.payload.realId && item.price  === action.payload.price)
            if (findItem) {
                findItem.count++;
            } else {
                state.cartItems.push({
                    ...action.payload,
                    count: 1,
                });
            }
        },
        setCartOpened: (state, action: PayloadAction<boolean>) => {
            state.cartOpened = action.payload
        },
        setStatusCart: (state, action: PayloadAction<string>) => {
            state.statusCart = action.payload;
        },
        addPizza: (state, action: PayloadAction<number>) => {
            const findItem = state.cartItems.find(item => item.id === action.payload);
            if (findItem) {
                findItem.count++;
            }
        },
        minusPizza: (state, action: PayloadAction<number>) => {
            const findItem = state.cartItems.find(item => item.id === action.payload);
            if (findItem) {
                findItem.count > 1 ? findItem.count-- : findItem.count = 1;

            }
        },
        deletePizza: (state, action: PayloadAction<number>) => {
            const newArr = state.cartItems.filter(item => item.id !== action.payload);
            state.cartItems = [...newArr]

        },
    },

})

export const {setCartItems, setCartOpened, setStatusCart, deletePizza, addPizza, minusPizza} = cartSlice.actions

export default cartSlice.reducer