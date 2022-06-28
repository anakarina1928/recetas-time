import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import App from './App';

import AddRecet from './components/AddRecet/AddRecet'

ReactDOM.render(
    <BrowserRouter>
      <AddRecet/>
    </BrowserRouter>,
    
    document.getElementById('root')
    );