import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./redux/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            {/*TODO сделать чтобы попап закрывался на попап пицце после закрытия пиццы*/}
            {/*TODO попап сделать при отправке пиццы в корзины*/}
            <App/>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
