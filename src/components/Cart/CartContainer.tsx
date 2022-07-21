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


const CartContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const {cartOpened, cartItems} = useSelector((state: RootState) => state.cart);
    const [openPopupInfo, setOpenPopupInfo] = useState(false);
    const [openPopupSouces, setOpenPopupSouces] = useState(false);


    const closeCart = () => {
        dispatch(setCartOpened(false));
        setOpenPopupInfo(false);
        setOpenPopupSouces(false)
    }

    useEffect(() => {
        if (cartOpened && !isMobile) {
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = '17px';
        } else {
            setTimeout(() => {
                document.body.style.overflow = '';
                document.body.style.paddingRight = '';
            }, 300)
        }
    }, [cartOpened])


    return (
        <>
            <div onClick={closeCart} style={cartOpened ? {'visibility': 'visible'} : {'visibility': 'hidden'}}
                 className={clsx({open: cartOpened}, "cart__overlay")}></div>


            <div className={clsx({open: cartOpened}, "cart")}>

                <button onClick={closeCart} className="cart__close">
                    <img src={closeButton} alt="картинка"/>
                </button>

                <div className="cart__body">

                    {cartItems.length > 0 ? <Cart openPopupSouces={openPopupSouces}
                                                  setOpenPopupSouces={setOpenPopupSouces}
                                                  setOpenPopupInfo={setOpenPopupInfo}
                                                  openPopupInfo={openPopupInfo}/> :
                        <CartEmpty closeCart={closeCart}/>}

                </div>

            </div>
        </>
    );
};

export default CartContainer;