import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/996997140799?text=Здравствуйте, хочу записаться на стрижку"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 group"
      aria-label="Написать в WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-white text-gray-800 text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Написать в WhatsApp
      </span>
    </a>
  );
}
