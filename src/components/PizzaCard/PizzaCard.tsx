import React, {useEffect, useState} from 'react';
import PizzaPopup from "../PizzaPopup/PizzaPopup";
import {isMobile} from 'react-device-detect';

type PizzaCardProps = {
    realId: number,
    title: string,
    price: number[],
    additives: string[],
    removable: string[],
    weight: number[],
    image00: string,
    image10: string,
    image20: string,
    image21: string,
    image11: string,
    compound: number[],
}

const PizzaCard: React.FC<PizzaCardProps> = ({
                                                 compound,
                                                 image00,
                                                 image11,
                                                 image10,
                                                 removable,
                                                 image20,
                                                 image21,
                                                 weight,
                                                 realId,
                                                 title,
                                                 price,
                                                 additives
                                             }) => {

    const [openPopup, setOpenPopup] = useState(false);

    // На декстопе убираем скролл сайта и добавляем паддинг к боди из-за убирания скролла бокового браузера при открытии попапа
    useEffect(() => {
        if (openPopup && !isMobile) {
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = '17px';
        } else if (openPopup && isMobile) {
            document.body.style.overflow = "hidden";
        } else {
            setTimeout(() => {
                document.body.style.overflow = '';
                document.body.style.paddingRight = '';
            }, 300)
        }
    }, [openPopup])


    // При нажатии на пиццу открываем попап с пиццей
    const openPizzaPopup = () => {
        setOpenPopup(true);
    }

    return (
        <div className="pizza__item item-pizza">

            {<PizzaPopup image10={image10}
                         title={title}
                         image00={image00}
                         image11={image11}
                         image20={image20}
                         image21={image21}
                         price={price}
                         realId={realId}
                         compound={compound}
                         additives={additives}
                         weight={weight}
                         removable={removable}
                         setOpenPopup={setOpenPopup}
                         openPopup={openPopup}/>}


            <div onClick={openPizzaPopup} className="item-pizza__image">
                <img src={image10} alt="картинка"/>
            </div>
            <div className="item-pizza__title">{title}</div>
            <div
                className="item-pizza__description">{additives ? additives : null + ', ' + removable ? removable : null}</div>
            <div className="item-pizza__label">
                <div className="item-pizza__price">от {price[0]} ₽</div>
                <button onClick={openPizzaPopup} className="item-pizza__check button button__check">Выбрать</button>
            </div>
        </div>
    );
};

export default PizzaCard;