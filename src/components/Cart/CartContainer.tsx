import React from 'react';
import './cart.scss'

import closeButton from '../../assets/img/close.svg'
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../redux/store";
import clsx from "clsx";
import {setCartOpened} from "../../redux/Slices/cartSlice";
import Cart from "./Cart";
import CartEmpty from "./CartEmpty";


const CartContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const {cartOpened, cartItems} = useSelector((state: RootState) => state.cart);

    const closeCart = () => {
        dispatch(setCartOpened(false));
    }

    return (
        <>
            <div onClick={closeCart} style={cartOpened ? {'visibility': 'visible'} : {'visibility': 'hidden'}}
                 className={clsx({open: cartOpened}, "cart__overlay")}></div>


            <div className={clsx({open: cartOpened}, "cart")}>

                <button onClick={closeCart} className="cart__close">
                    <img src={closeButton} alt="картинка"/>
                </button>

                <div className="cart__body">

                    {cartItems.length > 0 ? <Cart closeCart={closeCart}/> : <CartEmpty closeCart={closeCart}/>}

                </div>

            </div>
        </>
    );
};

export default CartContainer;