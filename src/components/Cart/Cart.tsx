import React from 'react';
import closeButtonB from "../../assets/img/close-b.svg";
import pizza from "../../assets/img/pizza/indeyka/indeyka-big.jpeg";
import info from "../../assets/img/info.svg";
import dotcoins from "../../assets/img/dotcoins.svg";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

type CartProps = {
    closeCart: React.MouseEventHandler<HTMLButtonElement>
}


const Cart: React.FC<CartProps> = ({closeCart}) => {


    return (
        <>
            <div className="order__label">1 товар на 739 ₽</div>

            <div className="order__items">

                <div className="order__item item-order">
                    <div className="item-order__top">
                        <button className="item-order__close">
                            <img src={closeButtonB} alt="картинка"/>
                        </button>
                        <div className="item-order__image-ibg">
                            <picture>
                                <source srcSet={pizza} type="image/webp"/>
                                <img
                                    src={pizza} alt="картинка"/>
                            </picture>
                        </div>
                        <div className="item-order__description">
                            <div className="item-order__title">Индейка с овощами гриль</div>
                            <div className="item-order__options">Средняя 30 см, традиционное тесто</div>
                        </div>
                    </div>

                    <div className="item-order__bottom">
                        <div className="item-order__price">739 ₽</div>
                        <div className="item-order__quantity">
                            <button className="quantity__button">&mdash;</button>
                            <div className="quantity__center">1</div>
                            <button className="quantity__button">+</button>
                        </div>
                    </div>
                </div>

                <div className="order__item item-order">
                    <div className="item-order__top">
                        <button className="item-order__close">
                            <img src={closeButtonB} alt="картинка"/>
                        </button>
                        <div className="item-order__image-ibg">
                            <picture>
                                <source srcSet={pizza} type="image/webp"/>
                                <img
                                    src={pizza} alt="картинка"/>
                            </picture>
                        </div>
                        <div className="item-order__description">
                            <div className="item-order__title">Индейка с овощами гриль</div>
                            <div className="item-order__options">Средняя 30 см, традиционное тесто</div>
                        </div>
                    </div>

                    <div className="item-order__bottom">
                        <div className="item-order__price">739 ₽</div>
                        <div className="item-order__quantity">
                            <button className="quantity__button">&mdash;</button>
                            <div className="quantity__center">1</div>
                            <button className="quantity__button">+</button>
                        </div>
                    </div>
                </div>

                <div className="order__item item-order">
                    <div className="item-order__top">
                        <button className="item-order__close">
                            <img src={closeButtonB} alt="картинка"/>
                        </button>
                        <div className="item-order__image-ibg">
                            <picture>
                                <source srcSet={pizza} type="image/webp"/>
                                <img
                                    src={pizza} alt="картинка"/>
                            </picture>
                        </div>
                        <div className="item-order__description">
                            <div className="item-order__title">Индейка с овощами гриль</div>
                            <div className="item-order__options">Средняя 30 см, традиционное тесто</div>
                        </div>
                    </div>

                    <div className="item-order__bottom">
                        <div className="item-order__price">739 ₽</div>
                        <div className="item-order__quantity">
                            <button className="quantity__button">&mdash;</button>
                            <div className="quantity__center">1</div>
                            <button className="quantity__button">+</button>
                        </div>
                    </div>
                </div>

                <div className="order__item item-order">
                    <div className="item-order__top">
                        <button className="item-order__close">
                            <img src={closeButtonB} alt="картинка"/>
                        </button>
                        <div className="item-order__image-ibg">
                            <picture>
                                <source srcSet={pizza} type="image/webp"/>
                                <img
                                    src={pizza} alt="картинка"/>
                            </picture>
                        </div>
                        <div className="item-order__description">
                            <div className="item-order__title">Индейка с овощами гриль</div>
                            <div className="item-order__options">Средняя 30 см, традиционное тесто</div>
                        </div>
                    </div>

                    <div className="item-order__bottom">
                        <div className="item-order__price">739 ₽</div>
                        <div className="item-order__quantity">
                            <button className="quantity__button">&mdash;</button>
                            <div className="quantity__center">1</div>
                            <button className="quantity__button">+</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="order__add add-order">
                <div className="add-order__title">Добавить к заказу?</div>

                <div className="add-order__items">

                    <div className="add-order__item">
                        <div className="add-order__image">
                            <picture>
                                <source srcSet={pizza} type="image/webp"/>
                                <img
                                    src={pizza} alt="картинка"/>
                            </picture>
                        </div>
                        <div className="add-order__label">
                            <div className="add-order__text">Картофель из печи, большой</div>
                            <div className="add-order__price">179 ₽</div>
                        </div>
                    </div>

                    <div className="add-order__item">
                        <div className="add-order__image">
                            <picture>
                                <source srcSet={pizza} type="image/webp"/>
                                <img
                                    src={pizza} alt="картинка"/>
                            </picture>
                        </div>
                        <div className="add-order__label">
                            <div className="add-order__text">Картофель из печи, большой</div>
                            <div className="add-order__price">179 ₽</div>
                        </div>
                    </div>

                    <div className="add-order__item">
                        <div className="add-order__image">
                            <picture>
                                <source srcSet={pizza} type="image/webp"/>
                                <img
                                    src={pizza} alt="картинка"/>
                            </picture>
                        </div>
                        <div className="add-order__label">
                            <div className="add-order__text">Картофель из печи, большой</div>
                            <div className="add-order__price">179 ₽</div>
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
                        <div className="quantity-end-order__number">2 товара</div>
                        <div className="quantity-end-order__price">1 578 ₽</div>
                    </div>

                    <div className="quantity-end-order__items">
                        <div className="quantity-end-order__dodo dodo-order">
                            <div className="dodo-order__text">Начислим додокоины</div>
                            <button className="dodo-order__info">
                                <img src={info} alt="картинка"/>
                            </button>
                        </div>
                        <div className="quantity-end-order__price-dodo">
                            <div className="dodo-order__number">+79</div>
                            <div className="dodo-order__image">
                                <img src={dotcoins} alt="картинка"/>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="end-order__sum sum-end-order">
                    <div className="sum-end-order__title">Сумма заказа</div>
                    <div className="sum-end-order__price">1 578 ₽</div>
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