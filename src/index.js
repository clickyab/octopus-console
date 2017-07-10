import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import registerServiceWorker from './app/worker/registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import store from "./app/redux/store/store";
import App from "./app/sciences/index";
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

ReactDOM.render(<Provider store={store}><LocaleProvider locale={enUS}><App/></LocaleProvider></Provider>, document.getElementById('root'));
registerServiceWorker();
