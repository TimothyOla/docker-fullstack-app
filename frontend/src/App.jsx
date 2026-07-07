import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Connecting to backend...');

  useEffect(() => {
    // Browser can only reach localhost
    fetch('http://localhost:5000/api')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('Backend not reachable'));
  }, []);

  return (
    <div style={{ 
      padding: '50px', 
      textAlign: 'center', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh'
    }}>
      <h1>🚀 Fullstack Docker App</h1>
      <h2>Backend says: {message}</h2>
      <p style={{ color: 'green', fontWeight: 'bold' }}>
        ✅ Frontend is running successfully inside Docker!<br/>
        ✅ Backend is running successfully!
      </p>
    </div>
  );
}

export default App;
