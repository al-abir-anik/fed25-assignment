import { testimonials } from "@/assets/assets";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="w-full py-16 sm:py-18 md:py-20 lg:py-24 xl:py-28 bg-[#f3f4f6] text-customBlack">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 xl:px-8 space-y-11 md:space-y-16">
        {/* heading */}
        <div className="w-full lg:w-1/2 space-y-3 md:space-y-4 text-center lg:text-left">
          <p className="w-fit py-1 px-[14px] mx-auto lg:mx-0 font-medium bg-[#3758F9]/5 rounded-lg text-[#3758F9]">
            Testimonial
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold">
            Hear from Our Happy Customers
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          {testimonials.map((t, index) => (
            <div key={index} className="p-6 bg-white rounded-2xl space-y-8">
              <div className="space-y-6">
                <span className="flex gap-0.5 text-[#FACC15]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <p className="text-[#6B7280]">{t.review}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12">
                  <Image
                    src={t.userImage}
                    alt="user-image"
                    width={100}
                    height={100}
                    className="w-full h-full bg-cover rounded-full"
                  />
                </div>
                <div className="">
                  <p className="font-medium">{t.userName}</p>
                  <p className="text-sm text-[#6b7280]">{t.userTag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
