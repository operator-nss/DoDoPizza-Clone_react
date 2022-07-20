import {CalcTotalPrice} from "./calcTotalPrice";
import {PizzaCart} from "../redux/Slices/cartSlice";
import {addSouce, addOrder} from "../Data/vatiables";
import {nanoid} from "@reduxjs/toolkit";


export const getCartFromLocalStorage = () => {
    const data = localStorage.getItem('dodoPizza');
    const items = data ? JSON.parse(data) : [];
    const totalPrice = CalcTotalPrice(items);
    let arrAdded: any[] = [];
    let addToOrderItems: { title: any; }[] = [];
    let newOrderItems: { selected: boolean; id: number; realId: number; title: string; price: string; params: string; image: string; count: number; }[] = [];

    for (let j = 0; j <= addOrder.length; j++) {
        addToOrderItems = items?.filter((item: any) => {
            if (item.title === addOrder[j]?.title) {
                item.selected = true;
                item.id = nanoid();
                arrAdded.push(item)
            }

        })
    }

const notAddedArr = [];
   const  addOrderArr = addOrder.sort((a:any, b:any) => a.realId - b.realId);
   const  arrAddedArr = arrAdded.sort((a:any, b:any) => a.realId - b.realId);

    for(let i = 0; i <= addOrder.length; i++) {
        if(addOrderArr[i]?.realId !== arrAddedArr[i]?.realId) {
            notAddedArr.push(addOrderArr[i])
        }
    }

    console.log(addOrderArr)
    console.log(arrAddedArr)
    console.log(notAddedArr)

    return {
        cartItems: items as PizzaCart[],
        totalPrice,
        cartOpened: false,
        statusCart: 'idle',
        addToOrder: [...newOrderItems, ...addToOrderItems],
        addSouce
    };
}