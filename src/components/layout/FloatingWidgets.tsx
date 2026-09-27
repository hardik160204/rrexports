"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const chatFaqs = [
  {
    question: "What is your Minimum Order Quantity (MOQ)?",
    answer: "Our standard MOQ is 500 pieces per design, but we can accommodate smaller pilot orders for new OEM partnerships. Contact us for specific details."
  },
  {
    question: "Do you offer custom OEM manufacturing?",
    answer: "Yes, we specialize in OEM. Send us your CAD files or physical samples, and our in-house facility will develop precise molds and prototypes."
  },
  {
    question: "Do you ship internationally?",
    answer: "Absolutely. We regularly export to 25+ countries including the USA, UK, Europe, and Australia using secure sea and air freight."
  },
  {
    question: "Can I request product samples?",
    answer: "Yes, we provide samples for quality check before bulk production. Sample costs and shipping apply, which can be adjusted in your final bulk order."
  }
];

export default function FloatingWidgets() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeAnswer, setActiveAnswer] = useState<string | null>(null);
  const [showGreeting, setShowGreeting] = useState(false);

  const whatsappNumber = "918851894100";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  useEffect(() => {
    const showTimer = setTimeout(() => {
      if (!isChatOpen) setShowGreeting(true);
    }, 2000);

    const hideTimer = setTimeout(() => {
      setShowGreeting(false);
    }, 7000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [isChatOpen]);

  const handleChatToggle = () => {
    setShowGreeting(false);
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      {/* ========================================= */}
      {/* MOBILE VIEW: Docked to Right Edge */}
      {/* ========================================= */}
      <div className="md:hidden fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center">
        
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-16 mr-2 flex w-[300px] flex-col border-2 border-black bg-white shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex items-center justify-between border-b-2 border-black bg-black px-4 py-3 text-white">
                <div className="flex flex-col">
                  <span className="text-sm font-black uppercase tracking-widest">A.B. Enterprises</span>
                  <span className="text-[10px] font-bold text-gray-300">Automated Assistant</span>
                </div>
                <button 
                  onClick={handleChatToggle}
                  className="flex h-8 w-8 items-center justify-center bg-white text-black active:scale-95"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex max-h-[60vh] flex-col overflow-y-auto bg-gray-50 p-4">
                {activeAnswer ? (
                  <div className="flex flex-col gap-4">
                    <div className="self-start border border-black bg-white p-4 text-sm font-medium text-black">
                      {activeAnswer}
                    </div>
                    <button 
                      onClick={() => setActiveAnswer(null)}
                      className="self-end border border-black bg-black px-4 py-2 text-xs font-bold uppercase tracking-widest text-white"
                    >
                      View All
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                      Select a topic:
                    </p>
                    {chatFaqs.map((faq, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveAnswer(faq.answer)}
                        className="flex w-full items-center justify-between border border-black bg-white p-3 text-left active:bg-black active:text-white"
                      >
                        <span className="text-xs font-bold text-black group-active:text-white">
                          {faq.question}
                        </span>
                        <ChevronRight className="h-4 w-4 shrink-0 text-gray-400" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showGreeting && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              className="absolute right-16 mr-4 w-48 border-2 border-black bg-white p-3 shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <p className="text-xs font-bold text-black">Hi, how can I assist you today?</p>
              <div className="absolute -right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 rotate-45 border-r-2 border-t-2 border-black bg-white" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col shadow-[-4px_4px_15px_rgba(0,0,0,0.2)]">
          <button
            onClick={handleChatToggle}
            className="flex h-14 w-12 items-center justify-center border-y-2 border-l-2 border-black bg-white text-black active:bg-gray-100"
          >
            {isChatOpen ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-12 items-center justify-center border-b-2 border-l-2 border-black bg-black text-white active:bg-gray-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
          </a>
        </div>
      </div>


      {/* ========================================= */}
      {/* DESKTOP VIEW: Floating Bottom Right (Original) */}
      {/* ========================================= */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-4">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="mb-4 flex w-[380px] flex-col border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex items-center justify-between border-b-2 border-black bg-black px-4 py-3 text-white">
                <div className="flex flex-col">
                  <span className="text-sm font-black uppercase tracking-widest">A.B. Enterprises</span>
                  <span className="text-[10px] font-bold text-gray-300">Automated B2B Assistant</span>
                </div>
                <button 
                  onClick={handleChatToggle}
                  className="flex h-8 w-8 items-center justify-center bg-white text-black transition-transform hover:scale-105 active:scale-95"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex h-[350px] flex-col overflow-y-auto bg-gray-50 p-4">
                {activeAnswer ? (
                  <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="self-start border border-black bg-white p-4 text-sm font-medium text-black shadow-sm">
                      {activeAnswer}
                    </div>
                    <button 
                      onClick={() => setActiveAnswer(null)}
                      className="self-end border border-black bg-black px-4 py-2 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-gray-800"
                    >
                      View All Questions
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                      Select a topic:
                    </p>
                    {chatFaqs.map((faq, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveAnswer(faq.answer)}
                        className="group flex w-full items-center justify-between border border-black bg-white p-3 text-left transition-all hover:bg-black hover:text-white"
                      >
                        <span className="text-xs font-bold text-black group-hover:text-white">
                          {faq.question}
                        </span>
                        <ChevronRight className="h-4 w-4 shrink-0 text-gray-400 group-hover:text-white" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative flex flex-col gap-4">
          <AnimatePresence>
            {showGreeting && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                className="absolute bottom-[88px] right-[70px] w-48 border-2 border-black bg-white p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <p className="text-xs font-bold text-black">Hi, how can I assist you today?</p>
                <div className="absolute -right-2.5 bottom-4 h-4 w-4 rotate-45 border-r-2 border-t-2 border-black bg-white" />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            animate={!isChatOpen ? { y: [0, -8, 0] } : { y: 0 }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            onClick={handleChatToggle}
            className="group flex h-14 w-14 items-center justify-center border-2 border-black bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors hover:bg-gray-100"
          >
            {isChatOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
          </motion.button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-14 w-14 items-center justify-center border-2 border-black bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 active:translate-y-0 active:shadow-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}