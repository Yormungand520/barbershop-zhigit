export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-[#080808] border-t border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {year} Barbershop Jigit. Все права защищены.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/996997140799"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white text-xs transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/barbershop.jigit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white text-xs transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://t.me/jigit_barbershop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white text-xs transition-colors"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
