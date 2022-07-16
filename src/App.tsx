import React from 'react';

import Header from "./components/Header/Header";
import './App.scss';
import Footer from "./components/Footer/Footer";
import Information from "./components/Information/Information";
import Often from "./components/Often/Often";
import PizzaList from "./components/PizzaList/PizzaList";
import CartContainer from "./components/Cart/CartContainer";

function App() {


    return (
        <div className="wrapper">
            <Header/>

            <main className="page">

                <Information/>
                <Often/>
                <CartContainer/>
                <PizzaList/>
            </main>

            <Footer/>
        </div>
    );
}

export default App;
