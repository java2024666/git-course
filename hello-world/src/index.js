import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const data = [
  { "temperature": "25°C" },
  { "temperature": "22°C" },
  { "temperature": "36°C" },
  { "temperature": "34°C" }
];

data.map(temp, index) => {
  const row = document.getElementById(`row${index}`);
  const tempCall
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App data={data} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

