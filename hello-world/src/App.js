import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <h1>Dashboard</h1>
    <table border="1">
      <thead>
        <tr>
          <th>Hour</th>
          <th>temperature(°C)</th>
        </tr>
      </thead>
      <tbody>
        <tr id="row0">
          <td>Hour 0</td>
          <td></td>
        </tr>
        <tr id="row1">
          <td>Hour 1</td>
          <td>35</td>
        </tr>
        <tr id="row2">
          <td>Hour 2</td>
          <td>35</td>
        </tr>
        <tr id="row3">
          <td>Hour 3</td>
          <td>35</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default App;
