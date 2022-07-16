import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {fetchPizza} from "../asyncActions";



export interface Pizza {
    id: string,
    imageUrl: string,
    image00 : string,
    image11 : string,
    image20 : string,
    image21 : string,
    title: string,
    price: number[],
    realId: string,
    additives: string[],
    removable: string[],
    weight: number[],
}

interface PizzaInterface {
    pizzas: Pizza[],
    status: string,
    error: any
}

const initialState: PizzaInterface = {
    pizzas: [],
    status: 'pizza loading',
    error: null,
}

export const phoneSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        // setSearchValue: (state, action: PayloadAction<string>) => {
        //     state.searchValue = action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizza.pending, (state) => {
            state.status = 'pizza loading';
            state.pizzas = [];
        })
        builder.addCase(fetchPizza.fulfilled, (state, action: PayloadAction<Pizza[]>) => {
            state.pizzas = action.payload;
            state.status = 'pizza success';
        })
        builder.addCase(fetchPizza.rejected, (state, action: PayloadAction<any>) => {
            state.status = 'error';
            state.error = action.payload;
        })
    }

})

export const { } = phoneSlice.actions

export default phoneSlice.reducer