import React from 'react';
import ReactDOM from 'react-dom';
import { CalculatorUi } from './Components/Calculadora';
import './Styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <CalculatorUi />
  </React.StrictMode>,
  document.getElementById('root')
);

