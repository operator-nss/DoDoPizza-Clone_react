import React, {useState} from 'react';
import pizza from "../../assets/img/pizza/indeyka/indeyka-big.jpeg";
import clsx from "clsx";

type AddOrderItemProps = {
    selected: boolean,
    id: number,
    title: string,
    price: string,
    params: string,
    image: string,
    setAddToOrder: any,
    addToOrder: any[],
    setOpenPopupSouces: any
}

const AddOrderItem: React.FC<AddOrderItemProps> = ({
                                                       selected,
                                                       id,
                                                       title,
                                                       price,
                                                       params,
                                                       image,
                                                       setAddToOrder,
                                                       addToOrder,
                                                       setOpenPopupSouces
                                                   }) => {

    const [selectedClass, setSelectedClass] = useState(false);



    const selectItemToOrder = () => {
        if (id === 0) {
            setOpenPopupSouces(true)
        } else {
            setAddToOrder([...addToOrder], addToOrder[id].selected = !addToOrder[id].selected)
            setSelectedClass(!selectedClass)
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

