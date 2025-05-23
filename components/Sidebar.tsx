'use client';

export default function Sidebar() {
  return (
    <div style={{
      width: '240px',
      backgroundColor: '#1E1E2F',
      color: 'white',
      height: '100vh',
      padding: '1rem',
      boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
    }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Task Organizer</h2>
      <div style={{ marginBottom: '1rem', cursor: 'pointer' }}>Dashboard</div>
      <div style={{ marginBottom: '1rem', cursor: 'pointer' }}>Tasks</div>
      <div style={{ marginBottom: '1rem', cursor: 'pointer' }}>Settings</div>
    </div>
  );
}
