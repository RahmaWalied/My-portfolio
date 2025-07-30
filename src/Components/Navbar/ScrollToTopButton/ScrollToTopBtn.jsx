// src/Components/ScrollToTopBtn.jsx
import { ArrowUp } from "lucide-react";

export default function ScrollToTopBtn() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition-all z-50"
      aria-label="Scroll to Top"
    >
      <ArrowUp />
    </button>
  );
}
