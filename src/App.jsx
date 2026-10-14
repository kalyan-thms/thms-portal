import React from 'react';

function App() {
  // This is mock data simulating what your ESP32 will eventually send
  const telemetry = {
    voltage: 232.5,
    current: 14.2,
    temperature: 45,
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#1a1a1a', marginBottom: '40px' }}>
        Transformer Health Monitoring System
      </h1>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>

        {/* Voltage Card */}
        <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '250px', textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#666' }}>Phase Voltage</h3>
          <p style={{ fontSize: '36px', margin: '0', color: '#007bff', fontWeight: 'bold' }}>{telemetry.voltage} V</p>
          <p style={{ margin: '10px 0 0 0', fontSize: '12px', color: '#999' }}>Schneider EM6436H</p>
        </div>

        {/* Current Card */}
        <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '250px', textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#666' }}>Line Current</h3>
          <p style={{ fontSize: '36px', margin: '0', color: '#dc3545', fontWeight: 'bold' }}>{telemetry.current} A</p>
          <p style={{ margin: '10px 0 0 0', fontSize: '12px', color: '#999' }}>Secure Elite 440</p>
        </div>

        {/* Temperature Card */}
        <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '250px', textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#666' }}>Oil Temperature</h3>
          <p style={{ fontSize: '36px', margin: '0', color: '#ffc107', fontWeight: 'bold' }}>{telemetry.temperature} °C</p>
          <p style={{ margin: '10px 0 0 0', fontSize: '12px', color: '#999' }}>Internal Sensor</p>
        </div>

      </div>
    </div>
  );
}

export default App;