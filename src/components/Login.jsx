import React, { useState } from 'react';
import { Lock, Mail, Trophy, User, Flag, LogIn, UserPlus } from 'lucide-react';
import logoPanna from '../assets/logo_pannamaster.jpg';

function Login({ onLoginSuccess }) {
    const [isRegistering, setIsRegistering] = useState(false);

    return (
        <div className="panna-bg-stadium">
            <div className="w-full max-w-md">
                <div className="flex justify-center mb-6">
                    <img
                        src={logoPanna}
                        alt="PannaMaster"
                        className="h-40 w-40 object-contain rounded-full border-4 border-panna-gold shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                    />
                </div>

                <div className="bg-panna-dark/80 backdrop-blur-xl border border-panna-gold/20 p-8 rounded-[2.5rem] shadow-2xl">
                    <div className="flex gap-2 mb-8 bg-white/5 p-1 rounded-full">
                        <button
                            onClick={() => setIsRegistering(false)}
                            className={`flex-1 py-3 rounded-full font-bold text-xs transition-all ${!isRegistering ? 'bg-panna-gold text-black' : 'text-gray-400'}`}
                        >
                            LOGIN
                        </button>
                        <button
                            onClick={() => setIsRegistering(true)}
                            className={`flex-1 py-3 rounded-full font-bold text-xs transition-all ${isRegistering ? 'bg-panna-gold text-black' : 'text-gray-400'}`}
                        >
                            REGISTRO
                        </button>
                    </div>

                    <form onSubmit={(e) => { e.preventDefault(); onLoginSuccess(); }} className="space-y-4">
                        <div className="relative">
                            <Mail className="absolute left-4 top-4 text-panna-gold" size={18} />
                            <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 py-3.5 pl-12 pr-4 rounded-xl text-white focus:border-panna-gold outline-none" required />
                        </div>

                        <div className="relative">
                            <Lock className="absolute left-4 top-4 text-panna-gold" size={18} />
                            <input type="password" placeholder="Contraseña" className="w-full bg-white/5 border border-white/10 py-3.5 pl-12 pr-4 rounded-xl text-white focus:border-panna-gold outline-none" required />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-panna-gold to-yellow-600 hover:from-yellow-500 hover:to-panna-gold text-black font-black py-4 rounded-xl shadow-lg transition-transform active:scale-95 uppercase tracking-widest mt-4"
                        >
                            {isRegistering ? 'Fundar Club' : 'Entrar al Estadio'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;