import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './store/store'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //Apparently, there are some side effects to strict mode - some components render twice, for example.
//   <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
//   </React.StrictMode>
);

