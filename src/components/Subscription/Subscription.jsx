import React from 'react';
import s from './Subscription.module.css'

import Caption from "../UIElements/Caption/Caption";
import YandexButton from "../UIElements/YandexButton/YandexButton";

import scooterImg1 from '../../res/image/scooter2.png';
import scooterImgLover from '../../res/image/scooterLover.png';

import margin from '../../style/margin.module.css'

const Subscription = ({bottom}) => {
    return (
        <div className={s.mainBlock + " " + margin.mainBlockMarginBottom} style={{marginBottom: bottom}}>
            <div className={s.col}>
                <Caption width={"25.4375rem"}>Купить абонемент и вступить в клуб смогут те, кто в Плюсе</Caption>
                <div className={s.text}>За каждую поездку на самокатах такие пользователи получают кешбэк баллами.
                    Баллы
                    можно тратить на
                    поездки на самокатах и такси с Яндекс Go, покупки и заказы в других сервисах Яндекса
                </div>

                <div className={s.img} style={{
                    left: "19.28rem",
                    bottom: "-13.47rem"
                }}>
                    <img src={scooterImg1} alt=""/>
                </div>
            </div>


            <div className={s.col} style={{
                marginLeft: "30rem"
            }}>
                <Caption width={"25.4375rem"}>80 % наших пользователей уже в клубе и экономят на поездках</Caption>
                <div className={s.text}>Присоединяйтесь — опция начнёт действовать в начале сезона–2024. Об открытии
                    сезона предупредим заранее, чтобы вы были готовы
                </div>
                <YandexButton>Хочу абонемент</YandexButton>

                <div className={s.img} style={{
                    left: `${-7 - 28.15069}rem`,
                }}>
                    <img src={scooterImgLover} alt=""/>
                    <div className={s.ellipse}></div>
                </div>
            </div>

        </div>
    );
};

export default Subscription;