import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";

import App from './App';
import itemReducer from "./reducer/itemReducer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={
            configureStore({
                reducer: {
                    itemR: itemReducer
                }
            })
        }>
            <App/>
        </Provider>
    </React.StrictMode>
);
