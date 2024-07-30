import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Product(props) {
  return(
    <h1> {props.name} </h1>
  );
}

function Price(props) {
  return(
    <h2> 價格: {props.number} </h2>
  );
}

const onBuy = (event) =>{
  console.log('以購買商品')
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Product name='蘋果' />
    <Price number='5' />
    <button value={'以購買商品'} onClick={onBuy}>購買</button>

  </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
