import React from 'react';
import star from '../../assets/img/star.svg'
import logo from '../../assets/img/logo.svg'
import {useAppDispatch} from "../../redux/store";
import {setCartOpened} from "../../redux/Slices/cartSlice";
import clsx from "clsx";
import {useInView} from "react-intersection-observer";


const Header: React.FC = () => {
    const dispatch = useAppDispatch();
    const {ref, inView} = useInView({
        threshold: 0
    });

    const openCart = () => {
        dispatch(setCartOpened(true));
    }

    return (

        <header className="header">
            <div className="header__container">

                <div ref={ref} className="header__top">
                    <div className="header__left">
                        <div className="header__logo">
                            <img src={logo} alt="картинка"/>
                        </div>
                        <div className="header__delivery delivery-header">
                            <div className="delivery-header__label">
                                <div className="delivery-header__delivery">Доставка пиццы</div>
                                <button className="delivery-header__city">Москва</button>
                            </div>
                            <div className="delivery-header__label">
                                <div className="delivery-header__time">30 мин</div>
                                <div className="delivery-header__estimation">
                                    <div className="delivery-header__value">4.81</div>
                                    <div className="delivery-header__star"><img src={star} alt="картинка"/></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header__right">

                        <div className="header__dodocoins dodocoins-header">
                            <div className="dodocoins-header__image">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M11 1a1 1 0 011 1v2a8 8 0 110 16v2a1 1 0 11-2 0v-2H6.6c-.56 0-.84 0-1.054-.109a1 1 0 01-.437-.437C5 19.24 5 18.96 5 18.4V5.6c0-.56 0-.84.109-1.054a1 1 0 01.437-.437C5.76 4 6.04 4 6.6 4H10V2a1 1 0 011-1zm1 17a6 6 0 000-12H7v12h5z"
                                          fill="#000"></path>
                                </svg>
                            </div>
                            <div className="dodocoins-header__title">Додокоины</div>
                        </div>

                        <button className="header__user button">Войти</button>
                        <button className="icon-menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={clsx("header__bottom", {active: !inView})}>
                <div className="header__container-bottom">
                    <div className="header__menu menu">
                        <nav className="menu__header">
                            <ul className="menu__list">
                                <li className="menu__item"><a href="" className="menu__link">Пицца</a></li>
                                <li className="menu__item"><a href="" className="menu__link">Комбо</a></li>
                                <li className="menu__item"><a href="" className="menu__link">Закуски</a></li>
                                <li className="menu__item"><a href="" className="menu__link">Десерты</a></li>
                                <li className="menu__item"><a href="" className="menu__link">Напитки</a></li>
                                <li className="menu__item"><a href="" className="menu__link">Другие товары</a></li>
                                <li className="menu__item"><a href="" className="menu__link">Акции</a></li>
                                <li className="menu__item"><a href="" className="menu__link">Контакты</a></li>
                                <li className="menu__item"><a href="" className="menu__link">О нас</a></li>
                                <li className="menu__item"><a href="" className="menu__link">Работа в Додо</a></li>
                            </ul>
                        </nav>
                    </div>


                <div className="header__body">
                    <ul className="menu__list">
                        <li className="menu__item"><a href="" className="menu__link">Пицца</a></li>
                        <li className="menu__item"><a href="" className="menu__link">Комбо</a></li>
                        <li className="menu__item"><a href="" className="menu__link">Закуски</a></li>
                        <li className="menu__item"><a href="" className="menu__link">Десерты</a></li>
                        <li className="menu__item"><a href="" className="menu__link">Напитки</a></li>
                        <li className="menu__item"><a href="" className="menu__link">Другие товары</a></li>
                        <li className="menu__item"><a href="" className="menu__link">Акции</a></li>
                        <li className="menu__item"><a href="" className="menu__link">Контакты</a></li>
                        <li className="menu__item"><a href="" className="menu__link">О нас</a></li>
                        <li className="menu__item"><a href="" className="menu__link">Работа в Додо</a></li>
                    </ul>
                </div>
                <button onClick={openCart} className="header__cart button button__orange">Корзина | <span>2</span>
                </button>
                </div>
                <div></div>
            </div>

        </header>
    )
        ;
};

export default Header;