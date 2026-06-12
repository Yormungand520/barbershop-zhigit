import { SectionTitle } from "./SectionTitle";
import { Clock } from "lucide-react";

const services = [
  { name: "Стрижка", price: 500, time: 40, icon: "✂️" },
  { name: "Стрижка + борода", price: 800, time: 60, icon: "💈" },
  { name: "Модельная стрижка", price: 700, time: 50, icon: "⭐" },
  { name: "Оформление бороды", price: 400, time: 30, icon: "🧔" },
  { name: "Детская стрижка", price: 350, time: 30, icon: "👦" },
  { name: "Kamikaze (под 0)", price: 300, time: 15, icon: "⚡" },
];

export function ServicesSection() {
  const scrollToBooking = (serviceName?: string) => {
    const el = document.getElementById("booking");
    el?.scrollIntoView({ behavior: "smooth" });
    if (serviceName) {
      setTimeout(() => {
        const select = document.querySelector<HTMLSelectElement>("[data-service-select]");
        if (select) {
          select.value = serviceName;
          select.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }, 800);
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 px-4 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <div className="reveal">
          <SectionTitle
            title="Услуги и цены"
            subtitle="Прозрачные цены без скрытых доплат"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, i) => (
            <div
              key={service.name}
              className="reveal group bg-[#151515] border border-[#2A2A2A] hover:border-white/30 p-6 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-2xl mb-2 block">{service.icon}</span>
                  <h3 className="font-display text-lg md:text-xl text-white font-medium">
                    {service.name}
                  </h3>
                </div>
                <span className="text-2xl md:text-3xl font-bold text-white tabular-nums">
                  {service.price}
                  <span className="text-sm font-normal text-white/50 ml-1">сом</span>
                </span>
              </div>

              <div className="flex items-center text-white/50 text-sm mb-5">
                <Clock className="w-3.5 h-3.5 mr-1.5" />
                {service.time} мин
              </div>

              <button
                type="button"
                onClick={() => scrollToBooking(service.name)}
                className="w-full border border-white/20 text-white hover:bg-white hover:text-black py-2.5 text-sm font-medium tracking-wider uppercase transition-all duration-300"
              >
                Записаться
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
