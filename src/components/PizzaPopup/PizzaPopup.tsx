import React, {useCallback, useEffect, useState} from 'react';
import './pizzapopup.scss'
import closeButton from '../../assets/img/close.svg'
import circleMed from '../../assets/img/circlemed.svg'
import circleBig from '../../assets/img/circlebig.svg'
import info from '../../assets/img/info.svg'
import clsx from "clsx";
import add01 from '../../assets/img/add/01.png';
import add02 from '../../assets/img/add/02.png';
import add03 from '../../assets/img/add/03.png';
import add04 from '../../assets/img/add/04.png';
import add07 from '../../assets/img/add/07.png';
import add05 from '../../assets/img/add/05.png';
import add06 from '../../assets/img/add/06.png';
import add08 from '../../assets/img/add/08.png';
import add09 from '../../assets/img/add/09.png';
import add10 from '../../assets/img/add/10.png';
import add11 from '../../assets/img/add/11.png';
import add12 from '../../assets/img/add/12.png';
import add13 from '../../assets/img/add/13.png';
import add14 from '../../assets/img/add/14.png';
import add15 from '../../assets/img/add/15.png';
import add16 from '../../assets/img/add/16.png';
import add17 from '../../assets/img/add/17.png';
import AddItemToPizza from "../addItemToPizza/AddItemToPizza";
import RemovableItem from "../RemovableItem/RemovableItem";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../redux/store";
import {PizzaCart, setCartItems} from "../../redux/Slices/cartSlice";
import {useDebouncedCallback} from "use-debounce";

type PizzaPopupProps = {
    openPopup: boolean,
    setOpenPopup: any,
    image10: string,
    title: string,
    price: number[],
    weight: number[],
    image00: string,
    image20: string,
    image21: string,
    image11: string,
    additives: string[]
    removable: string[],
    compound: number[],
    realId: number,
}

