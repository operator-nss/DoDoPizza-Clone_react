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
    id: number | string,
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
        resetCartItems: (state) => {
            state.cartItems = [];
        },
        setCartOpened: (state, action: PayloadAction<boolean>) => {
            state.cartOpened = action.payload
        },
        setStatusCart: (state, action: PayloadAction<string>) => {
            state.statusCart = action.payload;
        },
        addPizza: (state, action: PayloadAction<number | string>) => {
            const findItem = state.cartItems.find(item => item.id === action.payload);
            const findSouce = state.addSouce.find(item => item.id === action.payload);
            if (findItem) {
                findItem.count++;
            }
            if (findSouce) {
                findSouce.count++;
            }

        },
        minusPizza: (state, action: PayloadAction<number | string>) => {
            const findItem = state.cartItems.find(item => item.id === action.payload);
            const findSouce = state.addSouce.find(item => item.id === action.payload);
            if (findItem) {
                findItem.count > 1 ? findItem.count-- : findItem.count = 1;
            }
            if (findSouce) {
                findSouce.count > 1 ? findSouce.count-- : findSouce.count = 1;
            }
        },
        minusSouce: (state, action: PayloadAction<number | string>) => {
            const findItem = state.cartItems.find(item => item.id === action.payload);
            const findSouce = state.addSouce.find(item => item.id === action.payload);
            if (findItem) {
                findItem.count--;
                findSouce.count--;
            }
        },
        deletePizza: (state, action: PayloadAction<number | string>) => {
            const newArr = state.cartItems.filter(item => item.id !== action.payload);

            const newObj = state.cartItems.filter(item => item.id === action.payload);

            const findSouce = state.addSouce.find(item => item.id === action.payload);
            if(findSouce) {
                const newObjSouce = state.cartItems.filter(item => item.id === action.payload);
                const newArrayToOrder = state.addSouce.filter(item => item.title !== newObjSouce[0].title);
                if(newObjSouce && newObjSouce[0].selected === true) {
                    newObjSouce[0].selected = false;
                    newObjSouce[0].id = newObjSouce[0].realId;
                    newObjSouce[0].count = 0;
                    state.addSouce = [...newArrayToOrder, newObjSouce[0]];
                }
            }

            const newArrayToOrder = state.addToOrder.filter(item => item.title !== newObj[0].title);
            if(newObj && newObj[0].selected === true) {
                newObj[0].selected = false;
                newObj[0].id = state.addToOrder.length;
                state.addToOrder = [...newArrayToOrder, newObj[0]]
            }
            state.cartItems = [...newArr];
        },
        deleteSouce:(state, action: PayloadAction<number | string>) => {
            const newArr = state.cartItems.filter(item => item.id !== action.payload);
            const findSouce = state.addSouce.find(item => item.id === action.payload);
            const newObj = state.cartItems.filter(item => item.id === action.payload);
            const newArrayToOrder = state.addSouce.filter(item => item.title !== newObj[0].title);
            if(newObj && newObj[0].selected === true) {
                newObj[0].selected = false;
                newObj[0].id = newObj[0].realId;
                newObj[0].count = 0;
                state.addSouce = [...newArrayToOrder, newObj[0]];
            }
            state.cartItems = [...newArr];

        },
        setSouceItems: (state, action: PayloadAction<AddableToCart>) => {
            const findItem = state.cartItems.find(item => item.title === action.payload.title);
            const findSouce = state.addSouce.find(item => item.id === action.payload.id);
            findSouce.selected = true;
            findSouce.count = findSouce.count + 1;
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
    resetCartItems,
    setAddSouce,
    setAddToOrder,
    deletePizza,
    setSouceItems,
    addPizza,
    minusPizza,
    minusSouce,
    deleteSouce} = cartSlice.actions

export default cartSlice.reducer