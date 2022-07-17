import {PizzaCart} from "../redux/Slices/cartSlice";


export const CalcTotalPrice = (items: PizzaCart[]) => {
    return  items?.reduce((sum, obj) => {
        return obj.price * obj.count + sum
    }, 0)
}

export const CalcTotalItems = (items: PizzaCart[]) => {
    return  items.reduce((sum, obj) => {
        return obj.count + sum
    }, 0)
}
