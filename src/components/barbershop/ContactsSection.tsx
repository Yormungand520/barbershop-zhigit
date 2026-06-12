import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

export function ContactsSection() {
  return (
    <section id="contacts" className="py-20 md:py-28 px-4 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="reveal">
          <SectionTitle title="Контакты" />
        </div>

        <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Адрес</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  ул. Щербакова 57, Бишкек
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Телефон</h3>
                <a
                  href="tel:+996997140799"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  +996 997 140 799
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Режим работы</h3>
                <p className="text-white/70 text-sm">
                  Пн — Вс: 10:00 — 20:00
                  <br />
                  <span className="text-white/40 text-xs">Без выходных</span>
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://wa.me/996997140799"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-[#151515] border border-[#333] hover:border-white/30 flex items-center justify-center transition-colors group"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/barbershop.jigit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-[#151515] border border-[#333] hover:border-white/30 flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://t.me/jigit_barbershop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-[#151515] border border-[#333] hover:border-white/30 flex items-center justify-center transition-colors group"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Map - Щербакова 57, Бишкек */}
          <div className="h-[300px] md:h-[400px] bg-[#151515] border border-[#2A2A2A] overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=42.903354,74.601308&z=16&hl=ru&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(0.85) brightness(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта — Барбершоп Jigit, ул. Щербакова 57, Бишкек"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
