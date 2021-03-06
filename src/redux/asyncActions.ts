import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Pizza} from "./Slices/pizzaSlice";

export const fetchPizza = createAsyncThunk<Pizza[]>(
    'pizza/fetchPizza',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await axios.get('https://62a7219797b6156bff884996.mockapi.io/items');
            return data;
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
)

export const fetchOrders = createAsyncThunk<any[]>(
    'pizza/fetchOrders',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await axios.get('https://62a7219797b6156bff884996.mockapi.io/orders');
            return data;
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
)
