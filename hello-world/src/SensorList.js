import React from 'react';

function Sensor({name, isOnline}){
    if (!isOnline){
        return null;
    }
    return <li>{name}-在線</li>
}

function SensorList() {
  const sensors = [
    { name: '溫度感測器', isOnline: true },
    { name: '濕度感測器', isOnline: false },
    { name: '壓力感測器', isOnline: true },
    { name: '光線感測器', isOnline: false },
  ];

  return (
    <section>
        <h1>儀表板</h1>
      <h2>感測器狀態監控</h2>
      <ul>
        {sensors.map((sensor, index) => (
          <Sensor 
            key={index} 
            name={sensor.name} 
            isOnline={sensor.isOnline} 
          />
        ))}
      </ul>
    </section>
  );
}

export default SensorList;