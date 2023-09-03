import React from 'react';

import Header from "./components/Header/Header";
import Participation from "./components/Participation/Participation";
import Exclusive from "./components/Exclusive/Exclusive";
import Subscription from "./components/Subscription/Subscription";
import AdditionOption from "./components/AdditionOption/AdditionOption";
import s from "./App.module.css";
import YandexButton from "./components/UIElements/YandexButton/YandexButton";

const App = () => {
    return (
        <div>
            <div className={s.mob} style={{position: "fixed", zIndex: 100}}>
                <YandexButton isFixed={true}>Стать частью клуба</YandexButton>
            </div>
            <div className={s.block}></div>
            <Header/>
            <Participation/>
            <Exclusive/>
            <Subscription/>
            <AdditionOption/>
        </div>
    );
};

export default App;