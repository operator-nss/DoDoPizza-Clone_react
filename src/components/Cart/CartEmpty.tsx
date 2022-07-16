import React from 'react';
import emptyImage from '../../assets/img/cart/empty.svg'

type CartEmptyProps = {
    closeCart:  React.MouseEventHandler<HTMLButtonElement>
}

const CartEmpty:React.FC<CartEmptyProps> = ({closeCart}) => {

    return (
        <>
            <div className="cart__empty">
                <div className="cart__image">
                    <img src={emptyImage} alt="картинка" />
                </div>
                <h3 className="cart__title">Ой, пусто!</h3>
                <div className="cart__description">
                    <p>Ваша корзина пуста, откройте «Меню»</p>
                    <p>и выберите понравившийся товар.</p>
                    <p>Мы доставим ваш заказ от 549 ₽</p>
                </div>
                <button onClick={closeCart} className="button button__orange cart__button">Вернуться в меню</button>
            </div>
        </>
);
};

export default CartEmpty;