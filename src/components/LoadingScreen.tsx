import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Hide loading screen after completion
          setTimeout(() => {
            setIsVisible(false);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#ff8800]/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-[#ffc233]/5 blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Logo and loading content */}
      <div className="relative flex flex-col items-center">
        {/* Logo with glow effect */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-[#ff8800]/20 blur-xl rounded-full animate-pulse"></div>
          <img 
            src="/images/Logos/BZ.png" 
            alt="BZ Logo" 
            className="w-24 h-24 relative z-10 animate-float"
          />
        </div>

        {/* Loading bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#ff8800] to-[#ffc233] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading text */}
        <div className="mt-4 text-white/70 text-sm font-light tracking-wider">
          LOADING {progress}%
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 