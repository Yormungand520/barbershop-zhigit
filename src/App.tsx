import { useEffect } from "react";
import { HeroSection } from "./components/barbershop/HeroSection";
import { ServicesSection } from "./components/barbershop/ServicesSection";
import { BarbersSection } from "./components/barbershop/BarbersSection";
import { GallerySection } from "./components/barbershop/GallerySection";
import { ReviewsSection } from "./components/barbershop/ReviewsSection";
import { BookingSection } from "./components/barbershop/BookingSection";
import { ContactsSection } from "./components/barbershop/ContactsSection";
import { Footer } from "./components/barbershop/Footer";
import { WhatsAppButton } from "./components/barbershop/WhatsAppButton";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <BarbersSection />
      <GallerySection />
      <ReviewsSection />
      <BookingSection />
      <ContactsSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
