import React, { useState } from 'react';
import { Lock, Mail, UserPlus, LogIn } from 'lucide-react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulación de entrada
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-black italic text-green-500 tracking-tighter">FUTBOL-11</h1>
        <p className="mt-4 text-xl">¡Sesión iniciada con éxito!</p>
        <button onClick={() => setIsLoggedIn(false)} className="mt-8 bg-white text-black px-6 py-2 rounded-full font-bold">Cerrar Sesión</button>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(2,6,23,0.9)), url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2070&auto=format&fit=crop')`
      }}
    >
      <div className="w-full max-w-md">
        {/* Logo superior */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-black italic text-white tracking-tighter flex items-center justify-center gap-2">
            FUTBOL<span className="text-green-500">11</span>
          </h1>
          <p className="text-gray-300 font-medium mt-2 uppercase tracking-widest text-xs">The Ultimate Manager</p>
        </div>

        {/* Tarjeta de Login (Efecto Cristal) */}
        <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] shadow-2xl">
          <div className="flex gap-4 mb-8">
            <button className="flex-1 pb-2 border-b-2 border-green-500 text-white font-bold">LOGIN</button>
            <button className="flex-1 pb-2 border-b-2 border-transparent text-gray-500 font-bold hover:text-gray-300 transition">REGISTRO</button>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition"
                  required
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition"
                  required
                />
              </div>
            </div>

            <div className="text-right">
              <a href="#" className="text-xs text-gray-400 hover:text-green-500 transition">¿Olvidaste tu contraseña?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-400 text-black font-black py-4 rounded-2xl shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all transform active:scale-95 flex items-center justify-center gap-2 uppercase"
            >
              <LogIn size={20} />
              Entrar a jugar
            </button>
          </form>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-[1px] bg-white/10 flex-1"></div>
            <span className="text-gray-500 text-xs uppercase font-bold">O accede con</span>
            <div className="h-[1px] bg-white/10 flex-1"></div>
          </div>

          <button className="w-full mt-6 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-3 rounded-2xl transition flex items-center justify-center gap-2">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="google" />
            Google
          </button>
        </div>

        <p className="text-center mt-8 text-gray-400 text-sm">
          Al entrar aceptas nuestros <span className="text-white underline cursor-pointer">Términos y Condiciones</span>
        </p>
      </div>
    </div>
  );
}

export default App;