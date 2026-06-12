import { Phone, MessageCircle } from "lucide-react";

export function HeroSection() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=1920&q=80"
          alt="Интерьер барбершопа"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0A0A0A]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="animate-fade-in-up opacity-0 mb-6">
          <img
            src="/logo.jpg"
            alt="Jigit Barbershop"
            className="w-28 h-28 sm:w-36 sm:h-36 mx-auto rounded-full object-cover border-2 border-white/20"
          />
        </div>

        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight animate-fade-in-up opacity-0 animate-delay-100">
          Jigit
        </h1>

        <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-white/90 mt-4 mb-3 italic animate-fade-in-up opacity-0 animate-delay-200">
          Мужские стрижки в центре Бишкека
        </h2>

        <p className="text-white/50 text-sm sm:text-base tracking-[0.3em] uppercase mb-10 animate-fade-in-up opacity-0 animate-delay-300">
          Опытные барберы · Без очередей · Онлайн-запись
        </p>

        <button
          type="button"
          onClick={scrollToBooking}
          className="animate-fade-in-up opacity-0 animate-delay-400 inline-block bg-white hover:bg-white/90 text-black font-semibold text-base sm:text-lg px-10 py-4 transition-all duration-300 tracking-wider uppercase hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        >
          Записаться
        </button>

        {/* Contact links */}
        <div className="flex items-center justify-center gap-6 mt-8 animate-fade-in-up opacity-0 animate-delay-500">
          <a
            href="tel:+996997140799"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            +996 997 140 799
          </a>
          <a
            href="https://wa.me/996997140799?text=Здравствуйте, хочу записаться на стрижку"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
