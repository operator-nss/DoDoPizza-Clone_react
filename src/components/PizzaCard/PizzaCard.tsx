import React, {useState} from 'react';
import PizzaPopup from "../PizzaPopup/PizzaPopup";

type PizzaCardProps = {
    imageUrl: string,
    realId: string,
    title: string,
    price: number[],
    additives: string[],
    removable: string[],
    weight: number[],
    image00 : string,
    image20 : string,
    image21 : string,
    image11 : string,

}

const PizzaCard: React.FC<PizzaCardProps> = ({imageUrl, image00, image11,removable, image20, image21, weight, realId, title, price, additives}) => {

    const [openPopup, setOpenPopup] = useState(false);


    const openPizzaPopup = () => {
        setOpenPopup(true)
     }

    return (
        <div className="pizza__item item-pizza">

            {<PizzaPopup imageUrl={imageUrl}
                         title={title}
                         image00={image00}
                         image11={image11}
                         image20={image20}
                         image21={image21}
                         price={price}
                         additives={additives}
                         weight={weight}
                         removable={removable}
                         setOpenPopup={setOpenPopup}
                         openPopup={openPopup}/>}


            <div onClick={openPizzaPopup} className="item-pizza__image">
                <img src={imageUrl} alt="картинка"/>
            </div>
            <div className="item-pizza__title">{title}</div>
            <div className="item-pizza__description">{additives ? additives : null + ', ' + removable ? removable : null}</div>
            <div className="item-pizza__label">
                <div className="item-pizza__price">от {price[0]} ₽</div>
                <button onClick={openPizzaPopup} className="item-pizza__check button button__check">Выбрать</button>
            </div>
        </div>
    );
};

export default PizzaCard;