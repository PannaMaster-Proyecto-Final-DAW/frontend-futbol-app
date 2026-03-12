import React, { useState } from 'react';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <main>
      {!isLoggedIn ? (
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
      ) : (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
          <h1 className="text-panna-gold text-5xl font-black mb-4 underline decoration-panna-blue">PANNAMASTER</h1>
          <p className="text-xl italic">Bienvenido al Vestuario</p>
          <button onClick={() => setIsLoggedIn(false)} className="mt-10 text-red-500 underline">Salir</button>
        </div>
      )}
    </main>
  );
}

export default App;