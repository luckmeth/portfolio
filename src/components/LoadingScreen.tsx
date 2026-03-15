import React, { useEffect, useState, useCallback } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const terminalLines = [
  { text: '> Initializing system...', delay: 0 },
  { text: '> Loading creative modules...', delay: 400 },
  { text: '> Compiling design assets...', delay: 800 },
  { text: '> Connecting neural networks...', delay: 1200 },
  { text: '> Rendering portfolio...', delay: 1600 },
  { text: '> System ready.', delay: 2000 },
];

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [fadeOut, setFadeOut] = useState(false);

  const handleComplete = useCallback(() => {
    setFadeOut(true);
    setTimeout(onComplete, 800);
  }, [onComplete]);

  useEffect(() => {
    terminalLines.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, i]);
      }, line.delay);
    });

    setTimeout(() => setPhase(1), 300);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(handleComplete, 600);
          return 100;
        }
        return prev + 1.5;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [handleComplete]);

  return (
    <div className={`fixed inset-0 bg-dark-900 z-50 flex items-center justify-center transition-all duration-800 ${
      fadeOut ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
    }`}>
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent animate-scan-line" />
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto px-6">
        {/* Logo */}
        <div className={`mb-10 transition-all duration-1000 ${
          phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-7xl md:text-9xl font-mono font-bold mb-4 relative inline-block">
            <span className="text-white">&lt;</span>
            <span className="text-red-500">/</span>
            <span className="text-white">&gt;</span>
            <div className="absolute -inset-4 bg-red-500/10 blur-3xl rounded-full" />
          </div>
          <div className="text-ash-500 font-mono text-xs tracking-[0.3em] uppercase mt-2">
            Slash Development
          </div>
        </div>

        {/* Terminal output */}
        <div className="bg-dark-800 border border-ash-800 rounded-lg p-4 mb-8 text-left font-mono text-xs">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-ash-800">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            <span className="text-ash-600 ml-2 text-[10px]">terminal</span>
          </div>
          {terminalLines.map((line, i) => (
            <div
              key={i}
              className={`transition-all duration-500 ${
                visibleLines.includes(i)
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-4'
              } ${i === terminalLines.length - 1 ? 'text-green-400' : 'text-ash-400'} mb-1`}
            >
              {line.text}
            </div>
          ))}
          <div className="text-red-500 mt-1">
            <span className="animate-blink border-r-2 border-red-500">&nbsp;</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative">
          <div className="w-full h-[2px] bg-ash-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-600 via-red-500 to-red-400 rounded-full transition-all duration-100 ease-out relative"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full blur-md" />
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <span className="text-ash-600 font-mono text-[10px] tracking-widest uppercase">
              Loading Portfolio
            </span>
            <span className="text-red-500 font-mono text-xs font-bold">
              {Math.min(Math.round(progress), 100)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;