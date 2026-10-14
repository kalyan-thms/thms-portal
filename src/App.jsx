import React, { useState } from 'react';

function App() {
  // Authentication State
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Comprehensive DPR Mock Data
  const data = {
    // 4.1 Temperature Parameters
    temperature: [
      { label: "Oil Temperature", value: "45.2", unit: "°C" },
      { label: "HV Winding Temp", value: "52.1", unit: "°C" },
      { label: "LV Winding Temp", value: "48.7", unit: "°C" },
      { label: "Ambient Temp", value: "32.0", unit: "°C" },
      { label: "Bushing/Lug Temp", value: "38.5", unit: "°C" },
      { label: "Calculated Hotspot", value: "58.4", unit: "°C" }
    ],
    // 4.2 & 4.3 Oil & OLTC Parameters
    oilAndTap: [
      { label: "Oil Level (MOG)", value: "85", unit: "%" },
      { label: "Moisture in Oil", value: "12", unit: "ppm" },
      { label: "Tap Position", value: "3", unit: "" },
      { label: "Tap Change Counter", value: "142", unit: "" }
    ],
    // 4.4 Electrical (HV Side)
    electricalHV: [
      { label: "Voltage (Avg)", value: "33.1", unit: "kV" },
      { label: "Current (Avg)", value: "15.4", unit: "A" },
      { label: "Active Power", value: "850", unit: "kW" },
      { label: "Power Factor", value: "0.98", unit: "" },
      { label: "Frequency", value: "50.02", unit: "Hz" },
      { label: "Harmonics (THD)", value: "2.1", unit: "%" }
    ],
    // 4.4 Electrical (LV Side)
    electricalLV: [
      { label: "Voltage (Avg)", value: "435", unit: "V" },
      { label: "Current (Avg)", value: "1150", unit: "A" },
      { label: "Active Power", value: "835", unit: "kW" },
      { label: "Transformer Load", value: "83.5", unit: "%" },
      { label: "Energy Delivered", value: "45210", unit: "kWh" },
      { label: "Harmonics (THD)", value: "3.4", unit: "%" }
    ],
    // 4.5 Health & Analytics
    health: [
      { label: "Composite Health Index", value: "92", unit: "/100" },
      { label: "Efficiency", value: "98.2", unit: "%" },
      { label: "Total Est. Losses", value: "15", unit: "kW" },
      { label: "Rem. Life Estimate", value: "22.4", unit: "Yrs" }
    ],
    // 4.8 & 4.10 Device & Cooling
    system: [
      { label: "Network Signal", value: "-68", unit: "dBm" },
      { label: "Comm Link", value: "ONLINE", unit: "" },
      { label: "Cooling Fan Status", value: "RUNNING", unit: "" },
      { label: "Cooling Motor Current", value: "4.2", unit: "A" }
    ],
    // 4.6 Alarms
    alarms: [
      { label: "Buchholz Relay", status: "NORMAL" },
      { label: "PRD/PRV", status: "NORMAL" },
      { label: "Overload", status: "NORMAL" },
      { label: "Phase Failure", status: "NORMAL" }
    ]
  };

  // --- LOGIN SCREEN COMPONENT ---
  if (!isLoggedIn) {
    return (
      <div style={{ display: 'flex', height: '100vh', backgroundColor: '#0f172a', justifyContent: 'center', alignItems: 'center', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ backgroundColor: '#1e293b', padding: '40px', borderRadius: '12px', width: '350px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)' }}>
          <h2 style={{ color: '#f8fafc', margin: '0 0 10px 0', textAlign: 'center' }}>THMS Portal</h2>
          <p style={{ color: '#94a3b8', margin: '0 0 30px 0', textAlign: 'center', fontSize: '14px' }}>Secure IoT Telemetry Login</p>

          <input type="text" placeholder="User ID" style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#0f172a', color: '#f8fafc', boxSizing: 'border-box' }} />
          <input type="password" placeholder="Password" style={{ width: '100%', padding: '12px', marginBottom: '25px', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#0f172a', color: '#f8fafc', boxSizing: 'border-box' }} />

          <button onClick={() => setIsLoggedIn(true)} style={{ width: '100%', padding: '12px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.3s' }}>
            Authenticate Session
          </button>
        </div>
      </div>
    );
  }

  // --- DASHBOARD COMPONENT ---
  const Section = ({ title, items }) => (
    <div style={{ marginBottom: '30px' }}>
      <h3 style={{ color: '#64748b', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px', marginBottom: '15px', fontSize: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>{title}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
        {items.map((item, idx) => (
          <div key={idx} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <p style={{ margin: '0 0 5px 0', fontSize: '13px', color: '#64748b', fontWeight: '600' }}>{item.label}</p>
            {item.status ? (
              <span style={{ display: 'inline-block', marginTop: '5px', padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', backgroundColor: item.status === 'NORMAL' ? '#dcfce7' : '#fee2e2', color: item.status === 'NORMAL' ? '#166534' : '#991b1b' }}>{item.status}</span>
            ) : (
              <p style={{ margin: '0', fontSize: '24px', color: '#0f172a', fontWeight: 'bold' }}>{item.value} <span style={{ fontSize: '14px', color: '#94a3b8' }}>{item.unit}</span></p>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      {/* Sidebar */}
      <div style={{ width: '250px', backgroundColor: '#0f172a', color: '#f8fafc', padding: '20px', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontSize: '20px', margin: '0 0 40px 0', color: '#38bdf8' }}>THMS Executive</h2>
        <div style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '2.5' }}>
          <p style={{ margin: 0, color: '#f8fafc', fontWeight: 'bold' }}>Live Dashboard</p>
          <p style={{ margin: 0 }}>Historical Trends</p>
          <p style={{ margin: 0 }}>Analytics & Reports</p>
          <p style={{ margin: 0 }}>Device Management</p>
        </div>
        <button onClick={() => setIsLoggedIn(false)} style={{ marginTop: 'auto', padding: '10px', backgroundColor: 'transparent', border: '1px solid #334155', color: '#94a3b8', borderRadius: '6px', cursor: 'pointer' }}>Secure Logout</button>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h1 style={{ margin: '0 0 5px 0', color: '#0f172a' }}>Station Alpha: 5MVA Transformer</h1>
            <p style={{ margin: '0', color: '#64748b' }}>Last Sync: Just now | Status: Healthy</p>
          </div>
        </div>

        <Section title="4.1 Temperature Dynamics" items={data.temperature} />
        <Section title="4.2 & 4.3 Fluid & Tap Control" items={data.oilAndTap} />
        <Section title="4.4 Electrical Telemetry (HV Primary)" items={data.electricalHV} />
        <Section title="4.4 Electrical Telemetry (LV Secondary)" items={data.electricalLV} />
        <Section title="4.5 Asset Health & Analytics" items={data.health} />
        <Section title="4.6 Protection Relays & Alarms" items={data.alarms} />
        <Section title="4.8 & 4.10 Device & Cooling Status" items={data.system} />
      </div>
    </div>
  );
}

export default App;