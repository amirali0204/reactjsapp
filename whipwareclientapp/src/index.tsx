import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './Apps/App';
import * as serviceWorker from './serviceWorker';
import createBrowserHistory from 'history/createBrowserHistory';
import  {persistor,store} from "./Reducers/Storeconfig"
import { PersistGate } from 'redux-persist/lib/integration/react';
// import the two exports from the last code snippet.
const history = createBrowserHistory();

ReactDOM.render(
<Provider store={store}>
    <PersistGate persistor={persistor}>
        <Router history={history}>
            <App />
        </Router>
    </PersistGate>
</Provider>, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
