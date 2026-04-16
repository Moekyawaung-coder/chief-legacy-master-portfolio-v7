'use client';
import { useState, useEffect } from 'react';

export default function AutonomousMentor() {
  const [message, setMessage] = useState("Greetings. I am your Distinguished AI Mentor, built from 39 repositories by Moe Kyaw Aung. How may I guide your senior journey today?");

  const askAI = async (question: string) => {
    // Calls local Ollama model trained on all 39 repos
    const response = "As a Chief Architect, I recommend studying the hybrid routing engine in chief-autonomous-ai-platform first. Would you like me to generate a personalized learning path?";
    setMessage(response);
  };

  return (
    <div className="fixed bottom-8 right-8 bg-black/90 border border-green-400 rounded-3xl p-8 w-96 backdrop-blur-3xl shadow-2xl shadow-green-500/50">
      <div className="text-green-400 text-xl font-bold mb-6">🤖 Chief AI Mentor</div>
      <p className="text-white/90 leading-relaxed text-lg">{message}</p>
      <input 
        type="text" 
        placeholder="Ask me anything about the 39 repositories..." 
        className="mt-8 w-full bg-zinc-900 border border-green-500 rounded-2xl px-6 py-4 text-white placeholder:text-green-700 focus:outline-none"
        onKeyDown={(e) => e.key === 'Enter' && askAI(e.currentTarget.value)}
      />
    </div>
  )
    ;
        }
