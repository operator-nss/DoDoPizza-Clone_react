import {CalcTotalPrice} from "./calcTotalPrice";
import {PizzaCart} from "../redux/Slices/cartSlice";


export const getCartFromLocalStorage = () => {
    const data = localStorage.getItem('dodoPizza');
    const items = data ? JSON.parse(data) : [];
    const totalPrice = CalcTotalPrice(items);
    return {
        cartItems: items as PizzaCart[],
        totalPrice,
        cartOpened: false,
        statusCart: 'idle'
    };
}