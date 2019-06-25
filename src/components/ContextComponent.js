import React from 'react';
import { Route } from 'react-router-dom';

const ContextComponent = ({ context, Component, value, ...rest }) => {
    const { Provider } = context;
    return (
        <Route {...rest}>
            <Provider value={value}>
                <Component />
            </Provider>
        </Route>
    );
}

export default ContextComponent;