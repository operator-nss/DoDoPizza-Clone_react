import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../redux/store";
import {AddableToCart, setAddSouce, setSouceItems} from "../../redux/Slices/cartSlice";

type AddSouceProps = {
    selected: boolean, id: number,realId:number, title: string, price: string, image: string, count:number
}

const AddSouce: React.FC<AddSouceProps> = ({selected,realId, id, count, title, price, image}) => {

    let [souceCount, setSouceCount] = useState(0);
    const { addSouce, cartItems} = useSelector((state: RootState) => state.cart);
    const dispatch = useAppDispatch();


    const plusSouce = () => {
        const params = null;
        const item: AddableToCart = {
            id: cartItems.length + 1,
            realId,
            title,
            price,
            params,
            image,
            count: 1,
            selected: false,
        }
        dispatch(setAddSouce(item));
        dispatch(setSouceItems(item))
    }


    return (
        <div className="popup-order__item">
            <div className="popup-order__image">
                <img src={image} alt=""/>
            </div>
            <div className="popup-order__name">{title}</div>
            {souceCount === 0 ?
                <button onClick={plusSouce} className="popup-order__price button button__check">{price} ₽</button>
                : (
                    <>
                        <div className="item-order__quantity">
                            <button className="quantity__button">&mdash;</button>
                            <div className="quantity__center">{souceCount}</div>
                            <button onClick={plusSouce} className="quantity__button">+</button>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default AddSouce;