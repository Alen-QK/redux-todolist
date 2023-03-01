import {getByText, render, screen} from '@testing-library/react';
import {Provider} from 'react-redux'
import {configureStore} from "@reduxjs/toolkit";
import itemReducer from "./reducer/itemReducer";
import App from './App'
import React from "react";


test('should render root div', () => {
    render(<Provider store={
        configureStore({
            reducer: {
                itemR: itemReducer
            }
        })
    }>
        <App/>
    </Provider>);

    expect(screen.getByText(/To Do List/i)).toBeInTheDocument()
});
