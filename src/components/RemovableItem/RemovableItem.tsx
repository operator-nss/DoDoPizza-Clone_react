import React, {useState} from 'react';
import clsx from "clsx";

type RemovableItemProps = {
    title:string,
    addAdditivities:(title: string) => void
}

const RemovableItem:React.FC<RemovableItemProps> = ({title, addAdditivities}) => {

    const [deleteItem, setDeleteItem] = useState(false);

   const onClickToggleDelete = () => {
       setDeleteItem(!deleteItem);
       addAdditivities(title)
     }

    return (
        <button onClick={onClickToggleDelete}  className={clsx('description-popup__ingridients-button', {deleted:deleteItem})} >{title}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="6.6" stroke="#737272" strokeWidth="0.8"></circle>
                <path d="M5 5L9 9" stroke="#737272" strokeWidth="1.2" strokeLinecap="round"
                      strokeLinejoin="round"></path>
                <path d="M9 5L5 9" stroke="#737272" strokeWidth="1.2" strokeLinecap="round"
                      strokeLinejoin="round"></path>
            </svg>
        </button>
    );
};

export default RemovableItem;