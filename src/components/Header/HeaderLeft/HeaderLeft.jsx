import React from 'react';
import s from './HeaderLeft.module.css'
import YandexButton from "../../UIElements/YandexButton/YandexButton";

const HeaderLeft = ({children}) => {
    return (
        <div>
            <div className={s.headerLeft}>
                <div className={s.headerLeftImg}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="176" height="51" viewBox="0 0 176 51" fill="none">
                        <path
                            d="M139.016 0H158.478C163.125 0.000484188 167.581 1.84613 170.867 5.13103C174.153 8.41593 176 12.8711 176 17.5166V32.6138C176 34.914 175.547 37.1917 174.666 39.3168C173.786 41.442 172.495 43.3729 170.868 44.9993C169.241 46.6257 167.309 47.9158 165.183 48.7959C163.057 49.676 160.779 50.1288 158.478 50.1286H139.216C136.915 50.1288 134.637 49.676 132.511 48.7959C130.385 47.9158 128.454 46.6257 126.826 44.9993C125.199 43.3729 123.909 41.442 123.028 39.3168C122.147 37.1917 121.694 34.914 121.694 32.6138V17.5166C121.694 7.84075 129.336 0 139.016 0Z"
                            fill="#21201F"/>
                        <path
                            d="M143.778 28.3427V27.4918H138.652V23.7047H148.646V28.2094C148.646 35.2997 145.259 39.4191 138.853 39.4191C132.247 39.4191 128.41 34.215 128.41 25.0395C128.41 16.0922 132.597 10.6143 140.279 10.6143C143.181 10.6143 145.684 11.383 147.052 12.3836V16.2821C145.087 15.0648 142.824 14.4121 140.513 14.3959C135.475 14.3959 133.339 17.8159 133.339 25.0395C133.339 32.0458 135.108 35.6302 138.944 35.6302C142.609 35.6484 143.778 32.8127 143.778 28.3427Z"
                            fill="white"/>
                        <path
                            d="M169.371 28.8759C169.371 35.6831 165.701 39.4355 160.423 39.4355C155.146 39.4355 151.476 35.6831 151.476 28.927C151.476 22.1197 155.146 18.3674 160.423 18.3674C165.701 18.3674 169.371 22.1033 169.371 28.8759ZM164.415 28.8759C164.415 24.205 163.08 22.1544 160.429 22.1544C157.778 22.1544 156.441 24.205 156.441 28.927C156.441 33.5979 157.776 35.6503 160.429 35.6503C163.082 35.6503 164.415 33.5814 164.415 28.8759Z"
                            fill="white"/>
                        <path
                            d="M13.746 14.8149H11.5548C7.57416 14.8149 5.47794 16.8326 5.47794 19.8181C5.47794 23.2053 6.92776 24.7738 9.91507 26.7915L12.3674 28.444L5.27708 39.0347H0L6.35623 29.5597C2.68602 26.9412 0.633615 24.4068 0.633615 20.0865C0.633615 14.6816 4.38235 11.0278 11.5037 11.0278H18.5921V39.0365H13.7295V14.8149H13.746ZM38.6359 18.7682V39.0365H33.8482V30.5786H27.4408V39.0365H22.6531V18.7682H27.4408V26.7915H33.8482V18.7682H38.6359ZM60.2719 43.6581H55.8348V39.0201H45.0743V43.6581H40.6372V35.2421H42.1381C43.8235 31.8549 44.1576 25.4494 44.1576 20.4955V18.7609H58.1355V35.2421H60.2719V43.6581ZM53.3478 22.5552H48.2771V23.156C48.2771 26.6582 47.9119 32.18 46.5752 35.2494H53.3478V22.5552ZM71.0306 39.42C64.9099 39.42 61.4387 35.9999 61.4387 28.9443C61.4387 22.8218 64.2252 18.3537 70.0646 18.3537C74.8523 18.3537 77.9547 21.0214 77.9547 28.0624V30.5968H66.3944C66.5934 33.984 67.9282 35.6347 71.4323 35.6347C73.7677 35.6347 76.2693 34.7509 77.7538 33.7339V37.6524C76.3533 38.6202 74.1001 39.42 71.0306 39.42ZM66.3944 27.0581H73.083V26.66C73.083 24.1256 72.3526 22.1572 69.9788 22.1572C67.6945 22.1371 66.5277 23.8389 66.3944 27.0581ZM85.978 29.0776V39.0365H81.1739V18.7682H85.978V28.1099L92.7597 18.7682H97.5986L90.826 28.1099L98.5152 39.0201H93.0683L85.978 29.0776ZM98.2395 28.9115C98.2395 22.7378 101.426 18.3518 107.552 18.3518C109.926 18.3518 111.706 18.7517 112.707 19.3178V23.3897C111.739 22.789 109.92 22.1371 108.069 22.1371C104.932 22.1371 103.197 24.3903 103.197 28.7946C103.197 32.9816 104.616 35.6493 108.036 35.6493C110.054 35.6493 111.505 35.1326 112.707 34.2817V38.1856C111.538 39.0365 109.968 39.4364 107.751 39.4364C101.342 39.42 98.2377 35.684 98.2377 28.9115H98.2395Z"
                            fill="#21201F"/>
                    </svg>
                </div>
                <div className={s.headerLeftText}>
                    Вступайте в клуб Самокатов
                </div>
                <div className={s.headerLeftAbo}>
                    Купите абонемент, чтобы стать частью клуба в новом сезоне–2024.
                    <div style={{display: "flex"}}>
                        <div> 8 месяцев за</div>
                        <div className={s.headerLeftSum}>
                            <div className={s.headerLeftFinal}>
                                499₽
                            </div>
                            <div className={s.headerLeftCrossOut}>
                                3190₽
                            </div>
                        </div>
                    </div>
                </div>
                <YandexButton>Стать частью клуба</YandexButton>
            </div>
            {children}
        </div>
    );
};

export default HeaderLeft;