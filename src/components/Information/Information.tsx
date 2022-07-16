import React from 'react';
import './information.scss'
import information01w from '../../assets/img/information/01.webp'
import information01 from '../../assets/img/information/01.jpg'
import information02w from '../../assets/img/information/02.webp'
import information02 from '../../assets/img/information/02.jpg'
import information03w from '../../assets/img/information/03.webp'
import information03 from '../../assets/img/information/03.jpg'
import information04w from '../../assets/img/information/04.webp'
import information04 from '../../assets/img/information/04.jpg'
import information05w from '../../assets/img/information/05.webp'
import information05 from '../../assets/img/information/05.jpg'
import information06w from '../../assets/img/information/06.webp'
import information06 from '../../assets/img/information/06.jpg'


const Information = () => {
    return (
        <div className="page__information information">
            <div className="information__container">
                <button className="information__next">
                    <svg viewBox="0 0 24 24" fill="none" className="information__button">
                        <path d="M10 18l6-6-6-6" stroke="#000" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"></path>
                    </svg>
                </button>

                <div className="information__items">

                    <div className="information__item item-information">
                        <div className="item-information__image-ibg">
                            <picture>
                                <source srcSet={information01w} type="image/webp" /><img
                                    src={information01} alt="картинка" />
                            </picture>
                        </div>
                    </div>

                    <div className="information__item item-information">
                        <div className="item-information__image-ibg">
                            <picture>
                                <source srcSet={information02w} type="image/webp" /><img
                                src={information02} alt="картинка" />
                            </picture>
                        </div>
                    </div>

                    <div className="information__item item-information">
                        <div className="item-information__image-ibg">
                            <picture>
                                <source srcSet={information03w} type="image/webp" /><img
                                src={information03} alt="картинка" />
                            </picture>
                        </div>
                    </div>

                    <div className="information__item item-information">
                        <div className="item-information__image-ibg">
                            <picture>
                                <source srcSet={information04w} type="image/webp" /><img
                                src={information04} alt="картинка" />
                            </picture>
                        </div>
                    </div>

                    <div className="information__item item-information">
                        <div className="item-information__image-ibg">
                            <picture>
                                <source srcSet={information05w} type="image/webp" /><img
                                src={information05} alt="картинка" />
                            </picture>
                        </div>
                    </div>

                    <div className="information__item item-information">
                        <div className="item-information__image-ibg">
                            <picture>
                                <source srcSet={information06w} type="image/webp" /><img
                                src={information06} alt="картинка" />
                            </picture>
                        </div>
                    </div>

              {/*      <div class="information__item item-information">*/}
              {/*   <div class="item-information__image-ibg">*/}
              {/*      <picture><source srcset="img/information/07.webp" type="image/webp"><img src="img/information/07.jpg" alt="картинка"></picture>*/}
              {/*   </div>*/}
              {/*</div>*/}

              {/*<div class="information__item item-information">*/}
              {/*   <div class="item-information__image-ibg">*/}
              {/*      <picture><source srcset="img/information/08.webp" type="image/webp"><img src="img/information/08.jpg" alt="картинка"></picture>*/}
              {/*   </div>*/}
              {/*</div>*/}

              {/*<div class="information__item item-information">*/}
              {/*   <div class="item-information__image-ibg">*/}
              {/*      <picture><source srcset="img/information/09.webp" type="image/webp"><img src="img/information/09.jpg" alt="картинка"></picture>*/}
              {/*   </div>*/}
              {/*</div>*/}

              {/*<div class="information__item item-information">*/}
              {/*   <div class="item-information__image-ibg">*/}
              {/*      <picture><source srcset="img/information/10.webp" type="image/webp"><img src="img/information/10.jpg" alt="картинка"></picture>*/}
              {/*   </div>*/}
              {/*</div>*/}

                </div>
            </div>
        </div>
    );
};

export default Information;