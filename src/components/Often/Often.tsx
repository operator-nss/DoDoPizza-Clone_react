import React from 'react';

import pizzaImage from '../../assets/img/pizza/indeyka/indeyka-big.jpeg'
import arrowBlack from '../../assets/img/arrow-black.svg'

import './often.scss'

const Often = () => {
    return (
        <div className="page__often often">

            <div className="often__title">Часто заказывают</div>

            <div className="often__container">


                <div className="often__items">

                    <article className="often__item item-often">
                        <div className="item-often__image-ibg">
                            <picture>
                                <source srcSet={pizzaImage} type="image/webp" /><img
                                    src={pizzaImage} alt="" />
                            </picture>
                        </div>
                        <div className="item-often__label">
                            <div className="item-often__title">Пепперони фреш</div>
                            <div className="item-often__price">555р</div>
                        </div>
                    </article>


                    <article className="often__item item-often">
                        <div className="item-often__image-ibg">
                            <picture>
                                <source srcSet={pizzaImage} type="image/webp" /><img
                                src={pizzaImage} alt="" />
                            </picture>
                        </div>
                        <div className="item-often__label">
                            <div className="item-often__title">Пепперони фреш</div>
                            <div className="item-often__price">555р</div>
                        </div>
                    </article>


                    <article className="often__item item-often">
                        <div className="item-often__image-ibg">
                            <picture>
                                <source srcSet={pizzaImage} type="image/webp" /><img
                                src={pizzaImage} alt="" />
                            </picture>
                        </div>
                        <div className="item-often__label">
                            <div className="item-often__title">Пепперони фреш</div>
                            <div className="item-often__price">555р</div>
                        </div>
                    </article>


                    <article className="often__item item-often">
                        <div className="item-often__image-ibg">
                            <picture>
                                <source srcSet={pizzaImage} type="image/webp" /><img
                                src={pizzaImage} alt="" />
                            </picture>
                        </div>
                        <div className="item-often__label">
                            <div className="item-often__title">Пепперони фреш</div>
                            <div className="item-often__price">555р</div>
                        </div>
                    </article>


                    <article className="often__item item-often">
                        <div className="item-often__image-ibg">
                            <picture>
                                <source srcSet={pizzaImage} type="image/webp" /><img
                                src={pizzaImage} alt="" />
                            </picture>
                        </div>
                        <div className="item-often__label">
                            <div className="item-often__title">Пепперони фреш</div>
                            <div className="item-often__price">555р</div>
                        </div>
                    </article>


                    <article className="often__item item-often">
                        <div className="item-often__image-ibg">
                            <picture>
                                <source srcSet={pizzaImage} type="image/webp" /><img
                                src={pizzaImage} alt="" />
                            </picture>
                        </div>
                        <div className="item-often__label">
                            <div className="item-often__title">Пепперони фреш</div>
                            <div className="item-often__price">555р</div>
                        </div>
                    </article>


                    <article className="often__item item-often">
                        <div className="item-often__image-ibg">
                            <picture>
                                <source srcSet={pizzaImage} type="image/webp" /><img
                                src={pizzaImage} alt="" />
                            </picture>
                        </div>
                        <div className="item-often__label">
                            <div className="item-often__title">Пепперони фреш</div>
                            <div className="item-often__price">555р</div>
                        </div>
                    </article>


                    <article className="often__item item-often">
                        <div className="item-often__image-ibg">
                            <picture>
                                <source srcSet={pizzaImage} type="image/webp" /><img
                                src={pizzaImage} alt="" />
                            </picture>
                        </div>
                        <div className="item-often__label">
                            <div className="item-often__title">Пепперони фреш</div>
                            <div className="item-often__price">555р</div>
                        </div>
                    </article>


                    <article className="often__item item-often">
                        <div className="item-often__image-ibg">
                            <picture>
                                <source srcSet={pizzaImage} type="image/webp" /><img
                                src={pizzaImage} alt="" />
                            </picture>
                        </div>
                        <div className="item-often__label">
                            <div className="item-often__title">Пепперони фреш</div>
                            <div className="item-often__price">555р</div>
                        </div>
                    </article>


                </div>
                <div className="often__overlay often__overlay-1">
                    <button className="often__button-prev">
                        <img src={arrowBlack} alt="" />
                    </button>

                </div>
                <div className="often__overlay often__overlay-2">
                    <button className="often__button-next">
                        <img src={arrowBlack} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Often;