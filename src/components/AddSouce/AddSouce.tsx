import React, {useState} from 'react';

type AddSouceProps = {
    selected: boolean, id: number, title: string, price: string, image: string, setAddSouce: any, addSouce:any[],count:number
}

const AddSouce: React.FC<AddSouceProps> = ({selected, id, count, addSouce, setAddSouce, title, price, image}) => {

    let [souceCount, setSouceCount] = useState(0);

    const plusSouce = () => {
        setSouceCount(souceCount + 1);
        setAddSouce([...addSouce], addSouce[id].selected = true, addSouce[id].count = souceCount + 1)
    }

    const minusSouce = () => {
        if (souceCount >= 1) {
            setSouceCount(souceCount - 1);
            setAddSouce([...addSouce], addSouce[id].count = souceCount - 1)
        }
        if(souceCount === 1) {
            setAddSouce([...addSouce], addSouce[id].selected = false, addSouce[id].count = 0)
        }
    }

    return (
        <div className="popup-order__item">
            <div className="popup-order__image">
                <img src={image} alt=""/>
            </div>
            <div className="popup-order__name">{title}</div>
            {souceCount === 0 ?
                <button onClick={plusSouce} className="popup-order__price button button__check">{price} ₽</button>
                : (
                    <>
                        <div className="item-order__quantity">
                            <button onClick={minusSouce} className="quantity__button">&mdash;</button>
                            <div className="quantity__center">{souceCount}</div>
                            <button onClick={plusSouce} className="quantity__button">+</button>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default AddSouce;