import React from 'react';
import emptyImage from '../../assets/img/cart/empty.svg'
import completeOrder from '../../assets/img/cart/complete-order.jpg'
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {Link} from "react-router-dom";

type CartEmptyProps = {
    closeCart: React.MouseEventHandler<HTMLButtonElement>,
    isOrderComplete: boolean
}

const CartEmpty: React.FC<CartEmptyProps> = ({closeCart, isOrderComplete}) => {
    const {orderId} = useSelector((state: RootState) => state.order);


    return (
        <>
            {isOrderComplete ? (
                <div className='cart__order'>
                    <div className="cart__order-image">
                        <img src={completeOrder} alt=""/>
                    </div>
                    <div className="cart__order-message">
                        {`Ваш заказ #${orderId} скоро будет передан курьерской доставке`}
                    </div>
                    <Link to='/orders' className='cart__order-button button button__orange'>
                        <button onClick={closeCart}>Посмотреть свои заказы</button>
                    </Link>
                </div>
            ) : (
                <div className="cart__empty">
                    <div className="cart__image">
                        <img src={emptyImage} alt="картинка"/>
                    </div>
                    <h3 className="cart__title">Ой, пусто!</h3>
                    <div className="cart__description">
                        <p>Ваша корзина пуста</p>
                        <p>Выберите пиццу</p>
                        <p>Мы доставим ваш заказ от 549 ₽</p>
                    </div>
                    <button onClick={closeCart} className="button button__orange cart__button">Вернуться к выбору пиццы</button>
                </div>
            )
            }
        </>
    );
};

export default CartEmpty;