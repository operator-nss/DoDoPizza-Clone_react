import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../redux/store";
import {AddableToCart, deleteSouce, minusSouce, setSouceItems} from "../../redux/Slices/cartSlice";

type AddSouceProps = {
    selected: boolean, id: number,realId:number, title: string, price: string, image: string, count:number
}

const AddSouce: React.FC<AddSouceProps> = ({selected,realId, id, count, title, price, image}) => {

    let [souceCount, setSouceCount] = useState(0);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setSouceCount(count)
    }, [count])


    //Добавление соуса по кнопке +
    const plusSouce = () => {
        const params = null;
        const item: AddableToCart = {
            id,
            realId,
            title,
            price,
            params,
            image,
            count: 1,
            selected: false,
        }
        if(souceCount === 0) {
            setSouceCount(1)
        }
        setSouceCount(souceCount + 1)
        dispatch(setSouceItems(item))
    }

    //Удаление соуса по кнопке -
    const minusSouceButton = () => {
        setSouceCount(souceCount => souceCount - 1);
        souceCount > 1 ? dispatch(minusSouce(id)) : dispatch(deleteSouce(id))
     }


    return (
        <div className="popup-order__item">
            <div className="popup-order__image">
                <img src={image} alt=""/>
            </div>
            <div className="popup-order__name">{title}</div>
            {souceCount === 0 ?
                <button onClick={() => plusSouce()} className="popup-order__price button button__check">{price} ₽</button>
                : (
                    <>
                        <div className="item-order__quantity">
                            <button onClick={minusSouceButton} className="quantity__button">&mdash;</button>
                            <div className="quantity__center">{souceCount}</div>
                            <button onClick={() => plusSouce()} className="quantity__button">+</button>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default AddSouce;