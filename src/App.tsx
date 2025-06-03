import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import { toast } from "sonner";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  // Prevent right click
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.warning("Right-click is disabled on this website", {
      style: {
        background: "#1a1a1a",
        color: "#fff",
        border: "1px solid #ff8800",
      },
    });
  };

  // Prevent text selection
  const handleSelect = (e: React.MouseEvent) => {
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
      toast.warning("Text selection is not allowed on this website", {
        style: {
          background: "#1a1a1a",
          color: "#fff",
          border: "1px solid #ff8800",
        },
      });
      selection.removeAllRanges();
    }
  };

  // Prevent developer tools access
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent F12
      if (e.key === "F12") {
        e.preventDefault();
        toast.warning("Developer tools access is disabled", {
          style: {
            background: "#1a1a1a",
            color: "#fff",
            border: "1px solid #ff8800",
          },
        });
      }

      // Prevent Ctrl+Shift+I (Windows/Linux) or Cmd+Option+I (Mac)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "I") {
        e.preventDefault();
        toast.warning("Developer tools access is disabled", {
          style: {
            background: "#1a1a1a",
            color: "#fff",
            border: "1px solid #ff8800",
          },
        });
      }

      // Prevent Ctrl+Shift+J (Windows/Linux) or Cmd+Option+J (Mac)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "J") {
        e.preventDefault();
        toast.warning("Developer tools access is disabled", {
          style: {
            background: "#1a1a1a",
            color: "#fff",
            border: "1px solid #ff8800",
          },
        });
      }

      // Prevent Ctrl+Shift+C (Windows/Linux) or Cmd+Option+C (Mac)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "C") {
        e.preventDefault();
        toast.warning("Developer tools access is disabled", {
          style: {
            background: "#1a1a1a",
            color: "#fff",
            border: "1px solid #ff8800",
          },
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div onContextMenu={handleContextMenu} onMouseUp={handleSelect}>
          <Toaster />
          <Sonner />
          <LoadingScreen />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <WhatsAppButton />
          <ScrollToTop />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
