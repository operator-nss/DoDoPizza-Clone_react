import React from 'react';
import Header from "./components/Header/Header";
import './App.scss';
import Footer from "./components/Footer/Footer";
import Information from "./components/Information/Information";
import PizzaList from "./components/PizzaList/PizzaList";
import CartContainer from "./components/Cart/CartContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";

const Orders = React.lazy(() => import(/* webpackChunkName: "Orders" */'./pages/Orders/Orders'))


function App() {


    return (
        <BrowserRouter>

                <div className="wrapper">
                    <Header/>

                    <main className="page">

                        <Information/>
                        <CartContainer/>
                        <Routes>
                        <Route path="/" element={<PizzaList/>}/>


                        <Route path="/orders" element={
                            <React.Suspense fallback={<div><Preloader/></div>}>
                                <Orders/>
                            </React.Suspense>
                        }/>
                        </Routes>
                    </main>

                    <Footer/>
                </div>

        </BrowserRouter>
    );
}

export default App;
