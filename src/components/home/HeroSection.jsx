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
    <div className="max-w-[1280px] mx-auto">
      <div className="w-full h-[44rem] py-20 flex gap-5">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          spaceBetween={30}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="mySwiper w-[70%] "
        >
          {heroSlider.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="w-full h-full px-14 flex flex-col md:flex-row items-center justify-between bg-[#111827] rounded-xl">
                <div className="w-full md:w-[55%] space-y-12 text-center md:text-left">
                  <div className="space-y-5">
                    <p className="text-sm text-[#9ca3af] font-medium">
                      {slide.offer}
                    </p>
                    <div className="space-y-3">
                      <h2 className="text-[28px] lg:text-4xl font-semibold text-white">
                        {slide.title}
                      </h2>
                      <p className="text-base text-[#9ca3af]">
                        {slide.description}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/collection/${slide.id}`}
                    className="px-5 py-2.5 text-base font-medium text-[#1f2937] bg-white rounded-lg"
                  >
                    Buy Now ${slide.price}
                  </Link>
                </div>

                {/* right image */}
                <div className="w-full md:w-2/5 mt-8 md:mt-0">
                  <Image
                    className="w-48 md:w-[19rem] drop-shadow-2xl"
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

        <div className="w-[30%] h-full flex flex-col justify-between gap-5">
          {heroCard.map((card) => (
            <div
              key={card.id}
              className="w-full h-64 p-6 flex gap-2 bg-[#f3f4f6] rounded-xl"
            >
              <div className="w-1/2 h-full flex flex-col justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-[#6b7280] uppercase">
                    {card.brand}
                  </p>
                  <p className="text-lg font-semibold text-[#374151] uppercase">
                    {card.title}
                  </p>
                </div>

                <Link
                  href={`/collection/${card.id}`}
                  className="w-fit px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-lg"
                >
                  Buy Now
                </Link>
              </div>

              <Image
                className="w-1/2 drop-shadow-xl"
                src={card.image}
                alt={`${card.title}`}
                width={300}
                height={308}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
