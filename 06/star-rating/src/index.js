import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import colors from "./data/colors.json"

export const ColorContext = createContext();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ColorContext.Provider value={colors}>
        <App />
    </ColorContext.Provider>
);