const PizzaPopup: React.FC<PizzaPopupProps> = ({
                                                   openPopup,
                                                   title,
                                                   price,
                                                   realId,
                                                   setOpenPopup,
                                                   image10,
                                                   image00,
                                                   image11,
                                                   additives,
                                                   image20,
                                                   image21,
                                                   weight,
                                                   compound = [0, 0, 0, 0],
                                                   removable
                                               }) => {

        const [activeSize, setActiveSize] = useState(1);
        const [activeType, setActiveType] = useState(0);
        const [openPopupInfo, setOpenPopupInfo] = useState(false);
        const [openPopupSend, setOpenPopupSend] = useState(false);
        const [addableItems, setAddableItems] = useState([
            {selected: false, id: 0, title: 'Чеддер и пармезан', price: '59', image: add01},
            {selected: false, id: 1, title: 'Сырный бортик', price: '179', image: add02},
            {selected: false, id: 2, title: 'Острый халапеньо', price: '59', image: add03},
            {selected: false, id: 3, title: 'Сливочная моцарелла', price: '59', image: add04},
            {selected: false, id: 4, title: 'Ветчина', price: '59', image: add05},
            {selected: false, id: 5, title: 'Шампиньоны', price: '59', image: add06},
            {selected: false, id: 6, title: 'Маринованные огурчики', price: '59', image: add07},
            {selected: false, id: 7, title: 'Хрустящий бекон', price: '59', image: add08},
            {selected: false, id: 8, title: 'Свежие томаты', price: '59', image: add09},
            {selected: false, id: 9, title: 'Острая чоризо', price: '59', image: add10},
            {selected: false, id: 10, title: 'Кубики брынзы', price: '59', image: add11},
            {selected: false, id: 11, title: 'Сыр блю чиз', price: '59', image: add12},
            {selected: false, id: 12, title: 'Красный лук', price: '59', image: add13},
            {selected: false, id: 13, title: 'Итальянские травы', price: '59', image: add14},
            {selected: false, id: 14, title: 'Сочные ананасы', price: '59', image: add15},
            {selected: false, id: 15, title: 'Сладкий перец', price: '59', image: add16},
            {selected: false, id: 16, title: 'Пикантная пепперони', price: '59', image: add17},
        ]);
        const {cartOpened, cartItems} = useSelector((state: RootState) => state.cart);
        const [addedAdditivities, setAddedAdditivities] = useState<string[]>([]);
        const [activeImage, setActiveImage] = useState('');

        const sizes = ['Маленькая', 'Средняя', 'Большая'];
        const types = ['Традиционное', 'Тонкое'];
        const radius = [25, 30, 35];

        const dispatch = useAppDispatch();

        //Добавление таймаута
        const debounced = useDebouncedCallback(() => {
            setOpenPopupSend(false);
        }, 4000);

        // закрыть попап
        const onClickClosePopup = () => {
            setOpenPopup(false);
            setOpenPopupInfo(false)
        }

        // Установка кнопки размера пиццы исходя из state
        const setActiveSizeButton = (i: number) => {
            setActiveSize(i);
            if (i === 0) {
                setActiveType(0)
            }
        }

        // Установка кнопки типа пиццы исходя из state
        const setActiveTypeButton = (i: number) => {
            setActiveType(i)
        }

        // Открытие Инфо-папапа
        const openInfoPopup = () => {
            setOpenPopupInfo(!openPopupInfo)
        }

        // рендер картинки при выборе заного размера и типа пиццы
        const renderPizza = useCallback(() => {
            if (activeSize === 0 && activeType === 0) {
                setActiveImage(image00)
            } else if (activeSize === 1 && activeType === 0) {
                setActiveImage(image10)
            } else if (activeSize === 1 && activeType === 1) {
                setActiveImage(image11)
            } else if (activeSize === 2 && activeType === 1) {
                setActiveImage(image21)
            } else if (activeSize === 2 && activeType === 0) {
                setActiveImage(image20)
            }
        }, [activeSize, activeType, image00, image11, image20, image21, image10])

        // рендер картинки при каждом изменении state
        useEffect(() => {
            renderPizza()
        }, [renderPizza])

        // Если открывается корзина - то закрываем попап
        useEffect(() => {
            if (cartOpened) {
                setOpenPopup(false)
            }
        }, [cartOpened, setOpenPopup])

        // Рассчет суммы за пиццу исходя из ее типа
        const reducePrice = () => {
            if (activeType === 0) {
                return price[activeSize] + addableItems.filter(item => item.selected)?.reduce((num, item) => num + +item.price, 0);
            } else {
                return price[activeSize] - 100 + addableItems.filter(item => item.selected)?.reduce((num, item) => num + +item.price, 0)
            }
        }

        // Добавление пиццы в корзину и после добавления закрытие всех открытыхх попапов
        const addPizzaToCart = async () => {
            const titles = addableItems.filter(item => item.selected)
            const arr: string[] = [];
            titles.map(item => arr.push(item.title))
            const item: PizzaCart = {
                id: cartItems.length + 1,
                realId,
                title,
                price: reducePrice(),
                image: activeImage,
                removeFromPizza: addedAdditivities,
                size: sizes[activeSize],
                radius: radius[activeSize],
                type: types[activeType],
                addableItems: arr,
                count: 1
            }
            setOpenPopupSend(true);
            debounced();
            dispatch(setCartItems(item));
            setOpenPopup(false);
            setOpenPopupInfo(false)
            // setActiveSize(1);
            // setActiveType(0);
        }

        // Ингридиенты которые еще не добавлены
        const addAdditivities = (title: string) => {
            if (addedAdditivities.some(item => item === title)) {
                setAddedAdditivities(addedAdditivities.filter(item => item !== title))
            } else {
                setAddedAdditivities([...addedAdditivities, title])
            }
        }


        return (
            <>
                <div onClick={onClickClosePopup}
                     style={openPopup ? {'visibility': 'visible'} : {'visibility': 'hidden'}}
                     className={clsx({open: openPopup}, "pizza__overlay")}/>


                <div className={clsx('popup-pizza__send', {active: openPopupSend})}>
                    <div>Добавлено:</div>
                    <div>{title}, {radius[activeSize]}см</div>
                </div>

                <div className={clsx({open: openPopup}, "pizza__popup popup-pizza")}>
                    <button onClick={onClickClosePopup} className="popup-pizza__close">
                        <img src={closeButton} alt="картинка"/>
                    </button>


                    <div className="popup-pizza__image">
                        <div className="popup-pizza__circle-med">
                            <img src={circleMed} alt="картинка"/>
                        </div>
                        <div className="popup-pizza__circle-big">
                            <img src={circleBig} alt="картинка"/>
                        </div>
                        <div
                            className={clsx({image0: (activeSize === 0)}, {image1: (activeSize === 1)}, {image2: (activeSize === 2)}, 'popup-pizza__pizza-image')}>
                            {<img src={activeImage} alt="картинка"/>}
                        </div>
                    </div>

                    <div className="popup-pizza__description description-popup">
                        <div className="description-popup__container">
                            <div className="description-popup__label">
                                <div className="description-popup__title">{title}</div>
                                <button onClick={openInfoPopup} className="description-popup__info">
                                    <img src={info} alt="картинка"/>
                                </button>

                                <div className={clsx({open: openPopupInfo}, 'info-popup')}>
                                    <div className="info-popup__title">Пищевая ценность на 100 г</div>
                                    <div className='info-popup__label'>
                                        <div>Энерг. ценность</div>
                                        <div>{compound[0]} ккал</div>
                                    </div>
                                    <div className='info-popup__label'>
                                        <div>Белки</div>
                                        <div>{compound[1]} г</div>
                                    </div>
                                    <div className='info-popup__label'>
                                        <div>Жиры</div>
                                        <div>{compound[2]} ккал</div>
                                    </div>
                                    <div className='info-popup__label'>
                                        <div>Углеводы</div>
                                        <div>{compound[3]} ккал</div>
                                    </div>
                                    <div className='info-popup__label'>
                                        <div>Вес</div>
                                        <div>{weight[activeSize]} г</div>
                                    </div>
                                    <div className='info-popup__label'>
                                        <div>Диаметр</div>
                                        <div>{radius[activeSize]} см</div>
                                    </div>
                                </div>
                            </div>

                            <div className="description-popup__subtitle">
                                {radius[activeSize]}см,&nbsp;{types[activeType].toLowerCase()} тесто,&nbsp;
                                {activeType === 0 ? weight[activeSize] : weight[activeSize] - 100}
                                г
                            </div>

                            <div className="description-popup__ingridients-removable">
                                {removable?.length > 0 ? (
                                        removable.map(item => {
                                            return <RemovableItem addAdditivities={addAdditivities} key={item} title={item}/>
                                        }))
                                    : null
                                }
                            </div>

                            <div className="description-popup__ingridients">
                                {additives?.length > 0 ? (
                                        additives.map(item => {
                                            return <span key={item}>{item}</span>
                                        }))
                                    : null
                                }
                            </div>


                            <ul className="description-popup__sizes">
                                <div
                                    className={clsx({size0: (activeSize === 0)}, {size1: (activeSize === 1)}, {size2: (activeSize === 2)}, 'description-popup__size-active')}/>
                                {sizes.map((item, i: number) => {
                                    return <button key={i} onClick={() => setActiveSizeButton(i)}
                                                   className="description-popup__size"><span>{sizes[i]}</span></button>
                                })}
                            </ul>

                            <ul className="description-popup__types">
                                <div
                                    className={clsx({type0: (activeType === 0)}, {type1: (activeType === 1)}, 'description-popup__type-active')}/>
                                {types.map((item, i: number) => {
                                    return <button key={i} disabled={activeSize === 0}
                                                   onClick={() => setActiveTypeButton(i)}
                                                   className="description-popup__type"><span>{types[i]}</span></button>
                                })}
                            </ul>

                            <div className="description-popup__add add-description-popup">
                                <div className="add-description-popup__section-title">Добавить в пиццу</div>
                                <div className="add-description-popup__items">

                                    {addableItems.map(item => {
                                        return <AddItemToPizza setAddableItems={setAddableItems} addableItems={addableItems}
                                                               key={item.id} {...item} />
                                    })}


                                </div>
                            </div>
                        </div>
                        <button onClick={addPizzaToCart}
                                className="popup-pizza__description-button button__orange button">Добавить в корзину
                            за {reducePrice()}
                            p
                        </button>
                    </div>
                </div>
            </>

        )
            ;
    }
;

export default PizzaPopup;