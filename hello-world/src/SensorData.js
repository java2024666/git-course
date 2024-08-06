import React, { Component } from 'react';

class SensorData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sensorData: null,
    };
    console.log('Constructor');
  }

  fetchSensorData = () => {
    // 模擬傳感器數據請求
    const newSensorData = {
      temperature: (Math.random() * 30).toFixed(2), // 隨機溫度數據
      humidity: (Math.random() * 100).toFixed(2), // 隨機濕度數據
      timestamp: new Date().toLocaleTimeString(), // 當前時間戳
    };
    this.setState({ sensorData: newSensorData });
    console.log('Sensor data fetched:', newSensorData);
  }

  componentDidMount() {
    console.log('Component did mount');
    this.fetchSensorData(); // 初始數據請求
    this.interval = setInterval(this.fetchSensorData, 60000); // 每分鐘更新一次數據
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
    clearInterval(this.interval); // 清除定時器
  }

  render() {
    console.log('Render');
    const { sensorData } = this.state;
    return (
      <div>
        <h1>Sensor Data</h1>
        {sensorData ? (
          <div>
            <p>Temperature: {sensorData.temperature} °C</p>
            <p>Humidity: {sensorData.humidity} %</p>
            <p>Last updated: {sensorData.timestamp}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default SensorData;