import { Star } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const reviews = [
  {
    name: "Азамат К.",
    text: "Отличный барбершоп! Мастера — профессионалы, всегда доволен результатом. Хожу к Махмуду уже полгода.",
    rating: 5,
    date: "Май 2025",
  },
  {
    name: "Тимур Б.",
    text: "Записался онлайн, пришёл вовремя — без очередей. Стрижка + борода за час, всё аккуратно. Рекомендую!",
    rating: 5,
    date: "Апрель 2025",
  },
  {
    name: "Данияр М.",
    text: "Хорошее место, приятная атмосфера. Единственное — хотелось бы чуть больше выбор времени по вечерам. А так всё супер.",
    rating: 4,
    date: "Март 2025",
  },
  {
    name: "Марат С.",
    text: "Лучший барбершоп в округе. Хожу только сюда. Эржан — мастер своего дела, всегда стрижёт точно как надо.",
    rating: 5,
    date: "Май 2025",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? "fill-white text-white"
              : "fill-none text-[#3A3A3A]"
          }`}
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 md:py-28 px-4 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="reveal">
          <SectionTitle
            title="Отзывы клиентов"
            subtitle="Что говорят о нас"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className="reveal bg-[#151515] border border-[#2A2A2A] p-6 md:p-8"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <StarRating rating={review.rating} />

              <p className="text-white/85 mt-4 mb-5 leading-relaxed italic text-[15px]">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between">
                <span className="text-white font-medium text-sm">— {review.name}</span>
                <span className="text-white/40 text-xs">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Link to 2GIS */}
        <div className="reveal text-center mt-8">
          <a
            href="https://2gis.kg/bishkek/search/barbershop%20jigit/firm/70000001040681303"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white text-sm underline underline-offset-4 transition-colors"
          >
            Все отзывы на 2ГИС (29 отзывов) →
          </a>
        </div>
      </div>
    </section>
  );
}
