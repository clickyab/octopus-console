import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './app/routes/routes';
import {Provider} from 'react-redux';
import registerServiceWorker from './app/worker/registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import store from "./app/redux/store/store";

ReactDOM.render(<Provider store={store}><Routes/></Provider>, document.getElementById('root'));
registerServiceWorker();
