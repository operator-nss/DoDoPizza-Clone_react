import React, {memo, useCallback, useEffect} from 'react';
import closeButtonB from "../../assets/img/close-b.svg";
import info from "../../assets/img/info.svg";
import dotcoins from "../../assets/img/dotcoins.svg";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../redux/store";
import {CalcTotalPrice} from "../../utils/calcTotalPrice";
import {addPizza, deletePizza, minusPizza, resetCartItems, setStatusCart} from "../../redux/Slices/cartSlice";
import clsx from "clsx";
import AddOrderItem from "../AddOrderItem/AddOrderItem";
import AddSouce from "../AddSouce/AddSouce";
import axios from "axios";
import {setOrderId} from "../../redux/Slices/orderSlice";
import ItemOrder from "./ItemOrder";


type CartProps = {
    // closeCart: React.MouseEventHandler<HTMLButtonElement>,
    setOpenPopupInfo: any,
    openPopupInfo: boolean
    openPopupSouces: boolean,
    setOpenPopupSouces: any,
    setIsOrderComplete: any
}


const Cart: React.FC<CartProps> = memo(({
                                       setOpenPopupInfo,
                                       openPopupInfo,
                                       openPopupSouces,
                                       setOpenPopupSouces,
                                       setIsOrderComplete
                                   }) => {
    const {cartItems, statusCart, addToOrder, addSouce} = useSelector((state: RootState) => state.cart);
    const dispatch = useAppDispatch();

//Правило орфографии для разного количества товара
    const writeItem = useCallback(() => {
        if (cartItems.length === 1) {
            return 'товар'
        } else if ((cartItems.length >= 2) && (cartItems.length <= 4)) {
            return 'товара'
        } else return 'товаров'
    },[cartItems.length])



        //Рендер товаров которые можно добавить
    const renderAddableItems = useCallback(() => {
        return addToOrder.filter(item => !item.selected).map(item => {
            return (
                <AddOrderItem setOpenPopupSouces={setOpenPopupSouces} key={item.id}
                              {...item}/>
            )
        })
    }, [addToOrder, setOpenPopupSouces])

    useEffect(() => {
        renderAddableItems()
    }, [addSouce, cartItems, renderAddableItems])



    //Закрытие попапа соусов
    const closePopupSouce = () => {
        setOpenPopupSouces(false)
    }

    //Сделать заказ
    const onClickOrder = async () => {
        try {
            dispatch(setStatusCart('cart loading'));
            const {data} = await axios.post('https://62a7219797b6156bff884996.mockapi.io/orders', {
                items: cartItems,
            });
            dispatch(setOrderId(data.id));
            setIsOrderComplete(true);
            dispatch(resetCartItems());

        } catch (error) {
            alert('Ошибка при создании заказа :(');
        }
        dispatch(setStatusCart('cart success'));
    };


    return (
        <>
            <div className="order__label">
                {cartItems.reduce((num, item) => num + item.count, 0)} {writeItem()} на&nbsp;
                {CalcTotalPrice(cartItems)} ₽
            </div>

            <div className="order__items">

                <>
                    {cartItems.map(item => {
                        return <ItemOrder key={item.id} {...item} />
                    })}

                </>
            </div>

            <div className="order__add add-order">
                <div className="add-order__title">Добавить к заказу?</div>

                <div className="add-order__items">
                    {renderAddableItems()}

                    <div
                        onClick={closePopupSouce}
                        style={openPopupSouces ? {'visibility': 'visible'} : {'visibility': 'hidden'}}
                        className={clsx({open: openPopupSouces}, "cart__overlay")}/>

                    <div className={clsx({active: openPopupSouces}, "popup-order")}>
                        <button onClick={closePopupSouce} className="popup-order__close">
                            <img src={closeButtonB} alt=""/>
                        </button>
                        <div className="popup-order__title">Соусы к бортикам и закускам</div>
                        <div className="popup-order__items">

                            {addSouce.map(item => {
                                return (
                                    <AddSouce key={item.id} {...item}/>
                                )
                            })
                            }
                        </div>

                    </div>


                </div>
            </div>


            <div className="order__end end-order">
                <div className="end-order__promo">
                    <input type="text" placeholder="Промокод"/>
                </div>
                <div className="end-order__quantity quantity-end-order">

                    <div className="quantity-end-order__items">
                        <div className="quantity-end-order__number">{cartItems.length} {writeItem()}

                        </div>
                        <div className="quantity-end-order__price">{(CalcTotalPrice(cartItems))} ₽</div>
                    </div>

                    <div className="quantity-end-order__items">
                        <div className="quantity-end-order__dodo dodo-order">
                            <div className="dodo-order__text">Начислим бонусы</div>

                            <div onClick={() => setOpenPopupInfo(false)}
                                 className={clsx({open: openPopupInfo}, 'info-popup dodo-order__popup')}>
                                Бонусы — валюта, которую можно потратить на подарки в мобильном приложении
                            </div>

                            <button onClick={() => setOpenPopupInfo(!openPopupInfo)} className="dodo-order__info">
                                <img src={info} alt="картинка"/>
                            </button>
                        </div>
                        <div className="quantity-end-order__price-dodo">
                            <div className="dodo-order__number">+{(CalcTotalPrice(cartItems) / 20).toFixed(0)}</div>
                            <div className="dodo-order__image">
                                <img src={dotcoins} alt="картинка"/>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="end-order__sum sum-end-order">
                    <div className="sum-end-order__title">Сумма заказа</div>
                    <div className="sum-end-order__price">{CalcTotalPrice(cartItems)} ₽</div>
                </div>

                <button onClick={onClickOrder} disabled={statusCart === 'cart loading'}
                        className="end-order__button button button__orange">К оформлению заказа
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="button__arrow">
                        <path d="M10 18l6-6-6-6" stroke="#000" strokeWidth="2" strokeLinecap="round"
    strokeLinejoin="round"/>
                    </svg>
                </button>


            </div>

        </>
    );
});

export default Cart;