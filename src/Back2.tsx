import React from 'react';

export default function Back2() {
  return (
    <div className="min-h-screen bg-[#120a11] text-white flex justify-center font-sans tracking-tight">
      <div className="w-full max-w-[480px] px-5 py-8 flex flex-col items-center">
        
        {/* Header Sensual - Mais urgente para Back 2 */}
        <div className="flex flex-col items-center text-center mb-8 animate-fade-in-up">
          <div className="relative mb-5">
            <div className="w-28 h-28 rounded-full p-[3px] bg-gradient-to-br from-[#ff2a75] to-[#8a2387] shadow-[0_0_35px_rgba(255,42,117,0.6)] animate-pulse">
              <img 
                src="https://i.imgur.com/BBL5Bt1.jpg" 
                alt="Giovanna" 
                className="w-full h-full rounded-full object-cover border-2 border-[#120a11]"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 text-3xl">🥵</div>
          </div>
          <h1 className="text-[28px] font-black text-white mb-3 leading-[1.1] drop-shadow-md">
            Última chance, amor... <br/> <span className="text-[#ff2a75]">quase de graça!</span>
          </h1>
          <p className="text-[#e2a8c3] text-[15.5px] leading-relaxed font-light px-2">
            É sério! Essa é a minha última tentativa pra não dormir sozinha essa noite. Rasguei a tabela e deixei <strong className="text-white">TUDO a preço de banana</strong>! 🍌💦<br/><br/>
            Se você fechar essa página, não aparece mais. Escolhe logo um abaixo e vem me chamar no zap 😈👇
          </p>
        </div>

        {/* Section 1: Chamadas */}
        <div className="w-full mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#ff2a75]/50"></div>
            <h2 className="text-[#ff2a75] font-black text-[15px] uppercase tracking-widest shrink-0">Minhas Chamadas 🎥💋</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#ff2a75]/50"></div>
          </div>

          <div className="flex flex-col gap-4">
            {/* Call 1 */}
            <div className="bg-[#1e1118] border border-[#ff2a75]/30 rounded-2xl p-5 hover:border-[#ff2a75]/80 transition-all shadow-lg shadow-black/50">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-lg text-[#f5c6d8] line-through opacity-70 text-sm absolute -mt-7">R$11,00</span>
                <span className="font-medium text-lg text-[#f5c6d8]">Rapidinha (3 Minutos)</span>
                <span className="font-black text-3xl text-[#ff2a75]">R$9<span className="text-xl">,00</span></span>
              </div>
              <a 
                href="https://api.whatsapp.com/send/?phone=556781389175&text=Chamada+De+Video+3+Minutos+Por+R%249&type=phone_number&app_absent=0" 
                className="block w-full bg-gradient-to-r from-[#ff2a75] to-[#e6155e] text-white font-bold text-center py-4 rounded-xl uppercase tracking-wider transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_15px_rgba(255,42,117,0.3)]"
              >
                Vem Ligar Agora 📞
              </a>
            </div>

            {/* Call 2 */}
            <div className="bg-[#1e1118] border border-[#ff2a75]/30 rounded-2xl p-5 hover:border-[#ff2a75]/80 transition-all shadow-lg shadow-black/50">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-lg text-[#f5c6d8] line-through opacity-70 text-sm absolute -mt-7">R$18,00</span>
                <span className="font-medium text-lg text-[#f5c6d8]">Gostosinha (5 Min)</span>
                <span className="font-black text-3xl text-[#ff2a75]">R$12<span className="text-xl">,00</span></span>
              </div>
              <a 
                href="https://api.whatsapp.com/send/?phone=556781389175&text=5+Minutos+Chamada+de+Video+Por+R%2412&type=phone_number&app_absent=0" 
                className="block w-full bg-gradient-to-r from-[#ff2a75] to-[#e6155e] text-white font-bold text-center py-4 rounded-xl uppercase tracking-wider transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_15px_rgba(255,42,117,0.3)]"
              >
                Vem Ligar Agora 📞
              </a>
            </div>

            {/* Call 3 */}
            <div className="bg-[#1e1118] border border-[#ff2a75]/30 rounded-2xl p-5 hover:border-[#ff2a75]/80 transition-all shadow-lg shadow-black/50 relative overflow-hidden">
              <div className="flex justify-between items-center mb-4 mt-1">
                <span className="font-medium text-lg text-[#f5c6d8] line-through opacity-70 text-sm absolute -mt-7">R$27,00</span>
                <span className="font-medium text-lg text-[#f5c6d8]">Até o final... 💦</span>
                <span className="font-black text-3xl text-[#ff2a75]">R$15<span className="text-xl">,00</span></span>
              </div>
              <a 
                href="https://api.whatsapp.com/send/?phone=556781389175&text=At%C3%A9+Gozar+por+R%2415&type=phone_number&app_absent=0" 
                className="block w-full bg-gradient-to-r from-[#ff2a75] to-[#e6155e] text-white font-bold text-center py-4 rounded-xl uppercase tracking-wider transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_15px_rgba(255,42,117,0.3)]"
              >
                Vem Ligar Agora 📞
              </a>
            </div>
          </div>
        </div>

        {/* Section 2: Pacotes */}
        <div className="w-full mb-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#ff2a75]/50"></div>
            <h2 className="text-[#ff2a75] font-black text-[15px] uppercase tracking-widest shrink-0">Meus Packs VIP 🤫💕</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#ff2a75]/50"></div>
          </div>

          <div className="flex flex-col gap-4">
            {/* Pckg 1 */}
            <div className="bg-[#1e1118] border border-[#ff2a75]/30 rounded-2xl p-5 hover:border-[#ff2a75]/80 transition-all shadow-lg shadow-black/50">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-lg text-[#f5c6d8] line-through opacity-70 text-sm absolute -mt-7">R$9,00</span>
                <span className="font-medium text-lg text-[#f5c6d8]">Básico (Iniciante)</span>
                <span className="font-black text-3xl text-[#ff2a75]">R$7<span className="text-xl">,00</span></span>
              </div>
              <p className="text-[13.5px] text-[#e2a8c3]/70 mb-5 font-light">30 fotinhas + 30 videozinhos</p>
              <a 
                href="https://api.whatsapp.com/send/?phone=556781389175&text=Pacote+B%C3%A1sico+Por+R%247&type=phone_number&app_absent=0" 
                className="block w-full border border-[#ff2a75] text-[#ff2a75] hover:bg-[#ff2a75] hover:text-white font-bold text-center py-3.5 rounded-xl uppercase tracking-wider transition-all shadow-[0_0_10px_rgba(255,42,117,0.1)]"
              >
                Destrancar Agora 🔓
              </a>
            </div>

            {/* Pckg 2 */}
            <div className="bg-[#1e1118] border border-[#ff2a75]/30 rounded-2xl p-5 hover:border-[#ff2a75]/80 transition-all shadow-lg shadow-black/50">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-lg text-[#f5c6d8] line-through opacity-70 text-sm absolute -mt-7">R$12,00</span>
                <span className="font-medium text-lg text-[#f5c6d8]">Médio Gostoso</span>
                <span className="font-black text-3xl text-[#ff2a75]">R$9<span className="text-xl">,00</span></span>
              </div>
              <p className="text-[13.5px] text-[#e2a8c3]/70 mb-5 font-light">50 fotinhas + 50 videozinhos</p>
              <a 
                href="" 
                className="block w-full border border-[#ff2a75] text-[#ff2a75] hover:bg-[#ff2a75] hover:text-white font-bold text-center py-3.5 rounded-xl uppercase tracking-wider transition-all shadow-[0_0_10px_rgba(255,42,117,0.1)]"
              >
                Destrancar Agora 🔓
              </a>
            </div>

            {/* Pckg 3 */}
            <div className="bg-[#24101b] border-2 border-[#ff2a75] rounded-2xl p-5 hover:border-[#ff4b8b] transition-all shadow-[0_0_35px_rgba(255,42,117,0.25)] relative overflow-hidden transform scale-[1.03]">
              <div className="absolute top-0 right-0 bg-[#ff2a75] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider animate-pulse">LOUCURA 🔥</div>
              <div className="flex justify-between items-center mb-1 mt-1">
                <span className="font-medium text-lg text-[#f5c6d8] line-through opacity-70 text-sm absolute -mt-7">R$15,00</span>
                <span className="font-black text-xl text-[#ff8eb4]">TUDO COMPLETO</span>
                <span className="font-black text-3xl text-[#ff2a75]">R$12<span className="text-xl">,00</span></span>
              </div>
              <p className="text-[13.5px] text-[#ffb5d4] mb-5 font-bold drop-shadow-sm">Acesso total sem limites à tudo agora</p>
              <a 
                href="https://api.whatsapp.com/send/?phone=556781389175&text=Pacote+Completo+Por+R%2412&type=phone_number&app_absent=0" 
                className="block w-full bg-gradient-to-r from-[#ff2a75] to-[#e6155e] text-white font-black text-center py-4 rounded-xl uppercase tracking-widest transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_6px_20px_rgba(255,42,117,0.4)] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 w-1/2 -skew-x-[30deg] -translate-x-[150%] animate-[shine_3s_infinite]" />
                DESTRANCAR TUDO 🔓🔥
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
