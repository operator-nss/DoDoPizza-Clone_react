import React, {memo, useCallback, useEffect, useState} from 'react';
import star from '../../assets/img/star.svg'
import logo from '../../assets/img/bird.png'
import {RootState, useAppDispatch} from "../../redux/store";
import {setCartOpened} from "../../redux/Slices/cartSlice";
import clsx from "clsx";
import {useInView} from "react-intersection-observer";
import arrowCart from '../../assets/img/arrow.svg'
import {useSelector} from "react-redux";
import {CalcTotalItems} from "../../utils/calcTotalPrice";
import {Link} from "react-router-dom";
import {isMobile} from "react-device-detect";


const Header: React.FC = memo(() => {
    const dispatch = useAppDispatch();
    const [hoverCart, setHoverCart] = useState(false);
    const {cartItems, cartOpened} = useSelector((state: RootState) => state.cart);
    const [openBurger, setOpenBurger] = useState(false);

    //Аналог Intersection Observer
    const {ref, inView} = useInView({
        threshold: 0
    });

    //Открыть корзину
    const openCart = useCallback(() => {
        dispatch(setCartOpened(true));
    },[dispatch])

    //Открыть/закрыть бургер меню
    const toggleBurger = useCallback(() => {
        setOpenBurger(!openBurger)
    },[openBurger])

    //При открытии бургера нельзя скроллить сайт
    useEffect(() => {
        if (openBurger) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = '';
        }
        if(cartOpened && !isMobile) {
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = '17px';
        }else if (cartOpened && isMobile){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '0';
        }
    }, [cartOpened, openBurger])




    return (

        <header className="header">
            <div className="header__clone">ВНИМАНИЕ! ЭТОТ САЙТ СОЗДАН В УЧЕБНЫХ ЦЕЛЯХ. ФУНКЦИОНАЛ ОПЛАТЫ НЕ РАБОТАЕТ
            </div>
            <div className="header__container">

                <div ref={ref} className="header__top">
                    <div className="header__left">
                        <Link to='/' className="header__logo">
                            React Pizza
                            <img src={logo} alt=""/>
                        </Link>
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
    fill="#000"/>
                                </svg>
                            </div>
                            <div className="dodocoins-header__title">Бонусы</div>
                        </div>

                        <Link to='/orders' className="header__user button">Мои заказы</Link>
                        <button onClick={toggleBurger} className={clsx("icon-menu", {menuOpen: openBurger})}>
                            <span/>
                            <span/>
                            <span/>
                        </button>
                    </div>
                </div>
            </div>
            <div className={clsx("header__bottom", {active: !inView})}>
                <div className="header__container-bottom">
                    <div className="header__menu menu">
                        <nav className="menu__header">
                            <div className="header__dodo"><img src={logo} alt=""/></div>
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
                                <li className="menu__item"><a href="" className="menu__link">Работа у нас</a></li>
                            </ul>
                        </nav>
                    </div>


                    <div hidden className={clsx("header__body", {menuOpen: openBurger})}>
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
                            <li className="menu__item"><a href="" className="menu__link">Работа у нас</a></li>
                        </ul>
                    </div>
                    <button onClick={openCart}
                            onMouseOver={() => setHoverCart(true)}
                            onMouseLeave={() => setHoverCart(false)}
                            className="header__cart button button__orange"><span
                        className='header__cart-title'>Корзина&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <img className={clsx('header__cart-image', {active: hoverCart})}
                             src={arrowCart} alt=""/>
                        <span
                            className={clsx('header__cart-number', {active: hoverCart})}>  {CalcTotalItems(cartItems)}</span>
                    </button>
                </div>
            </div>

        </header>
    )
        ;
});

export default Header;