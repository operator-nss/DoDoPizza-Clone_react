import React, {useState} from 'react';
import './information.scss'
import information01 from '../../assets/img/information/01.jpg'
import information02 from '../../assets/img/information/02.jpg'
import information03 from '../../assets/img/information/03.jpg'
import information04 from '../../assets/img/information/04.jpg'
import information05 from '../../assets/img/information/05.jpg'
import information06 from '../../assets/img/information/06.jpg'
import information07 from '../../assets/img/information/07.jpg'
import information08 from '../../assets/img/information/08.jpg'
import information09 from '../../assets/img/information/09.jpg'
import information10 from '../../assets/img/information/10.jpg'
import clsx from "clsx";


const Information = () => {
    const [activeInfo, setActiveInfo] = useState(false);
    
const moveInfo = () => {
    setActiveInfo(!activeInfo)
 }

    return (
        <div className="page__information information">
            <div onClick={moveInfo} className={clsx("information__arrow", {vision:activeInfo})}>
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303C9.17678 18.2374 9.17678 17.7626 9.46967 17.4697L14.9393 12L9.46967 6.53033C9.17678 6.23744 9.17678 5.76256 9.46967 5.46967Z" fill="#030D45"/>
                </svg>
            </div>

            <div onClick={moveInfo} className={clsx("information__arrow information__arrow-right", {vision:!activeInfo})}>
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303C9.17678 18.2374 9.17678 17.7626 9.46967 17.4697L14.9393 12L9.46967 6.53033C9.17678 6.23744 9.17678 5.76256 9.46967 5.46967Z" fill="#030D45"/>
                </svg>
            </div>

            <div className="information__container">
                <button className="information__next">
                    <svg viewBox="0 0 24 24" fill="none" className="information__button">
                        <path d="M10 18l6-6-6-6" stroke="#000" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"></path>
                    </svg>
                </button>

                <div className={clsx("information__items", {move:activeInfo})}>



                    <div className="information__item item-information">
                        <div className="item-information__image-ibg">
                            <img src={information01} alt="картинка"/>
                        </div>
                    </div>


                    <div className="information__item item-information">
                        <div className="item-information__image-ibg">
                            <img src={information02} alt="картинка"/>
                        </div>
                    </div>


                    <div className="information__item item-information">
                        <div className="item-information__image-ibg">
                            <img src={information03} alt="картинка"/>
                        </div>
                    </div>


                    <div className="information__item item-information">
                        <div className="item-information__image-ibg">
                            <img src={information04} alt="картинка"/>
                        </div>
                    </div>


                    <div className="information__item item-information">
                        <div className="item-information__image-ibg">
                            <img src={information05} alt="картинка"/>
                        </div>
                    </div>


                    <div className="information__item item-information">
                        <div className="item-information__image-ibg">
                            <img src={information06} alt="картинка"/>
                        </div>
                    </div>


                    <div className="information__item item-information">
                        <div className="item-information__image-ibg">
                            <img src={information07} alt="картинка"/>
                        </div>
                    </div>


                    <div className="information__item item-information">
                        <div className="item-information__image-ibg">
                            <img src={information08} alt="картинка"/>
                        </div>
                    </div>


                    <div className="information__item item-information">
                        <div className="item-information__image-ibg">
                            <img src={information09} alt="картинка"/>
                        </div>
                    </div>


                    <div className="information__item item-information">
                        <div className="item-information__image-ibg">
                            <img src={information10} alt="картинка"/>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    )
        ;
};

export default Information;