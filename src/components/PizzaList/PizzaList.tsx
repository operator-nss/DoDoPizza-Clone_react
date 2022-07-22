import React, {useEffect, useRef} from 'react';
import './pizzalist.scss'
import {fetchPizza} from "../../redux/asyncActions";
import {RootState, useAppDispatch} from "../../redux/store";
import PizzaCard from "../PizzaCard/PizzaCard";
import {useSelector} from "react-redux";
import Skeleton from '../Skeleton/Skeleton';
import {setStatus} from "../../redux/Slices/pizzaSlice";
const PizzaList = () => {

    const loadingRef = useRef(false);
    const isMounted = React.useRef(false);
    const dispatch = useAppDispatch();
    const {pizzas, status} = useSelector((state: RootState) => state.pizza);
    const {cartItems} = useSelector((state: RootState) => state.cart);

    // При первой загрузке компонента запрашиваем с сервера список пицц
    useEffect(() => {
        if (!loadingRef.current) {
            try {
                dispatch(setStatus('pizza loading'))
                dispatch(fetchPizza());
            } catch (e) {
                console.log(e)
            }
        }
        loadingRef.current = true;

    }, [dispatch])

    // При каждом изменении корзины отправляем ее в Local Storage
    useEffect(() => {
        if (isMounted.current) {
            localStorage.setItem('dodoPizza', JSON.stringify(cartItems));
        }
        isMounted.current = true;
    }, [cartItems])

    // Рендерим пиццы
    const pizzass = pizzas.map((item) => {
        return <PizzaCard key={item.id} {...item} />
    })

    return (
        <div className="page__pizza pizza">
            <div className="pizza__container">
                <h2 className="pizza__title">Пицца</h2>
                <div className="pizza__items">
                    {(status === 'pizza loading') ? [...new Array(8)].map((_, index) => <Skeleton
                        key={index}/>) : pizzass}
                </div>
            </div>
        </div>
    );
};

export default PizzaList;