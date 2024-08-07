import React from 'react';
import ReactDOM from 'react-dom/client';
import Greeting from './Greeting';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <Greeting divicename="Light" status="on" />
  <Greeting divicename="DoorLock" status="Locked" />
  <Greeting divicename="Thmometer" status="23 C" />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();