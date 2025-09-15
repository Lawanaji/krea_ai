"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import ImageSlider from "../../../public/announce-wan-2-2-image.webp";

const slides = [
  {
    title: "WAN 2.2",
    subtitle: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    img: ImageSlider,
    cta: "Try WAN 2.2",
  },
  {
    title: "FLUX.1 Krea",
    subtitle: "Open Source Model",
    description:
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    img: ImageSlider,
    cta: "Read More",
  },
];

export default function HeroCarousel() {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={100}
        loop
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
              <Image
                src={s.img}
                alt={s.title}
                fill
                className="object-cover"
                priority={i === 0}
              />
              {/* Overlay with theme-aware text */}
              <div
                className="absolute inset-0 flex justify-between items-end p-8 
                              bg-black/40 dark:bg-black/50 text-foreground"
              >
                <div>
                  <p className="uppercase text-xs tracking-wider mb-2">
                    {s.subtitle}
                  </p>
                  <h2 className="text-4xl font-bold">{s.title}</h2>
                  <p className="mt-2 max-w-lg">{s.description}</p>
                </div>
                <button
                  className="mt-4 rounded-full bg-background px-4 py-2 text-sm 
                             text-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  {s.cta}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
