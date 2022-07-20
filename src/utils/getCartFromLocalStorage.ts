import {CalcTotalPrice} from "./calcTotalPrice";
import {AddableToCart, PizzaCart} from "../redux/Slices/cartSlice";
import addToOrder01 from "../assets/img/cart/add/01.png";
import addToOrder02 from "../assets/img/cart/add/02.jpeg";
import addToOrder03 from "../assets/img/cart/add/03.jpeg";
import addToOrder04 from "../assets/img/cart/add/04.jpeg";
import addToOrder05 from "../assets/img/cart/add/05.jpeg";

const addToOrder: ({ image: any; price: string; count: number; id: number; title: string; params: string; selected: boolean } | { image: any; price: string; count: number; id: number; title: string; params: string; selected: boolean } | { image: any; price: string; count: number; id: number; title: string; params: string; selected: boolean } | { image: any; price: string; count: number; id: number; title: string; params: string; selected: boolean } | { image: any; price: string; count: number; id: number; title: string; params: string; selected: boolean })[] =[
    {selected: false, id: 0, title: 'Соусы', price: '', params: '', image: addToOrder01, count: 0},
    {selected: false, id: 1, title: 'Картофель из печи', price: '179', params: '160 г', image: addToOrder02, count: 0},
    {selected: false, id: 2, title: 'Бруслетики, 16шт', price: '205', params: '200 г', image: addToOrder03, count: 0},
    {selected: false, id: 3, title: 'Додстер', price: '169', params: '', image: addToOrder04, count: 0},
    {selected: false, id: 4, title: 'Молочный коктейль с печеньем Орео', price: '199', params: '0,3 л', image: addToOrder05, count: 0},
];

export const getCartFromLocalStorage = () => {
    const data = localStorage.getItem('dodoPizza');
    const items = data ? JSON.parse(data) : [];
    const totalPrice = CalcTotalPrice(items);
    return {
        cartItems: items as PizzaCart[],
        totalPrice,
        cartOpened: false,
        statusCart: 'idle',
        addToOrder
    };
}