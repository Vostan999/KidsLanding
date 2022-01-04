import React from 'react';
import AppNavigation from "./app/navigation/AppNavigation";
import {Provider} from "react-redux";
import store from "./app/component/redux";

const App = () => {
    return (
        <Provider store={store}>
            <AppNavigation />
        </Provider>
    );
};

export default App;
