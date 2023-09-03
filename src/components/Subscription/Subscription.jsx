import React from 'react';
import s from './Subscription.module.css'

import Caption from "../UIElements/Caption/Caption";
import YandexButton from "../UIElements/YandexButton/YandexButton";

import scooterImg1 from '../../res/image/scooter2.png';
import scooterImgLover from '../../res/image/scooterLover.png';

import margin from '../../style/margin.module.css'
import YandexText from "../UIElements/YandexText/YandexText";

const Subscription = () => {
    console.log(`calc(${26.49631 * 0.5}rem + ${26.49631 * 0.5}vw)`)

    return (
        <div className={s.mainBlock + " " + margin.mainBlockMarginBottom}>
            <div className={s.col}>
                <Caption width={`calc(${25.4375 * 0.5}rem + ${25.4375 * 0.5}vw)`}>Купить абонемент и вступить в клуб
                    смогут те, кто в Плюсе</Caption>
                <div className={s.textBlock}><YandexText>За каждую поездку на самокатах такие пользователи получают
                    кешбэк
                    баллами. Баллыможно тратить на поездки на самокатах и такси с Яндекс Go, покупки и заказы в других
                    сервисах Яндекса</YandexText>
                </div>

                <div className={s.img + " " + s.desk} style={{
                    left: `calc(${19.28 * 0.5}rem + ${19.28 * 0.5}vw)`,
                    bottom: `calc(${-13.47 * 0.5}rem + ${-13.47 * 0.5}vw)`,
                }}>
                    <img src={scooterImg1} alt="" style={{
                        width: `calc(${55.76119 * 0.5}rem + ${55.76119 * 0.5}vw)`,
                        height: `calc(${55.76119 * 0.5}rem + ${55.76119 * 0.5}vw)`,
                    }}/>
                </div>
                <div className={s.img + " " + s.mob} style={{
                    left: `calc(${-35.15069 * 0.5}rem + ${-35.15069 * 0.5}vw)`,
                }}>
                    <img src={scooterImgLover} alt="" style={{
                        width: `calc(${30 * 0.5}rem + ${30 * 0.5}vw)`,
                        height: `calc(${30 * 0.5}rem + ${30 * 0.5}vw)`,
                    }}/>
                    <div className={s.ellipse}></div>
                </div>
            </div>

            <div className={s.col + " " + s.col2}>
                <Caption width={`calc(${25.4375 * 0.5}rem + ${25.4375 * 0.5}vw)`}>80 % наших пользователей уже в клубе и
                    экономят на поездках</Caption>
                <div className={s.textBlock}><YandexText>Присоединяйтесь — опция начнёт действовать в начале
                    сезона–2024. Об
                    открытии сезона предупредим заранее, чтобы вы были готовы</YandexText>
                </div>
                <YandexButton>Хочу абонемент</YandexButton>

                <div className={s.img + " " + s.desk} style={{
                    left: `calc(${-35.15069 * 0.5}rem + ${-35.15069 * 0.5}vw)`,
                }}>
                    <img src={scooterImgLover} alt="" style={{
                        width: `calc(${30 * 0.5}rem + ${30 * 0.5}vw)`,
                        height: `calc(${30 * 0.5}rem + ${30 * 0.5}vw)`,
                    }}/>
                    <div className={s.ellipse}></div>
                </div>
            </div>

        </div>
    );
};

export default Subscription;