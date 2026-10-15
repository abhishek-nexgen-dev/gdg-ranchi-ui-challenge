import React, { useState } from 'react';
import { Sparkles, X, ChevronRight, Copy, Check, Terminal, Layers } from 'lucide-react';

export const ChallengeHelper: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const suggestedPrompts = [
    {
      label: 'Hero & Branding Redesign',
      prompt: 'Redesign the Hero section with modern Google Developer Group visual identity, sleek typography, clean spacing, and modern gradient buttons.'
    },
    {
      label: 'Event Cards Modernization',
      prompt: 'Modernize the EventCard component: replace harsh borders with subtle rounded corners (rounded-xl), elegant card shadows, and Google color tag badges.'
    },
    {
      label: 'Navigation Glassmorphism',
      prompt: 'Restyle the Navbar into a modern sticky glassmorphism header with clean pill-style active links and official GDG logo typography.'
    },
    {
      label: 'Stats & Numbers Dashboard',
      prompt: 'Transform the chapter stats into a modern metrics grid with subtle icons, clean counters, and sleek card backgrounds.'
    },
    {
      label: 'Full Dark / Light Mode Palette',
      prompt: 'Harmonize the entire color scheme to replace clashing neon yellows and blues with Google brand colors (#4285F4, #EA4335, #FBBC05, #34A853).'
    }
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 font-sans">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-black uppercase text-xs px-3.5 py-2.5 border-3 border-black shadow-[4px_4px_0px_#000] flex items-center gap-2 transition-transform active:translate-x-0.5 active:translate-y-0.5"
          title="Open UI Makeover Challenge Prompts"
        >
          <Sparkles className="w-4 h-4 text-purple-700 animate-spin" />
          <span>⚡ Gemini CLI Prompts</span>
        </button>
      ) : (
        <div className="w-80 sm:w-96 bg-white border-4 border-black shadow-[8px_8px_0px_#000] p-4 text-left space-y-3">
          <div className="bg-[#1e293b] text-yellow-300 p-2 flex items-center justify-between border-b-2 border-black">
            <div className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase">
              <Terminal className="w-4 h-4 text-green-400" />
              <span>Makeover Challenge Cheat Sheet</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-red-600 hover:bg-red-700 text-white px-1.5 py-0.5 text-xs font-bold border border-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs text-gray-700 font-sans leading-relaxed">
            Ready to redesign this website with <strong>Gemini CLI</strong> in 5–10 mins? Copy any of these prompts into your terminal:
          </p>

          <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
            {suggestedPrompts.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] border border-gray-400 p-2 text-xs space-y-1 hover:border-black transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold font-mono text-[11px] text-blue-900">
                    {idx + 1}. {item.label}
                  </span>
                  <button
                    onClick={() => handleCopy(item.prompt, idx)}
                    className="bg-gray-200 hover:bg-yellow-300 text-black px-1.5 py-0.5 text-[10px] font-mono border border-black flex items-center gap-1"
                  >
                    {copiedIndex === idx ? (
                      <>
                        <Check className="w-3 h-3 text-green-700" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" /> Copy
                      </>
                    )}
                  </button>
                </div>
                <p className="text-[11px] text-gray-600 font-serif italic line-clamp-2">
                  "{item.prompt}"
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-gray-300 text-[10px] text-gray-500 font-mono flex items-center justify-between">
            <span>Keep code modular &amp; working!</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-blue-700 underline font-bold"
            >
              Minimize
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
