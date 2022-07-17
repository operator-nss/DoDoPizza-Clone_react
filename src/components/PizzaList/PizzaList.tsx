import React, {useEffect, useRef} from 'react';

import './pizzalist.scss'
import {fetchPizza} from "../../redux/asyncActions";
import {RootState, useAppDispatch} from "../../redux/store";
import PizzaCard from "../PizzaCard/PizzaCard";
import {useSelector} from "react-redux";
import {getCartFromLocalStorage} from "../../utils/getCartFromLocalStorage";
import {retry} from "@reduxjs/toolkit/query";
import Skeleton from '../Skeleton/Skeleton';

const PizzaList = () => {

    const loadingRef = useRef(false);
    const isMounted = React.useRef(false);
    const dispatch = useAppDispatch();
    const {pizzas, status} = useSelector((state: RootState) => state.pizza);
    const {cartItems} = useSelector((state: RootState) => state.cart);


    useEffect(() => {
        if(!loadingRef.current) {
            try {
                dispatch(fetchPizza());
            } catch (e) {
                console.log(e)
            }
        }
        loadingRef.current = true;

    }, [])

    useEffect(() => {
        if(isMounted.current) {
            localStorage.setItem('dodoPizza', JSON.stringify(cartItems));
        }
        isMounted.current = true;
    }, [cartItems])

    const pizzass = pizzas.map((item) => {
        return <PizzaCard key={item.id} {...item} />
    })

    return (
        <div className="page__pizza pizza">
            <div className="pizza__container">

                <h2 className="pizza__title">Пицца</h2>

                <div className="pizza__items">

                    {(status === 'pizza loading') ? [...new Array(8)].map((_, index) => <Skeleton key={index}/>) : pizzass}





                </div>


            </div>


        </div>
    );
};

export default PizzaList;