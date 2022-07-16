import React, {useState} from 'react';
import clsx from "clsx";
import select from '../../assets/img/add/select.svg'

type AddItemToPizzaProps = {
    image: string, title: string, price: string, selected: boolean, addableItems: any[], id: number, setAddableItems: any
}

const AddItemToPizza: React.FC<AddItemToPizzaProps> = ({
                                                           image,
                                                           id,
                                                           setAddableItems,
                                                           addableItems,
                                                           title,
                                                           price,
                                                           selected
                                                       }) => {

    const [selectedItem, setSelectedItem] = useState(selected);

    const addSelected = () => {
        setSelectedItem(!selectedItem)
        setAddableItems([...addableItems], addableItems[id].selected = !addableItems[id].selected)
    }

    return (
        <button onClick={addSelected} className={clsx("add-description-popup__item", {selected: selectedItem})}>
            <img src={select} className={clsx('add-description-popup__select', {select: selectedItem})} alt=""/>
            <div className="add-description-popup__image-ibg">
                <img src={image} alt="картинка"/>
            </div>
            <div className="add-description-popup__title">{title}</div>
            <div className="add-description-popup__price">{price}₽</div>
        </button>
    );
};

export default AddItemToPizza;

