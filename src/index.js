import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer, hot } from 'react-hot-loader';

import App from './App';
import store from './store';



const root = document.getElementById('root');

const renderApp = Component => {
    render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        root
    )
}

renderApp(App);