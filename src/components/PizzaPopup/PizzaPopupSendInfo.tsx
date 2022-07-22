import React, {memo} from 'react';
import clsx from "clsx";

type PizzaPopupSendProps = {
    openPopupSend: boolean,
    title: string,
    radius: number[],
    activeSize:number
}

const PizzaPopupSendInfo:React.FC<PizzaPopupSendProps> = memo(({
                                openPopupSend,
                                title,
                                radius,
                                activeSize
                            }) => {
    return (
        <div className={clsx('popup-pizza__send', {active: openPopupSend})}>
            <div>Добавлено:</div>
            <div>{title}, {radius[activeSize]}см</div>
        </div>
    );
});

export default PizzaPopupSendInfo;