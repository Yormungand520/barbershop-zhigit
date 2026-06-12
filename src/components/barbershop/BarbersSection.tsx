import { SectionTitle } from "./SectionTitle";

const barbers = [
  {
    name: "Махмуд",
    specialty: "Классические и модельные стрижки",
    experience: "5 лет опыта",
    image: "https://images.unsplash.com/photo-1570158268183-d296b2892211?w=400&q=80",
  },
  {
    name: "Эржан",
    specialty: "Стрижки и оформление бороды",
    experience: "3 года опыта",
    image: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=400&q=80",
  },
];

export function BarbersSection() {
  const scrollToBooking = (barberName: string) => {
    const el = document.getElementById("booking");
    el?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      const select = document.querySelector<HTMLSelectElement>("[data-master-select]");
      if (select) {
        select.value = barberName;
        select.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }, 800);
  };

  return (
    <section id="barbers" className="py-20 md:py-28 px-4 bg-[#111111]">
      <div className="max-w-5xl mx-auto">
        <div className="reveal">
          <SectionTitle
            title="Наши барберы"
            subtitle="Каждый мастер — профессионал своего дела"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto">
          {barbers.map((barber, i) => (
            <div
              key={barber.name}
              className="reveal text-center"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-52 h-52 md:w-60 md:h-60 mx-auto rounded-full overflow-hidden mb-6 border-2 border-white/10 hover:border-white/30 transition-all duration-500">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-white mb-2">
                {barber.name}
              </h3>
              <p className="text-white/70 text-sm mb-1">{barber.specialty}</p>
              <p className="text-white/40 text-sm mb-5">{barber.experience}</p>
              <button
                type="button"
                onClick={() => scrollToBooking(barber.name)}
                className="border border-white/20 text-white hover:bg-white hover:text-black px-8 py-2.5 text-sm font-medium tracking-wider uppercase transition-all duration-300"
              >
                Записаться к мастеру
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
