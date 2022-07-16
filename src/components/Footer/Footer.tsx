import React from 'react';
import secret from '../../assets/img/footer/secret.svg'
import app from '../../assets/img/footer/app.svg'
import appgallery from '../../assets/img/footer/appgalery.svg'
import google from '../../assets/img/footer/google.svg'
import dodofooter from '../../assets/img/footer/dodo-footer.svg';
import youtube from '../../assets/img/footer/you.svg';
import classniki from '../../assets/img/footer/class.svg';
import vk from '../../assets/img/footer/vk.svg';

import './footer.scss'

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer__secret secret-footer">

                <div className="secret-footer__container">
                    <div className="secret-footer__image">
                        <img src={secret} alt="" />
                    </div>
                    <div className="secret-footer__text">Стань тайным покупателем Додо Пиццы и получи пиццу в подарок
                    </div>
                    <a href="#" className="secret-footer__button button">Заполнить анкету</a>
                </div>

            </div>

            <div className="footer__links links-footer">
                <div className="links-footer__container">

                    <div className="links-footer__columns">
                        <div className="links-footer__column column-footer">
                            <div className="column-footer__title">Додо Пицца</div>
                            <ul className="column-footer__list">
                                <li className="column-footer__item">
                                    <a href="" className="column-footer__link">О нас</a>
                                </li>
                                <li className="column-footer__item">
                                    <a href="" className="column-footer__link">Додо-книга</a>
                                </li>
                                <li className="column-footer__item">
                                    <a href="" className="column-footer__link">Блог «Сила ума»</a>
                                </li>
                                <li className="column-footer__item">
                                    <a href="" className="column-footer__link">Додо ИС</a>
                                </li>
                            </ul>
                        </div>


                        <div className="links-footer__column column-footer">
                            <div className="column-footer__title">Работа</div>
                            <ul className="column-footer__list">
                                <li className="column-footer__item">
                                    <a href="" className="column-footer__link">В пиццерии</a>
                                </li>
                            </ul>
                        </div>


                        <div className="links-footer__column column-footer">
                            <div className="column-footer__title">Партнерам</div>
                            <ul className="column-footer__list">
                                <li className="column-footer__item">
                                    <a href="" className="column-footer__link">Франшиза</a>
                                </li>
                                <li className="column-footer__item">
                                    <a href="" className="column-footer__link">Инвестиции</a>
                                </li>
                                <li className="column-footer__item">
                                    <a href="" className="column-footer__link">Поставщикам</a>
                                </li>
                                <li className="column-footer__item">
                                    <a href="" className="column-footer__link">Предложить помещение</a>
                                </li>
                            </ul>
                        </div>

                        <div className="links-footer__column column-footer">
                            <div className="column-footer__title">Это интересно</div>
                            <ul className="column-footer__list">
                                <li className="column-footer__item">
                                    <a href="" className="column-footer__link">Почему мы готовим без перчаток?</a>
                                </li>
                                <li className="column-footer__item">
                                    <a href="" className="column-footer__link">Экскурсии и мастер-классы</a>
                                </li>
                                <li className="column-footer__item">
                                    <a href="" className="column-footer__link">Корпоративные заказы</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="links-footer__download download-footer">
                        <div className="download-footer__items">
                            <a href="" className="download-footer__item">
                                <img src={app} alt="" />


                            </a>
                            <a href="" className="download-footer__item">
                                <img src={appgallery} alt="" />
                            </a>
                            <a href="" className="download-footer__item">
                                <img src={google} alt="" />
                            </a>
                        </div>
                        <a href="mailto:feedback@dodopizza.com"
                           className="download-footer__mail">feedback@dodopizza.com</a>
                    </div>


                </div>
            </div>

            <div className="footer__about about-footer">
                <div className="about-footer__container">
                    <div className="about-footer__money">
                        <div className="about-footer__title">1 897 818 771 ₽</div>
                        <div className="about-footer__text">Выручка российской сети в этом месяце. В прошлом — 4 346 838
                            873 ₽
                        </div>
                    </div>

                    <div className="about-footer__place">
                        <div className="about-footer__title">821 пиццерия
                        </div>
                        <div className="about-footer__text">в 16 странах, от Великобритании до Нигерии
                        </div>
                    </div>


                </div>
            </div>

            <div className="footer__copy copy-footer">
                <div className="copy-footer__container">
                    <div className="copy-footer__logo">
                        <img src={dodofooter} alt="" />
                            <pre>© 2022</pre>
                    </div>



                    <ul className="copy-footer__list">
                        <li className="copy-footer__item"><a href="" className="copy-footer__link">Правовая
                            информация </a></li>
                        <li className="copy-footer__item"><a href="" className="copy-footer__link">Калорийность и
                            состав </a></li>
                        <li className="copy-footer__item"><a href="" className="copy-footer__link">Помощь </a></li>
                    </ul>

                    <div className="copy-footer__social social-footer">
                        <a href="" className="social-footer__item"><img src={classniki} alt="" /></a>
                        <a href="" className="social-footer__item"><img src={vk} alt="" /></a>
                        <a href="" className="social-footer__item"><img src={youtube} alt="" /></a>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;