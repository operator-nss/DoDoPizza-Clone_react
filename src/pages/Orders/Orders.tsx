import React, {useEffect, useRef} from 'react';
import './orders.scss'
import {setOrderId, setOrders, setStatusOrder} from "../../redux/Slices/orderSlice";
import {RootState, useAppDispatch} from "../../redux/store";
import {fetchOrders} from "../../redux/asyncActions";
import {useSelector} from "react-redux";
import axios from "axios";
import {delay} from "../../utils/delay";
import ordersImage from '../../assets/img/cart/empty.svg'
import Preloader from "../../components/Preloader/Preloader";
import OrderCard from "../../components/OrderCard/OrderCard";


const Orders = () => {
    const loadingOrders = useRef(false);
    const dispatch = useAppDispatch();
    const {orders, orderId, statusOrder} = useSelector((state: RootState) => state.order);

    useEffect(() => {
        if (!loadingOrders.current) {
            dispatch(setStatusOrder('order pending'));
            dispatch((fetchOrders()));
            dispatch(setStatusOrder('success'));
        }
        loadingOrders.current = true
    }, [dispatch, orders]);


    const clearOrders = async () => {
        dispatch(setStatusOrder('order pending'));
        try {
            dispatch(setStatusOrder('order pending'));
            for (let i = 1; i <= orderId; i++) {
                console.log(i)
                await axios.delete('https://62a7219797b6156bff884996.mockapi.io/orders/' + i);
                await delay(1000);
            }
            dispatch(setOrders([]));
            dispatch(setOrderId(0))
            dispatch(setStatusOrder('success'));
        } catch (error) {
            alert('Ошибка при очистки заказов');
        }
        dispatch(setStatusOrder('order success'));
    };

    return (
        <div className='orders'>
            <div className="orders__container">
                <div className="orders__label">
                    <h1 className="orders__title">Мои заказы</h1>
                    {orders.length > 0 &&
					            <button disabled={statusOrder === 'order pending'} className='orders__button button button__orange'
					                    onClick={clearOrders}>Очистить заказы</button>}
                </div>

                <div className="orders__items">

                    {orders.length > 0 ? (
                        statusOrder === 'order pending' ? <Preloader/> : orders.map((item, index) => (
                            <OrderCard key={index} {...item} />

                        ))
                    ) : (
                        <div className='orders__out'>
                            <img className="orders__image" src={ordersImage} alt="out of orders"/>
                            {statusOrder === 'order error' ? <h2>Ошибка при получении списка заказов</h2> :
                                <h2>К сожалению вы еще не делали заказ</h2>}
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Orders;