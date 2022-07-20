import React, {useState} from 'react';
import clsx from "clsx";
import {RootState, useAppDispatch} from "../../redux/store";
import {setSouceItems, AddableToCart, setAddToOrder} from "../../redux/Slices/cartSlice";
import {useSelector} from "react-redux";

type AddOrderItemProps = {
    selected: boolean,
    id: number,
    title: string,
    price: string,
    params: string,
    image: string,
    setOpenPopupSouces: any
}

const AddOrderItem: React.FC<AddOrderItemProps> = ({
                                                       selected,
                                                       id,
                                                       title,
                                                       price,
                                                       params,
                                                       image,
                                                       setOpenPopupSouces
                                                   }) => {

    const [selectedClass, setSelectedClass] = useState(false);
    const dispatch = useAppDispatch();
    const {cartItems, addToOrder} = useSelector((state: RootState) => state.cart);


    const selectItemToOrder = () => {
        if (id === 0) {
            setOpenPopupSouces(true)
        } else {
            setSelectedClass(!selectedClass);
            const item: AddableToCart = {
                id: cartItems.length + 1,
                title,
                price,
                image,
                params,
                count: 1,
                selected: false,
            }
            dispatch(setAddToOrder(item));
            dispatch(setSouceItems(item))
        }
    }

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
};

export default AddOrderItem;

