import logo from './logo.svg';
import './App.css';
import './index';

function App({data}) {
  return (
    <div>
    <h1>Dashboard</h1>
    <table border="1" id="table">
      <thead>
        <tr>
          <th>Hour</th>
          <th>temperature(°C)</th>
        </tr>
      </thead>
      <tbody>
      {data.map((temp, index) => (
            <tr key={`row${index}`} id={`row${index}`}>
              <td>Hour {index}</td>
              <td>{temp.temperature}</td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>

  
  );
}

export default App;
