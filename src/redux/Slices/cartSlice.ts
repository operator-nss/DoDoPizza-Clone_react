import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {getCartFromLocalStorage} from "../../utils/getCartFromLocalStorage";
import {addSouce} from "../../Data/vatiables";



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

export type AddableToCart = {
    title: any,
    price: any,
    image: any,
    realId: any,
    id: any,
    count: any,
    params:any | null,
    selected: any,
}


export interface CartSliceState {
    totalPrice: number;
    cartItems: any[];
    cartOpened: boolean;
    statusCart: string;
    addToOrder: any[];
    addSouce: any[]
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

            const newObj = state.cartItems.filter(item => item.id === action.payload);
            const newArrayToOrder = state.addToOrder.filter(item => item.title !== newObj[0].title)
            if(newObj && newObj[0].selected === true) {
                newObj[0].selected = false;
                newObj[0].id = state.addToOrder.length;
                state.addToOrder = [...newArrayToOrder, newObj[0]]
            }
            state.cartItems = [...newArr];
        },
        setSouceItems: (state, action: PayloadAction<AddableToCart>) => {
            const findItem = state.cartItems.find(item => item.title === action.payload.title);
            const findAddable = state.addToOrder.find(item => item.title === action.payload.title);
            findAddable.selected = true;
            // const findAddableSouce = state.addSouce.find(item => item.title === action.payload.title);
            // findAddableSouce.selected = true;
            if (findItem) {
                findItem.count++;
            } else {
                state.cartItems.push({
                    ...action.payload,
                    count: 1,
                    selected: true
                });

            }
        },
        setAddToOrder:(state, action: PayloadAction<AddableToCart>) => {
            const findItemOrder = state.addToOrder.find(item => item.title === action.payload.title);
            const findItemCart = state.cartItems.find(item => item.title === action.payload.title);
            findItemOrder.selected = true;
            if (findItemCart) {
                findItemCart.count++;
                findItemOrder.count++;
            } else {
                state.cartItems.push({
                    ...action.payload,
                    count: 1,
                    selected: true
                });
            }
        },
        setAddSouce:(state, action: PayloadAction<AddableToCart>) => {
            const findItem = state.addSouce.find(item => item.title === action.payload.title)
            if (findItem) {
                findItem.count++;
            } else {
                state.cartItems.push({
                    ...action.payload,
                    count: 1,
                    selected: true
                });
            }
        },

    },

})

export const {setCartItems,
    setCartOpened,
    setStatusCart,
    setAddSouce,
    setAddToOrder,
    deletePizza,
    setSouceItems,
    addPizza,
    minusPizza} = cartSlice.actions

export default cartSlice.reducer