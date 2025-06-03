import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={scrollToTop}
        className="relative group glass rounded-lg p-2 hover:shadow-lg transition-all duration-300 hover:scale-105"
        aria-label="Scroll to top"
      >
        <div className="relative w-8 h-8 flex items-center justify-center">
          {/* Progress Circle */}
          <svg 
            className="w-8 h-8 -rotate-90 absolute inset-0" 
            viewBox="0 0 32 32"
          >
            <circle
              className="text-white/5"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="transparent"
              r="12"
              cx="16"
              cy="16"
            />
            <circle
              className="text-primary"
              strokeWidth="1.5"
              strokeDasharray={75.4}
              strokeDashoffset={75.4 - (75.4 * scrollProgress) / 100}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="12"
              cx="16"
              cy="16"
              style={{
                transition: "stroke-dashoffset 0.2s ease",
                filter: "drop-shadow(0 0 2px hsl(var(--primary) / 0.3))"
              }}
            />
          </svg>
          
          {/* Arrow Icon */}
          <div className="absolute inset-0 flex items-center justify-center translate-y-[-0.5px]">
            <ChevronUp className="w-3.5 h-3.5 text-foreground group-hover:text-primary transition-colors duration-300" />
          </div>
        </div>
      </button>
    </div>
  );
};

export default ScrollToTop;