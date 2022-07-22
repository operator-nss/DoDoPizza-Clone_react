import React, {useEffect, useState} from 'react';
import './cart.scss'
import closeButton from '../../assets/img/close.svg'

import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../redux/store";
import clsx from "clsx";
import {setCartOpened} from "../../redux/Slices/cartSlice";
import Cart from "./Cart";
import CartEmpty from "./CartEmpty";
import {isMobile} from "react-device-detect";
import Preloader from "../Preloader/Preloader";
import {useDebouncedCallback} from "use-debounce";


const CartContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const {cartOpened, cartItems, statusCart} = useSelector((state: RootState) => state.cart);
    const [openPopupInfo, setOpenPopupInfo] = useState(false);
    const [openPopupSouces, setOpenPopupSouces] = useState(false);
    const [isOrderComplete, setIsOrderComplete] = useState(false);

    //Добавление пиццы по кнопке +
    const debounced = useDebouncedCallback(() => {
        setIsOrderComplete(false);
    },1000);

    //Закрыть корзину и все попапы
    const closeCart = () => {
        dispatch(setCartOpened(false));
        setOpenPopupInfo(false);
        setOpenPopupSouces(false);
        debounced()
    }


    //Убирание дерганья при открытии корзины
    useEffect(() => {
        if (cartOpened && !isMobile) {
            document.body.style.paddingRight = '17px';
            document.body.style.overflow = "hidden";
        } else if (cartOpened && isMobile) {
            document.body.style.overflow = "hidden";
        }  else {
            setTimeout(() => {
                document.body.style.overflow = '';
                document.body.style.paddingRight = '';
            }, 300)
        }
    }, [cartOpened])



    return (
        <>
            <div onClick={closeCart} style={cartOpened ? {'visibility': 'visible'} : {'visibility': 'hidden'}}
    className={clsx({open: cartOpened}, "cart__overlay")}/>


            <div className={clsx({open: cartOpened},{loading: statusCart === 'cart loading'}, "cart")}>

                <button onClick={closeCart} className="cart__close">
                    <img src={closeButton} alt="картинка"/>
                </button>

                {statusCart === 'cart loading' ? <Preloader /> :
                <div className={clsx("cart__body", {ordered: isOrderComplete})}>

                    {cartItems.length > 0 ? <Cart openPopupSouces={openPopupSouces}
                                                  setIsOrderComplete={setIsOrderComplete}
                                                  setOpenPopupSouces={setOpenPopupSouces}
                                                  setOpenPopupInfo={setOpenPopupInfo}
                                                  openPopupInfo={openPopupInfo}/> :
                        <CartEmpty isOrderComplete={isOrderComplete} closeCart={closeCart}/>}

                </div>
                }
            </div>
        </>
    );
};

export default CartContainer;