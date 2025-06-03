import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#ff8800]/5 blur-3xl animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-[#ffc233]/5 blur-3xl animate-blob-reverse"></div>
      
      {/* Main content */}
      <div className="text-center relative z-10">
        <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-[#ff8800] to-[#ffc233] bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-2xl text-white/80 mb-8">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#ff8800] to-[#ffc233] text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#ff8800]/25"
        >
          Return to Home
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
