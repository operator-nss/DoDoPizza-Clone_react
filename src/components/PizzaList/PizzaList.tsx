import React, {useEffect, useRef} from 'react';

import './pizzalist.scss'
import {fetchPizza} from "../../redux/asyncActions";
import {RootState, useAppDispatch} from "../../redux/store";
import PizzaCard from "../PizzaCard/PizzaCard";
import {useSelector} from "react-redux";

const PizzaList = () => {

    const loadingRef = useRef(false);
    const dispatch = useAppDispatch();
    const {pizzas} = useSelector((state: RootState) => state.pizza);

    useEffect(() => {
        if(!loadingRef.current) {
            dispatch(fetchPizza())
        }
        loadingRef.current = true
    }, [])

    return (
        <div className="page__pizza pizza">
            <div className="pizza__container">

                <h2 className="pizza__title">Пицца</h2>

                <div className="pizza__items">

                    {pizzas.length > 0 ?
                        pizzas.map((item) => {
                            return <PizzaCard key={item.id} {...item} />
                        })
                        : <div>NO PIZZA</div>}




                </div>


            </div>


        </div>
    );
};

export default PizzaList;