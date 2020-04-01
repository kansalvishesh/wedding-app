import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './container/homes'
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./weddingapp.css";
import ContactUs from './container/contactUs';
import AboutUs from "./container/aboutUs";
import Products from './products/productsCatalogue';
import ProductDescription from "./products/productDescription";
import Login from "./container/login";
import { createStore , applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import loginReducer from "./entities/reducers/loginReducer";
import List from "./users/list"
import logger from "redux-logger"

const myStore = createStore(loginReducer , applyMiddleware(logger, thunk));

const app = (
    <Provider store={myStore} >
    <Router>
        <div>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/ContactUs" component={ContactUs} />
            <Route exact path="/AboutUs" component={AboutUs} />
            <Route exact path="/Products" component={Products} />
            <Route exact path="/users" component={List} />
            <Route exact path="/Products/:myProductId" component={ProductDescription} />
            <Route exact path="/App" component={App} />
         
        </div>
    </Router>
    </Provider>
)



ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
