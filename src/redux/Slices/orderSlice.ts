import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {fetchOrders} from "../asyncActions";


interface OrdersInterface {
    orders: any[],
    orderId: number,
    statusOrder: string,
}


const initialState: OrdersInterface = {
    orders: [],
    orderId: 0,
    statusOrder: 'idle'
}

export const ordersSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrders: (state, action:PayloadAction<any[]>) => {
            state.orders = action.payload;
        },
        setOrderId: (state, action:PayloadAction<number>) => {
            state.orderId = action.payload;
        },
        setStatusOrder: (state, action:PayloadAction<string>) => {
            state.statusOrder = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchOrders.pending, (state) => {
            state.orders = [];
        })
        builder.addCase(fetchOrders.fulfilled, (state, action) => {
            state.orders = action.payload.reduce((prev: any, obj: any) => [...prev, ...obj.items], []);
            state.orderId = action.payload.length;
        })
        builder.addCase(fetchOrders.rejected, (state, action:PayloadAction<any>) => {
            console.log(action.payload)
        })
    }
})

export const {setOrders, setOrderId, setStatusOrder} = ordersSlice.actions

export default ordersSlice.reducer