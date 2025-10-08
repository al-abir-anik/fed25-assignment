"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { heroCard, heroSlider } from "@/assets/assets";
import "swiper/css";
import "swiper/css/pagination";
import "../../style/sliderPagination.css";

const HeroSection = () => {
  return (
    <section className="max-w-7xl w-full mx-auto px-4 xl:px-0 py-4 sm:py-6 md:py-10 lg:py-20">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        {/* left slider */}
        <div
          id="slide"
          className="h-full px-6 sm:px-10 lg:px-14 py-7 grid lg:col-span-2 bg-[#111827] rounded-xl"
        >
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
                <div className="h-full grid grid-cols-1 md:grid-cols-2 items-center justify-between ">
                  <div className="space-y-8 text-center md:text-left">
                    <div className="space-y-4">
                      <p className="text-sm text-[#9ca3af] font-medium uppercase">
                        {slide.brand}
                      </p>
                      <div className="space-y-3">
                        <h2 className="text-[28px] sm:text-3xl lg:text-4xl font-semibold text-white">
                          {slide.title}
                        </h2>
                        <p className="text-sm sm:text-base text-[#9ca3af]">
                          {slide.description}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/collection/${slide.id}`}
                      className="block md:inline-block px-5 py-2.5 text-base font-medium text-[#1f2937] bg-white rounded-lg hover:bg-gray-200 transition"
                    >
                      Buy Now ${slide.price}
                    </Link>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="py-6  flex justify-center md:justify-end mt-8 md:mt-0">
                    <img
                      className="w-44 sm:w-60 md:w-72 drop-shadow-2xl"
                      src={slide.image}
                      alt={`Slide ${slide.id}`}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* right hero cards */}
        <div className="grid grid-rows-2 sm:grid-rows-1 md:grid-cols-2 xl:grid-cols-1 gap-6 h-full">
          {heroCard.map((card) => (
            <div
              key={card.id}
              className="w-full px-6 py-5 sm:px-7 flex justify-between items-center bg-[#f3f4f6] rounded-[10px]"
            >
              {/* Text */}
              <div className="w-1/2 h-fit space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-[#6b7280] uppercase">
                    {card.brand}
                  </p>
                  <p className="text-lg lg:text-xl font-semibold text-[#374151] uppercase">
                    {card.title}
                  </p>
                </div>
                <button className="w-fit px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/80 transition">
                  Buy Now
                </button>
              </div>

              {/* Image */}
              <div className="h-fit flex justify-center">
                <img
                  className="w-28 sm:w-32 md:w-36 h-fit drop-shadow-xl object-contain"
                  src={card.image}
                  alt={card.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
