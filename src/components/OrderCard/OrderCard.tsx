import React from 'react';
import './orderCard.scss'

type OrderCardProps = {
    id:any, realId:any, title:any, price:any, image:any, removeFromPizza:any, size:any, radius:any, type:any, addableItems:any, count:any
}

const OrderCard:React.FC<OrderCardProps> = ({   id,
                                                realId,
                                                title,
                                                price,
                                                image,
                                                removeFromPizza = null,
                                                size = null,
                                                radius = null,
                                                type = null,
                                                addableItems = null,
                                                count
}) => {



    return (
        <div className='order-card'>
            <div className='order-card__image'>
                <img src={image} alt=""/>
            </div>
            <div className="order-card__body">
                <h3 className='order-card__title'>{title}</h3>
                <div className='order-card__type'>{radius ? radius + 'см' : null}  {size ? size : null}  {type ? type: null}</div>
                {addableItems?.length > 0 ? <div  className='order-card__add'>Добавлено: {addableItems?.join(', ')}</div> : null}
                {removeFromPizza?.length > 0 ? <div  className='order-card__remove'>Убрали: {removeFromPizza?.join(', ')}</div> : null}
                <div className='order-card__count'>{'Количество: ' + count}шт.</div>
                <div className='order-card__price'>{'Цена ' + price} ₽</div>
            </div>

        </div>
    );
};

export default OrderCard;