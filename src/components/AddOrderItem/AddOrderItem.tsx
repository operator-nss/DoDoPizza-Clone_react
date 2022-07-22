import React, {memo, useCallback, useState} from 'react';
import clsx from "clsx";
import {RootState, useAppDispatch} from "../../redux/store";
import {AddableToCart, setAddToOrder,} from "../../redux/Slices/cartSlice";
import {useSelector} from "react-redux";

type AddOrderItemProps = {
    selected: boolean,
    id: number,
    realId:number,
    title: string,
    price: string,
    params: string,
    image: string,
    setOpenPopupSouces: any
}

const AddOrderItem: React.FC<AddOrderItemProps> = memo(({
                                                       selected,
                                                       id,
                                                       title,
                                                       price,
                                                       realId,
                                                       params,
                                                       image,
                                                       setOpenPopupSouces
                                                   }) => {

    const [selectedClass, setSelectedClass] = useState(false);
    const dispatch = useAppDispatch();
    const {cartItems} = useSelector((state: RootState) => state.cart);


    //Добавление товара в корзину
    const selectItemToOrder = useCallback(() => {
        if (id === 0) {
            setOpenPopupSouces(true)
        } else {
            setSelectedClass(!selectedClass);
            const item: AddableToCart = {
                selected: false,
                id: cartItems.length + 1,
                realId,
                title,
                price,
                image,
                params,
                count: 1,

            }
            dispatch(setAddToOrder(item));
        }
    },[cartItems.length, dispatch, id, image, params, price, realId, selectedClass, setOpenPopupSouces, title])

    return (
        <div onClick={selectItemToOrder} className={clsx("add-order__item", {select: selectedClass})}>
            <div className="add-order__image">
                <img src={image} alt="картинка"/>
            </div>
            <div className="add-order__label">
                <div className="add-order__text">{title}</div>
                <div className="add-order__price">{price ? price + '₽' : null} </div>
            </div>
        </div>
    )
        ;
});

export default AddOrderItem;

