import React, {useCallback, useEffect, useState} from 'react';
import closeButtonB from "../../assets/img/close-b.svg";
import info from "../../assets/img/info.svg";
import dotcoins from "../../assets/img/dotcoins.svg";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../redux/store";
import {CalcTotalPrice} from "../../utils/calcTotalPrice";
import {addPizza, deletePizza, minusPizza} from "../../redux/Slices/cartSlice";
import clsx from "clsx";
import addToOrder01 from '../../assets/img/cart/add/01.png';
import addToOrder02 from '../../assets/img/cart/add/02.jpeg';
import addToOrder03 from '../../assets/img/cart/add/03.jpeg';
import addToOrder04 from '../../assets/img/cart/add/04.jpeg';
import addToOrder05 from '../../assets/img/cart/add/05.jpeg';
import souce01 from '../../assets/img/cart/add/souce/01.jpg';
import souce02 from '../../assets/img/cart/add/souce/02.jpg';
import souce03 from '../../assets/img/cart/add/souce/03.jpg';
import souce04 from '../../assets/img/cart/add/souce/04.png';
import AddOrderItem from "../AddOrderItem/AddOrderItem";
import AddSouce from "../AddSouce/AddSouce";


type CartProps = {
    // closeCart: React.MouseEventHandler<HTMLButtonElement>,
    setOpenPopupInfo: any,
    openPopupInfo: boolean
    openPopupSouces: boolean,
    setOpenPopupSouces: any
}


const Cart: React.FC<CartProps> = ({setOpenPopupInfo,
                                       openPopupInfo,
                                       openPopupSouces,
                                       setOpenPopupSouces
}) => {
    const {cartItems, addToOrder, addSouce} = useSelector((state: RootState) => state.cart);
    const dispatch = useAppDispatch();


    const writeItem = () => {
        if (cartItems.length === 1) {
            return 'товар'
        } else if ((cartItems.length >= 2) && (cartItems.length <= 4)) {
            return 'товара'
        } else return 'товаров'
    }

    const calcSouces = () => {
        const countSouces = addSouce?.filter(item => item.count > 0);
        const totalPrice = countSouces?.reduce((num: number, item: any) => num + item.price, 0)
       return {
           countSouce: countSouces?.length,
           totalPriceSouces: +totalPrice || 0
    }

     }


     const renderAddableItems = useCallback(() => {
        return  addToOrder.filter(item => !item.selected).map(item => {
             return (
                 <AddOrderItem setOpenPopupSouces={setOpenPopupSouces} key={item.id}
                               {...item}/>
             )
         })
      }, [addToOrder, setOpenPopupSouces])

    useEffect(() => {
        calcSouces();
        renderAddableItems()
    }, [addSouce, calcSouces, cartItems, renderAddableItems])

    const pizzaCountPlus = (id: number) => {
        dispatch(addPizza(id))
    }

    const pizzaCountMinus = (id: number) => {
        dispatch(minusPizza(id))
    }

    const deleteItem = (id: number) => {
        dispatch(deletePizza(id))
    }

    const closePopupSouce = () => {
        setOpenPopupSouces(false)
    }


    return (
        <>
            <div className="order__label">
                {cartItems.reduce((num, item) => num + item.count, 0)} {writeItem()} на&nbsp;
                { CalcTotalPrice(cartItems)} ₽</div>

            <div className="order__items">

                <>
                    {cartItems.map(item => {
                        const {
                            title,
                            price,
                            image,
                            removeFromPizza,
                            size,
                            radius,
                            type,
                            addableItems,
                            count,
                            realId,
                            id
                        } = item;
                        return <div key={id} className="order__item item-order">
                            <div className="item-order__top">
                                <button onClick={() => deleteItem(id)} className="item-order__close">
                                    <img src={closeButtonB} alt="картинка"/>
                                </button>
                                <div className="item-order__image-ibg">
                                    <img src={image} alt="картинка"/>
                                </div>
                                <div className="item-order__description">
                                    <div className="item-order__title">{title}</div>
                                    <div className="item-order__options">{size} {radius} см, {type} тесто</div>
                                    <div className="item-order__options">{addableItems?.length > 0 ?
                                        (<b>Добавить: {addableItems.join(', ')}</b>) : ''}</div>
                                    <div className="item-order__options">{removeFromPizza?.length > 0 ?
                                        (`Убрать: ${removeFromPizza.join(', ')}`) : ''}</div>
                                </div>
                            </div>

                            <div className="item-order__bottom">
                                <div className="item-order__price">{price * count} ₽</div>
                                <div className="item-order__quantity">
                                    <button onClick={() => pizzaCountMinus(id)}
                                            className="quantity__button">&mdash;</button>
                                    <div className="quantity__center">{count}</div>
                                    <button onClick={() => pizzaCountPlus(id)} className="quantity__button">+</button>
                                </div>
                            </div>
                        </div>
                    })}

                    {addSouce.filter(item => item.selected).map(item => {
                        const {
                            title,
                            price,
                            image,
                            count,
                            id
                        } = item;
                        return <div key={id} className="order__item item-order">
                            <div className="item-order__top">
                                <button className="item-order__close">
                                    <img src={closeButtonB} alt="картинка"/>
                                </button>
                                <div className="item-order__image-ibg">
                                    <img src={image} alt="картинка"/>
                                </div>
                                <div className="item-order__description">
                                    <div className="item-order__title">Соус {title}</div>
                                </div>
                            </div>

                            <div className="item-order__bottom">
                                <div className="item-order__price">{+price * count} ₽</div>
                                <div className="item-order__quantity">
                                    <button
                                        className="quantity__button">&mdash;</button>
                                    <div className="quantity__center">{count}</div>
                                    <button className="quantity__button">+</button>
                                </div>
                            </div>
                        </div>
                    })
                    }
                </>
            </div>

            <div className="order__add add-order">
                <div className="add-order__title">Добавить к заказу?</div>

                <div className="add-order__items">


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


                    {
                        renderAddableItems()
                        // addToOrder.filter(item => !item.selected).map(item => {
                    //     return (
                    //         <AddOrderItem setOpenPopupSouces={setOpenPopupSouces} key={item.id}
                    //                       {...item}/>
                    //     )
                    // })

                    }


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

                <button className="end-order__button button button__orange">К оформлению заказа
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="button__arrow">
                        <path d="M10 18l6-6-6-6" stroke="#000" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"></path>
                    </svg>
                </button>


            </div>

        </>
    );
};

export default Cart;