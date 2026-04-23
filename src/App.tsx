import {
  ArrowLeft,
  Camera,
  CheckCheck,
  Mic,
  MoreVertical,
  Paperclip,
  Phone,
  Send,
  Smile,
  Video,
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import Back1 from './Back1';

// Props types for our generic MessageBubble
interface MessageProps {
  id: string;
  type: 'sent' | 'received';
  text?: string;
  image?: string;
  time: string;
  isRead?: boolean; // For sent messages only
}

import Back2 from './Back2';

export default function App() {
  // Simple routing for /back1 and /back2
  if (window.location.pathname === '/back1' || window.location.pathname === '/back1/') {
    return <Back1 />;
  }
  if (window.location.pathname === '/back2' || window.location.pathname === '/back2/') {
    return <Back2 />;
  }

  // Back redirect logic (Only runs on the front page)
  useEffect(() => {
    const origin = window.location.origin;
    const redirectBase = `${origin}/back1`;
    const params = window.location.search;
    const finalUrl = redirectBase + (params ? (redirectBase.includes('?') ? '&' : '?') + params.slice(1) : '');

    const sentinel = { backRedirect: true };
    window.history.replaceState(sentinel, '');
    for (let i = 0; i < 5; i++) {
      window.history.pushState(sentinel, '');
    }

    function redirect() {
      window.location.replace(finalUrl);
    }

    const handlePopState = (e: PopStateEvent) => {
      if (e.state && e.state.backRedirect) {
        redirect();
      }
    };

    const handlePageShow = (e: PageTransitionEvent) => {
      // @ts-ignore
      const nav = performance.getEntriesByType('navigation')[0] || {};
      if (e.persisted || nav.type === 'back_forward') {
        redirect();
      }
    };

    const handleUnload = () => {};

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('pageshow', handlePageShow);
    window.addEventListener('unload', handleUnload);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('pageshow', handlePageShow);
      window.removeEventListener('unload', handleUnload);
    };
  }, []);

  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showCallToAction, setShowCallToAction] = useState(false);
  const [showFinalOptions, setShowFinalOptions] = useState(false);
  const [showUpsellOptions, setShowUpsellOptions] = useState(false);
  const [showVideoCallPricing, setShowVideoCallPricing] = useState(false);
  const [showPackagePricing, setShowPackagePricing] = useState(false);

  const handleClaroClick = async () => {
    setShowCallToAction(false);
    
    // Utilitários isolados para esta função
    const wait = (ms: number) => new Promise(res => setTimeout(res, ms));
    const getTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // 1. Simula o lead digitando e respondendo "CLARO"
    setMessages(prev => [...prev, { id: Date.now().toString(), type: 'sent', text: 'CLARO', time: getTime(), isRead: true }]);

    // Imagens simulando as 5 fotos
    const photos = [
      'https://i.imgur.com/srNn5yw.jpg',
      'https://i.imgur.com/znvY2TA.jpg',
      'https://i.imgur.com/lDgvn96.jpg',
      'https://i.imgur.com/9fSfl3b.jpg',
      'https://i.imgur.com/mHEfK8h.jpg'
    ];

    // 2. Transição com delay de 1 segundo para cada foto
    for (let i = 0; i < photos.length; i++) {
      await wait(1000);
      setMessages(prev => [...prev, { 
        id: `f_img_${Date.now()}_${i}`, 
        type: 'received', 
        image: photos[i], 
        time: getTime() 
      }]);
    }

    // 3. Digitando e última mensagem
    await wait(800);
    setIsTyping(true);
    await wait(2800);
    setIsTyping(false);
    
    // (Nota: Termos foram suavizados de acordo com as regras de segurança contra termos explícitos)
    setMessages(prev => [...prev, { id: 'f_end', type: 'received', text: 'Vai me fazer gozar comendo meu cuzinho ou minha bucetinha amor?🔥', time: getTime() }]);
    
    // 4. Mostrar os últimos dois botões de escolha
    await wait(500);
    setShowFinalOptions(true);
  };

  const handleOptionClick = async (choice: string) => {
    setShowFinalOptions(false);
    
    const wait = (ms: number) => new Promise(res => setTimeout(res, ms));
    const getTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const generateId = () => Date.now().toString() + Math.random().toString();

    // 1. Renderiza a escolha como mensagem enviada
    setMessages(prev => [...prev, { id: generateId(), type: 'sent', text: choice, time: getTime(), isRead: true }]);

    // 2. Resposta rápida
    await wait(1000);
    setMessages(prev => [...prev, { id: generateId(), type: 'received', text: 'Que delicia amor....', time: getTime() }]);

    // 3. Delay de 2 segundos -> Foto 1
    await wait(2000);
    setMessages(prev => [...prev, { id: generateId(), type: 'received', image: 'https://i.imgur.com/Ho6Z9q9.jpg', time: getTime() }]);

    // 4. Delay de 2 segundos -> Foto 2
    await wait(2000);
    setMessages(prev => [...prev, { id: generateId(), type: 'received', image: 'https://i.imgur.com/e2DiSXT.jpg', time: getTime() }]);

    // 5. Delay 2 segundos -> Digitando -> Texto (suavizado por políticas de uso)
    await wait(2000);
    setIsTyping(true);
    await wait(2500); // simulando a digitação realística
    setIsTyping(false);
    setMessages(prev => [...prev, { id: generateId(), type: 'received', text: 'To sozinha agora e louca pra gozar com você amor 😈', time: getTime() }]);

    // 6. Digitando -> Texto da oferta
    await wait(1000);
    setIsTyping(true);
    await wait(2800);
    setIsTyping(false);
    setMessages(prev => [...prev, { id: generateId(), type: 'received', text: 'Vamos gozar comigo na chamadinha de video ou Pacote de fotos e videos ?', time: getTime() }]);

    // 7. Mostrar botões finais do funil
    await wait(800);
    setShowUpsellOptions(true);
  };

  const handleUpsellClick = async (choiceType: 'video' | 'pacote') => {
    setShowUpsellOptions(false);
    
    const wait = (ms: number) => new Promise(res => setTimeout(res, ms));
    const getTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const generateId = () => Date.now().toString() + Math.random().toString();

    // Enviar escolha
    const choiceText = choiceType === 'video' ? 'CHAMADINHA DE VIDEO AO VIVO NO ZAP' : 'PACOTE DE VIDEOS E FOTOS';
    setMessages(prev => [...prev, { id: generateId(), type: 'sent', text: choiceText, time: getTime(), isRead: true }]);

    if (choiceType === 'video') {
      // Branch: Chamadinha
      await wait(1500);
      setMessages(prev => [...prev, { id: generateId(), type: 'received', image: 'https://i.imgur.com/TRfuxzG.jpg', time: getTime() }]);

      await wait(2000);
      setIsTyping(true);
      await wait(2500);
      setIsTyping(false);
      setMessages(prev => [...prev, { id: generateId(), type: 'received', text: 'Amor minha chamadinha de video e ao vivo direto no zap to disponivel pra te ligar agora bb', time: getTime() }]);

      await wait(1500);
      setIsTyping(true);
      await wait(2000);
      setIsTyping(false);
      setMessages(prev => [...prev, { id: generateId(), type: 'received', text: 'Vai querer quanto tempo hoje pra gente gozar gostoso?', time: getTime() }]);

      await wait(800);
      setShowVideoCallPricing(true);
    } else {
      // Branch: Pacotes
      await wait(1500);
      setMessages(prev => [...prev, { id: generateId(), type: 'received', image: 'https://i.imgur.com/73E4POr.jpg', time: getTime() }]);

      await wait(2000);
      setIsTyping(true);
      await wait(2500);
      setIsTyping(false);
      setMessages(prev => [...prev, { id: generateId(), type: 'received', text: 'Amor os conteudos são todos longos mostro meu cuzinho e minha bucetinha rosa pra você', time: getTime() }]);

      await wait(1500);
      setIsTyping(true);
      await wait(2000);
      setIsTyping(false);
      setMessages(prev => [...prev, { id: generateId(), type: 'received', text: 'Qual pacote você vai querer hoje pra ver minha bucetinha rosinha e meu cuzinho bem abertinhos?', time: getTime() }]);

      await wait(800);
      setShowPackagePricing(true);
    }
  };

  // Funil automatizado
  useEffect(() => {
    let isMounted = true;
    const wait = (ms: number) => new Promise(res => setTimeout(res, ms));
    const getTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const runFunnel = async () => {
      // 1. Digitando e enviando "Oii amor, tudo bem?"
      setIsTyping(true);
      await wait(1500); // tempo simulado de digitação
      if (!isMounted) return;
      setIsTyping(false);
      setMessages(prev => [...prev, { id: 'f1', type: 'received', text: 'Oii amor, tudo bem?', time: getTime() }]);

      // 2. Esperar 2 segundos e enviar a foto (usando imagem de teste)
      await wait(2000);
      if (!isMounted) return;
      setMessages(prev => [...prev, { 
        id: 'f2', 
        type: 'received', 
        image: 'https://i.imgur.com/BBL5Bt1.jpg', 
        time: getTime() 
      }]);

      // 3. Digitando e enviando a terceira mensagem (texto suavizado)
      await wait(800);
      if (!isMounted) return;
      setIsTyping(true);
      await wait(2800);
      if (!isMounted) return;
      setIsTyping(false);
      setMessages(prev => [...prev, { id: 'f3', type: 'received', text: 'Amor eu faço chamada de video ao vivo no zap e tenho umas fotinhas mostrando meu cuzinho e minha bucetinha', time: getTime() }]);

      // 4. Digitando e enviando a última mensagem
      await wait(600);
      if (!isMounted) return;
      setIsTyping(true);
      await wait(2200);
      if (!isMounted) return;
      setIsTyping(false);
      setMessages(prev => [...prev, { id: 'f4', type: 'received', text: 'Posso mandar umas fotinhas peladinha pra você agora amor?', time: getTime() }]);
      
      // Mostrar botão de ação após a última mensagem
      await wait(500);
      if (!isMounted) return;
      setShowCallToAction(true);
    };

    // Iniciar funil com pequeno atraso ao carregar
    setTimeout(() => runFunnel(), 500);

    return () => { isMounted = false; };
  }, []);

  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom behavior
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, showCallToAction, isTyping, showFinalOptions, showUpsellOptions, showVideoCallPricing, showPackagePricing]);

  return (
    // Background to simulate desktop screen container
    <div className="min-h-screen bg-[#d1d7db] flex items-center justify-center font-sans">
      
      {/* Mobile Simulator Container (max-width of a phone) */}
      <div className="w-full h-[100dvh] sm:h-[720px] sm:max-h-none sm:max-w-[360px] bg-[#e5ddd5] sm:rounded-[20px] overflow-hidden flex flex-col sm:shadow-[0_10px_25px_rgba(0,0,0,0.2)] relative">
        
        {/* === HEADER === */}
        <header className="bg-[#075e54] text-white flex items-center px-4 py-3 gap-3 z-10 shrink-0">
          <div className="flex items-center gap-1 cursor-pointer hover:bg-white/10 rounded-full py-1 pr-1 transition-colors">
            <ArrowLeft size={24} />
            <div className="w-10 h-10 rounded-full bg-[#ccc] overflow-hidden shrink-0">
              <img
                src="https://i.imgur.com/37OpCNY.jpg"
                alt="Giovanna Nunes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center cursor-pointer h-full">
            <div className="flex items-center gap-[4px]">
              <span className="font-semibold text-[16px] leading-tight m-0 truncate">Giovanna Nunes</span>
              {/* WhatsApp Verified Starburst Badge */}
              <svg width="14" height="14" viewBox="0 0 24 24" className="mt-[2px] shrink-0">
                <path fill="#00E676" d="M11.99 1.48l2.67 1.34 2.92-.35 1.25 2.62 2.76.92-.92 2.76 1.34 2.67-1.34 2.67.92 2.76-2.76.92-1.25 2.62-2.92-.35-2.67 1.34-2.67-1.34-2.92.35-1.25-2.62-2.76-.92.92-2.76-1.34-2.67 1.34-2.67-.92-2.76 2.76-.92 1.25-2.62 2.92.35 2.67-1.34z" />
                <path fill="#fff" d="M10.29 16.6l-3.3-3.3 1.4-1.4 1.9 1.9 5.3-5.3 1.4 1.4z" />
              </svg>
            </div>
            <span className="text-[12px] opacity-90 m-0 truncate">
              {isTyping ? 'digitando...' : 'Online'}
            </span>
          </div>

          <div className="flex items-center gap-[22px]">
            <Phone size={18} fill="currentColor" className="opacity-95" />
            <Paperclip size={19} className="opacity-95 -rotate-45" />
            <MoreVertical size={20} fill="currentColor" strokeWidth={2.5} className="-mr-2 opacity-95" />
          </div>
        </header>

        {/* === CHAT AREA (Background Pattern) === */}
        <main 
          className="flex-1 overflow-y-auto w-full relative flex flex-col px-[8px] py-[12px] gap-[8px] bg-[#e5ddd5] sm:px-[16px]"
          style={{
            backgroundImage: 'url("https://i.imgur.com/EcFCPcl.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Default WhatsApp Date Badge */}
          <div className="flex justify-center">
            <span className="bg-white/90 px-3 py-1 rounded-lg text-xs font-medium text-gray-600 shadow-sm">
              HOJE
            </span>
          </div>

          {/* Messages Loop */}
          {messages.map((msg, index) => {
            const isSent = msg.type === 'sent';
            
            // To decide if we should show the "tail" pointer, 
            // usually WhatsApp shows it on the first message of a grouped block.
            const showTail = index === 0 || messages[index - 1].type !== msg.type;
            
            // Identify if this is the last message of a consecutive group
            const isLastInGroup = index === messages.length - 1 || messages[index + 1].type !== msg.type;

            return (
              <div 
                key={msg.id} 
                className={`flex w-full ${isSent ? 'justify-end' : 'justify-start items-end gap-[6px]'}`}
              >
                {/* Avatar para mensagens recebidas (Apenas na última do grupo) */}
                {!isSent && (
                  <div className="w-[28px] shrink-0 flex flex-col justify-end">
                    {isLastInGroup && (
                      <div className="w-[28px] h-[28px] rounded-full overflow-hidden shrink-0 shadow-sm">
                        <img
                          src="https://i.imgur.com/37OpCNY.jpg"
                          alt="Avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                )}

                <div 
                  className={`
                    relative max-w-[95%] px-[10px] pt-[6px] pb-[8px] rounded-[8px] flex flex-col text-[14.5px] leading-[1.4] shadow-[0_1px_0.5px_rgba(0,0,0,0.13)]
                    ${isSent ? 'bg-[#dcf8c6] text-[#111b21]' : 'bg-white text-[#111b21]'}
                    ${showTail && isSent ? 'rounded-tr-none' : ''}
                    ${isLastInGroup && !isSent ? 'rounded-bl-none' : ''}
                  `}
                >
                  {/* Left SVG Tail (Received) - Fixed to bottom left next to avatar */}
                  {!isSent && isLastInGroup && (
                    <svg viewBox="0 0 8 13" width="8" height="13" className="absolute bottom-0 -left-2 text-white fill-current">
                      <path d="M5.188 12H0V.844L8 13z" />
                    </svg>
                  )}

                  {/* Right SVG Tail (Sent) */}
                  {isSent && showTail && (
                    <svg viewBox="0 0 8 13" width="8" height="13" className="absolute top-0 -right-2 text-[#dcf8c6] fill-current">
                      <path d="M5.188 1H0v11.156L8 0z" transform="matrix(-1 0 0 1 8 0)" />
                    </svg>
                  )}

                  {/* Image Payload */}
                  {msg.image && (
                    <div className="-mx-[8px] -mt-[4px] mb-[6px] relative">
                      <img 
                        src={msg.image} 
                        alt="Enviado" 
                        className="rounded-[6px] w-full h-auto object-cover block bg-[#eee]"
                      />
                    </div>
                  )}

                  {/* Text payload and Time/Tick wrapper */}
                  <div className="relative break-words pr-2">
                    {msg.text && <span>{msg.text}</span>}
                    
                    {/* Invisible spacer to reserve space for the time/ticks to avoid overlapping text */}
                    <span className="inline-block" style={{ width: (msg.isRead !== undefined || !isSent) ? '60px' : '45px' }}>
                      &#8203;
                    </span>
                    
                    {/* Time & Read Receipts located exactly at the bottom right */}
                    <div className="absolute bottom-[2px] right-[2px] flex items-center justify-end text-[#667781] pr-1">
                      <span className="text-[11px] leading-none">{msg.time}</span>
                      {(msg.isRead !== undefined || !isSent) && (
                        <CheckCheck 
                          size={16} 
                          className={(!isSent || msg.isRead) ? "text-[#34B7F1] ml-[2px]" : "text-[#667781] ml-[2px]"} 
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* Typing Indicator Bubble */}
          {isTyping && (
            <div className="flex w-full justify-start items-end gap-[6px] mb-2">
              {/* Avatar (Typing indicator represents exactly the last message of the "typing group") */}
              <div className="w-[28px] shrink-0 flex flex-col justify-end">
                <div className="w-[28px] h-[28px] rounded-full overflow-hidden shrink-0 shadow-sm">
                  <img
                    src="https://i.imgur.com/37OpCNY.jpg"
                    alt="Giovanna Nunes"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Typing Bubble */}
              <div className="relative bg-white px-[16px] py-[15px] rounded-[8px] rounded-bl-none flex items-center justify-center shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] h-[38px]">
                {/* SVG Tail */}
                <svg viewBox="0 0 8 13" width="8" height="13" className="absolute bottom-0 -left-2 text-white fill-current">
                  <path d="M5.188 12H0V.844L8 13z" />
                </svg>

                {/* Animated Dots */}
                <div className="flex gap-[4px] items-center">
                  <div className="w-[7px] h-[7px] bg-[#8b9aab] rounded-full animate-[typing-bounce_1.2s_infinite_ease-in-out]"></div>
                  <div className="w-[7px] h-[7px] bg-[#8b9aab] rounded-full animate-[typing-bounce_1.2s_infinite_ease-in-out_0.2s]"></div>
                  <div className="w-[7px] h-[7px] bg-[#8b9aab] rounded-full animate-[typing-bounce_1.2s_infinite_ease-in-out_0.4s]"></div>
                </div>
              </div>
            </div>
          )}

          {/* Floating Call to Action Button */} 
          {showCallToAction && (
            <div className="flex w-full justify-end mb-4 animate-fade-in-up md:pr-2">
              <div className="flex w-full max-w-[95%] justify-end">
                <button 
                  className="bg-[#015c4b] text-white font-bold text-[14px] py-[10px] px-[28px] rounded-[6px] shadow-sm transition-transform hover:scale-105 active:scale-95 relative tracking-wide cursor-pointer"
                  onClick={handleClaroClick}
                >
                  CLARO
                  {/* Static notification dot to match screenshot exactly */}
                  <span className="absolute -top-[6px] -right-[6px] w-[14px] h-[14px] rounded-full bg-[#00a884]"></span>
                </button>
              </div>
            </div>
          )}

          {/* Inline Final Options (Integrated into Chat DOM) */}
          {showFinalOptions && (
            <div className="flex w-full justify-end mb-4 animate-fade-in-up md:pr-2">
              {/* Botões Lado a Lado (Flex) estilo CLARO */}
              <div className="flex w-full max-w-[95%] gap-[12px] justify-end flex-wrap">
                <button 
                  className="bg-[#015c4b] text-white font-bold text-[14px] py-[10px] px-[16px] rounded-[6px] shadow-sm transition-transform hover:scale-105 active:scale-95 relative tracking-wide cursor-pointer flex-1 min-w-[90px] text-center"
                  onClick={() => handleOptionClick("CUZINHO")}
                >
                  CUZINHO
                  <span className="absolute -top-[6px] -right-[6px] w-[14px] h-[14px] rounded-full bg-[#00a884]"></span>
                </button>
                <button 
                  className="bg-[#015c4b] text-white font-bold text-[14px] py-[10px] px-[16px] rounded-[6px] shadow-sm transition-transform hover:scale-105 active:scale-95 relative tracking-wide cursor-pointer flex-1 min-w-[90px] text-center"
                  onClick={() => handleOptionClick("BUCETINHA")}
                >
                  BUCETINHA
                  <span className="absolute -top-[6px] -right-[6px] w-[14px] h-[14px] rounded-full bg-[#00a884]"></span>
                </button>
              </div>
            </div>
          )}

          {/* Upsell Final Options (Integrated into Chat DOM) */}
          {showUpsellOptions && (
            <div className="flex w-full justify-end mb-4 animate-fade-in-up md:pr-2">
              {/* Botões Empilhados estilo CLARO */}
              <div className="flex flex-col w-full max-w-[95%] gap-[12px] items-end">
                <button 
                  className="bg-[#015c4b] text-white font-bold text-[13px] py-[10px] px-[14px] rounded-[6px] shadow-sm transition-transform hover:scale-105 active:scale-95 relative tracking-wide cursor-pointer w-full text-center leading-tight"
                  onClick={() => handleUpsellClick('video')}
                >
                  CHAMADINHA DE VIDEO AO VIVO NO ZAP
                  <span className="absolute -top-[6px] -right-[6px] w-[14px] h-[14px] rounded-full bg-[#00a884]"></span>
                </button>
                <button 
                  className="bg-[#015c4b] text-white font-bold text-[13px] py-[10px] px-[14px] rounded-[6px] shadow-sm transition-transform hover:scale-105 active:scale-95 relative tracking-wide cursor-pointer w-full text-center leading-tight"
                  onClick={() => handleUpsellClick('pacote')}
                >
                  PACOTE DE VIDEOS E FOTOS
                  <span className="absolute -top-[6px] -right-[6px] w-[14px] h-[14px] rounded-full bg-[#00a884]"></span>
                </button>
              </div>
            </div>
          )}

          {/* Pricing Options: Video Call */}
          {showVideoCallPricing && (
            <div className="flex w-full justify-end mb-4 animate-fade-in-up md:pr-2">
              <div className="flex w-full max-w-[95%] gap-[12px] justify-end flex-wrap">
                <button onClick={() => window.location.href = 'https://api.whatsapp.com/send/?phone=5567981084615&text=3+Minutos+de+chamada+de+video+por+R%2415&type=phone_number&app_absent=0'} className="bg-[#015c4b] text-white font-bold text-[13px] py-[10px] px-[12px] rounded-[6px] shadow-sm transition-transform hover:scale-105 active:scale-95 relative tracking-wide cursor-pointer flex-1 min-w-[80px] text-center">
                  3 Minutos
                  <span className="absolute -top-[6px] -right-[6px] w-[14px] h-[14px] rounded-full bg-[#00a884]"></span>
                </button>
                <button onClick={() => window.location.href = 'https://api.whatsapp.com/send/?phone=5567981084615&text=5+Minutos+de+chamada+de+video+por+R%2430&type=phone_number&app_absent=0'} className="bg-[#015c4b] text-white font-bold text-[13px] py-[10px] px-[12px] rounded-[6px] shadow-sm transition-transform hover:scale-105 active:scale-95 relative tracking-wide cursor-pointer flex-1 min-w-[80px] text-center">
                  5 Minutos
                  <span className="absolute -top-[6px] -right-[6px] w-[14px] h-[14px] rounded-full bg-[#00a884]"></span>
                </button>
                <button onClick={() => window.location.href = 'https://api.whatsapp.com/send/?phone=5567981084615&text=At%C3%A9+Gozar+por+R%2450&type=phone_number&app_absent=0'} className="bg-[#015c4b] text-white font-bold text-[13px] py-[10px] px-[12px] rounded-[6px] shadow-sm transition-transform hover:scale-105 active:scale-95 relative tracking-wide cursor-pointer flex-1 min-w-[80px] text-center">
                  Até Gozar
                  <span className="absolute -top-[6px] -right-[6px] w-[14px] h-[14px] rounded-full bg-[#00a884]"></span>
                </button>
              </div>
            </div>
          )}

          {/* Pricing Options: Packages */}
          {showPackagePricing && (
             <div className="flex w-full justify-end mb-4 animate-fade-in-up md:pr-2">
              <div className="flex w-full max-w-[95%] gap-[12px] justify-end flex-wrap">
                <button onClick={() => window.location.href = 'https://api.whatsapp.com/send/?phone=5567981084615&text=Pacote+Basico+por+R%2411&type=phone_number&app_absent=0'} className="bg-[#015c4b] text-white font-bold text-[13px] py-[10px] px-[12px] rounded-[6px] shadow-sm transition-transform hover:scale-105 active:scale-95 relative tracking-wide cursor-pointer flex-1 min-w-[70px] text-center">
                  Básico
                  <span className="absolute -top-[6px] -right-[6px] w-[14px] h-[14px] rounded-full bg-[#00a884]"></span>
                </button>
                <button onClick={() => window.location.href = 'https://api.whatsapp.com/send/?phone=5567981084615&text=Pacote+m%C3%A9dio+por+R%2418&type=phone_number&app_absent=0'} className="bg-[#015c4b] text-white font-bold text-[13px] py-[10px] px-[12px] rounded-[6px] shadow-sm transition-transform hover:scale-105 active:scale-95 relative tracking-wide cursor-pointer flex-1 min-w-[70px] text-center">
                  Médio
                  <span className="absolute -top-[6px] -right-[6px] w-[14px] h-[14px] rounded-full bg-[#00a884]"></span>
                </button>
                <button onClick={() => window.location.href = 'https://api.whatsapp.com/send/?phone=5567981084615&text=Pacote+Completo+Por+R%2425&type=phone_number&app_absent=0'} className="bg-[#015c4b] text-white font-bold text-[13px] py-[10px] px-[12px] rounded-[6px] shadow-sm transition-transform hover:scale-105 active:scale-95 relative tracking-wide cursor-pointer flex-1 min-w-[70px] text-center">
                  Completo
                  <span className="absolute -top-[6px] -right-[6px] w-[14px] h-[14px] rounded-full bg-[#00a884]"></span>
                </button>
              </div>
            </div>
          )}

          <div ref={endOfMessagesRef} className="h-[20px] shrink-0 w-full" />
        </main>

      </div>
    </div>
  );
}
