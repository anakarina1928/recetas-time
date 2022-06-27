import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import App from './App';

import FormTheRcet from './form/Form'

ReactDOM.render(
    <BrowserRouter>
      <FormTheRcet/>
    </BrowserRouter>,
    
    document.getElementById('root')
    );