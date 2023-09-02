import React from 'react';
import Header from "./components/Header/Header";
import Participation from "./components/Participation/Participation";
import Exclusive from "./components/Exclusive/Exclusive";
import Subscription from "./components/Subscription/Subscription";
import AdditionOption from "./components/AdditionOption/AdditionOption";

const App = () => {
    return (
        <div>
            <Header bottom={'8rem'}/>
            <Participation bottom={'8rem'}/>
            <Exclusive bottom={'8rem'}/>
            <Subscription bottom={'8rem'}/>
            <AdditionOption/>
        </div>
    );
};

export default App;