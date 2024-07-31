import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

function Product({name}) {
  return(
    <h1> {name} </h1>
  );
}

function Price({number}) {
  return(
    <h2> 價格: {number} </h2>
  );
}

function App() {
  const ProductName = '蘋果';
  const PriceNumber = '5';


const onBuy = (event) =>{
  console.log(`以購買商品: ${ProductName}, 價格: ${PriceNumber}`)
}

return (
  <div>
    <Product name={ProductName} />
    <Price number={PriceNumber} />
    <button onClick={onBuy}>購買</button>
  </div>
);
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
