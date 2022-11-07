import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import colors from "./data/colors.json"
import ColorProvider from "./provider/ColorProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ColorProvider value={colors}>
        <App />
    </ColorProvider>
);