import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './Footer';

const multiButton=()=>{
  var output=[];
  for(let i=0;i<11;++i)
      output.push(<button>我是第{i}個按鍵</button>)
  return output;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(multiButton());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
