"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { heroCard, heroSlider } from "@/assets/assets";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-10 lg:py-14 min-h-[40rem]">
        {/* left slider */}
        <div className="lg:col-span-2 grid">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full"
          >
            {heroSlider.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between bg-[#111827] rounded-xl h-full px-6 sm:px-10 py-10">
                  <div className="space-y-8 text-center md:text-left">
                    <div className="space-y-4">
                      <p className="text-sm text-[#9ca3af] font-medium">
                        {slide.offer}
                      </p>
                      <div className="space-y-3">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
                          {slide.title}
                        </h2>
                        <p className="text-sm sm:text-base text-[#9ca3af]">
                          {slide.description}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/collection/${slide.id}`}
                      className="inline-block px-5 py-2.5 text-base font-medium text-[#1f2937] bg-white rounded-lg hover:bg-gray-200 transition"
                    >
                      Buy Now ${slide.price}
                    </Link>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="flex justify-center md:justify-end mt-8 md:mt-0">
                    <Image
                      className="w-44 sm:w-60 md:w-72 drop-shadow-2xl"
                      src={slide.image}
                      alt={`Slide ${slide.id}`}
                      width={300}
                      height={308}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* right hero cards */}
        <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 h-full">
          {heroCard.map((card) => (
            <div
              key={card.id}
              className="flex justify-between items-center bg-[#f3f4f6] rounded-xl p-6"
            >
              {/* Text */}
              <div className="space-y-6">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-[#6b7280] uppercase">
                    {card.brand}
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-[#374151] uppercase">
                    {card.title}
                  </p>
                </div>
                <button className="w-fit px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/80 transition">
                  Buy Now
                </button>
              </div>

              {/* Image */}
              <div className="flex justify-center">
                <Image
                  className="w-28 sm:w-32 md:w-36 drop-shadow-xl object-contain"
                  src={card.image}
                  alt={card.title}
                  width={300}
                  height={308}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
