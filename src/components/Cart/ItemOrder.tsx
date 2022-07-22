import React, {memo} from 'react';
import closeButtonB from "../../assets/img/close-b.svg";
import {addPizza, deletePizza, minusPizza} from "../../redux/Slices/cartSlice";
import {useAppDispatch} from "../../redux/store";

type ItemOrderProps = {
    title: string,
    price: number,
    image: string,
    removeFromPizza: string[],
    size: string,
    radius: number,
    type: string,
    addableItems: string[],
    count: number,
    realId: number,
    id: number
}

const ItemOrder: React.FC<ItemOrderProps> = memo(({
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

                                                  }) => {


    const dispatch = useAppDispatch();


    //Добавление пиццы по кнопке +
    const pizzaCountPlus = (id: number | string) => {
        dispatch(addPizza(id))
    }

    //Добавление пиццы по кнопке -
    const pizzaCountMinus = (id: number) => {
        dispatch(minusPizza(id))
    }

    //Удаление товара из корзины
    const deleteItem = (id: number) => {
        dispatch(deletePizza(id))
    }

    return (
        <div key={id} className="order__item item-order">
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
    );
});

export default ItemOrder;