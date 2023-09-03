import React from 'react';
import s from "./Exclusive.module.css"

import Caption from "../UIElements/Caption/Caption";
import PhotoCard from "./PhotoCard/PhotoCard";

import imgExclusive1 from '../../res/image/Exclusive1.png';
import imgExclusive2 from '../../res/image/Exclusive2.png';
import imgExclusive3 from '../../res/image/Exclusive3.png';
import imgExclusive4 from '../../res/image/Exclusive4.png';

import geoImg from '../../res/image/Geo.png';
import clipImg from '../../res/image/Clip.png';
import coffeeImg from '../../res/image/Coffee.png';

import margin from '../../style/margin.module.css'

import PhotoCardExtra from "./PhotoCardExtra/PhotoCardExtra";
import YandexText from "../UIElements/YandexText/YandexText";

const Exclusive = () => {
    return (
        <div className={margin.mainBlockMarginBottom}>
            <Caption>Эксклюзивный доступ к событиям Самокатов</Caption>
            <div className={s.textBlock}>
                <YandexText>С абонементом — у вас доступ к специальным мероприятиям, скидки и классный мерч. В 2023 году
                    мы
                    танцевали на Даче Плюс с Антохой MC, катались на самокатах с Сергеем Мезенцевым и слушали хор
                    Attaque de Panique</YandexText>
            </div>

            <div className={s.cardTable}>
                <div className={s.col + " " + s.col1}>
                    <PhotoCard imgSrc={imgExclusive1}>
                        <PhotoCardExtra imgSrc={geoImg}
                                        left={-10.5}
                                        top={-5}
                                        shadowColor={"#D2BDFF"}
                                        width={22}
                                        height={22 * 593.0 / 525}/>
                    </PhotoCard>
                    <PhotoCard imgSrc={imgExclusive2}/>
                </div>
                <div className={s.col + " " + s.col2}>
                    <PhotoCard imgSrc={imgExclusive3}>
                        <PhotoCardExtra imgSrc={clipImg}
                                        right={-6}
                                        top={-6}
                                        shadowColor={"#C1A4FF"}
                                        width={14}
                                        height={14 * 696 / 598}/>
                    </PhotoCard>
                    <PhotoCard imgSrc={imgExclusive4}>
                        <PhotoCardExtra imgSrc={coffeeImg}
                                        right={-12.5}
                                        top={12}
                                        shadowColor={"#C1A4FF"}
                                        width={30}
                                        height={30 * 696 / 598}/>
                    </PhotoCard>
                </div>
            </div>
        </div>
    );
};

export default Exclusive;