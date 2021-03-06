import {CalcTotalPrice} from "./calcTotalPrice";
import {PizzaCart} from "../redux/Slices/cartSlice";
import {addSouce, addOrder} from "../Data/vatiables";
import {nanoid} from "@reduxjs/toolkit";


export const getCartFromLocalStorage = () => {
    const data = localStorage.getItem('dodoPizza');
    const items = data ? JSON.parse(data) : [];
    const totalPrice = CalcTotalPrice(items);
    let arrAdded: any[] = [];
    let arrSouceAdded: any[] = [];
    let addToOrderItems: { title: any; }[] = [];

    let addSouceArr = [];

    for (let j = 0; j <= addOrder.length; j++) {
        addToOrderItems = items?.filter((item: any) => {
            if (item.title === addOrder[j]?.title) {
                item.selected = true;
                item.id = nanoid();
                arrAdded.push(item)
            }

        })
    }

    for (let j = 0; j <= addSouce.length; j++) {
        addSouceArr = items?.filter((item: any) => {
            if (item.title === addSouce[j]?.title) {
                item.selected = true;
                item.id = nanoid();
                arrSouceAdded.push(item)
            }

        })
    }

    const differenceSouce = addSouce.filter(ar => !arrSouceAdded.find(rm => (rm.realId === ar.realId && ar.title === rm.title)))


    const notAddedArr = [];
    const addOrderArr = addOrder.sort((a: any, b: any) => a.realId - b.realId);
    const arrAddedArr = arrAdded.sort((a: any, b: any) => a.realId - b.realId);

    for (let i = 0; i <= addOrder.length; i++) {
        if (addOrderArr[i]?.realId !== arrAddedArr[i]?.realId) {
            notAddedArr.push(addOrderArr[i])
        }
    }

    const difference = addOrderArr.filter(ar => !arrAddedArr.find(rm => (rm.realId === ar.realId && ar.title === rm.title)))


    return {
        cartItems: items as PizzaCart[],
        totalPrice,
        cartOpened: false,
        statusCart: 'idle',
        addToOrder: [...difference],
        addSouce: [...arrSouceAdded, ...differenceSouce]
    };
}