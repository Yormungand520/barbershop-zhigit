import { useState, type FormEvent } from "react";
import { SectionTitle } from "./SectionTitle";
import { Check, MessageCircle } from "lucide-react";

const serviceOptions = [
  "Стрижка — 500 сом",
  "Стрижка + борода — 800 сом",
  "Модельная стрижка — 700 сом",
  "Оформление бороды — 400 сом",
  "Детская стрижка — 350 сом",
  "Kamikaze (под 0) — 300 сом",
];

const masterOptions = ["Любой мастер", "Махмуд", "Эржан"];

const timeSlots = [
  "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
];

const WHATSAPP_NUMBER = "996997140799";

function buildWhatsAppUrl(form: {
  service: string;
  master: string;
  date: string;
  time: string;
  name: string;
  phone: string;
}) {
  const message = `Здравствуйте! Хочу записаться:\n\n` +
    `📋 Услуга: ${form.service}\n` +
    `💈 Мастер: ${form.master || "Любой мастер"}\n` +
    `📅 Дата: ${form.date}\n` +
    `🕐 Время: ${form.time}\n` +
    `👤 Имя: ${form.name}\n` +
    `📞 Телефон: ${form.phone}`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function BookingSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    service: "",
    master: "",
    date: "",
    time: "",
    name: "",
    phone: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.service || !form.date || !form.time || !form.name || !form.phone) return;

    // Open WhatsApp with booking details
    window.open(buildWhatsAppUrl(form), "_blank");
    setSubmitted(true);
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maxDateStr = maxDate.toISOString().split("T")[0];

  if (submitted) {
    return (
      <section id="booking" className="py-20 md:py-28 px-4 bg-[#0A0A0A]">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-display text-3xl text-white mb-3">Заявка отправлена!</h3>
          <p className="text-white/60 mb-2">
            {form.service} · {form.date} · {form.time}
          </p>
          <p className="text-white/40 text-sm mb-8">
            Подтвердите запись в WhatsApp — мастер ответит в течение 15 минут
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setForm({ service: "", master: "", date: "", time: "", name: "", phone: "" });
            }}
            className="text-white/70 hover:text-white underline underline-offset-4 text-sm transition-colors"
          >
            Записать ещё
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 md:py-28 px-4 bg-[#0A0A0A]">
      <div className="max-w-2xl mx-auto">
        <div className="reveal">
          <SectionTitle
            title="Онлайн-запись"
            subtitle="Выберите услугу, мастера и удобное время"
          />
        </div>

        <form onSubmit={handleSubmit} className="reveal space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2" htmlFor="service">
                Услуга *
              </label>
              <select
                id="service"
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                required
                className="w-full bg-[#151515] border border-[#333333] text-white py-3 px-4 text-sm focus:border-white focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="">Выберите услугу</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2" htmlFor="master">
                Мастер
              </label>
              <select
                id="master"
                value={form.master}
                onChange={(e) => setForm({ ...form, master: e.target.value })}
                className="w-full bg-[#151515] border border-[#333333] text-white py-3 px-4 text-sm focus:border-white focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                {masterOptions.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2" htmlFor="date">
                Дата *
              </label>
              <input
                type="date"
                id="date"
                value={form.date}
                min={minDate}
                max={maxDateStr}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                required
                className="w-full bg-[#151515] border border-[#333333] text-white py-3 px-4 text-sm focus:border-white focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2" htmlFor="time">
                Время *
              </label>
              <select
                id="time"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                required
                className="w-full bg-[#151515] border border-[#333333] text-white py-3 px-4 text-sm focus:border-white focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="">Выберите время</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2" htmlFor="name">
                Ваше имя *
              </label>
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Введите ваше имя"
                required
                className="w-full bg-[#151515] border border-[#333333] text-white py-3 px-4 text-sm placeholder:text-[#555] focus:border-white focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2" htmlFor="phone">
                Телефон *
              </label>
              <input
                type="tel"
                id="phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+996 997 140 799"
                required
                className="w-full bg-[#151515] border border-[#333333] text-white py-3 px-4 text-sm placeholder:text-[#555] focus:border-white focus:outline-none transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-white hover:bg-white/90 text-black font-semibold py-4 text-base tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            Записаться
          </button>

          <div className="text-center pt-2">
            <span className="text-white/40 text-sm">или</span>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Здравствуйте, хочу записаться на стрижку")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-white/50 hover:text-white text-sm mt-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Записаться через WhatsApp
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
