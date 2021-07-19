import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './app'
import 'font-awesome/css/font-awesome.css'

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'));