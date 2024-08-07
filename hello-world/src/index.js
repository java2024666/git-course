import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const testFunction =()=> {
  return(
      // Create a simple form with padding 20px
      <div>
        <h1>感測器資料</h1>
        <table>
            <thead>
                <tr>
                    <th>裝置名稱</th>
                    <th>溫度</th>
                    <th>濕度</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>sensor-001</td>
                    <td>35</td>
                    <td>80</td>
                </tr>

                <tr>
                    <td>sensor-002</td>
                    <td>28</td>
                    <td>65</td>
                </tr>
                <tr>
                    <td>sensor-003</td>
                    <td>32</td>
                    <td>75</td>
                </tr>
            </tbody>
        </table>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(testFunction());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();