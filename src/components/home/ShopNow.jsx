import Image from "next/image";
import Link from "next/link";

const ShopNow = () => {
  return (
    <section className="container mx-auto px-4 py-16 xl:px-11 xl:py-11 grid grid-rows-1 lg:grid-cols-3  gap-5">
      <div className="w-full">
        <Image
          src="/images/shopNow2.png"
          alt="drone-image"
          width={1000}
          height={1000}
          className="w-full h-full bg-cover"
        />
      </div>

      <div className="w-full px-5 lg:px-10 py-5 sm:py-20 lg:py-5 flex flex-col justify-center items-center gap-7 bg-[#F3F4F6] rounded-2xl">
        <div className="text-center space-y-3 mt-11">
          <h2 className="text-4xl font-semibold">
            Don’t Miss Out <br />
            50% OFF
          </h2>
          <p className="text-sm text-[#6B7280]">
            Get 50% Off – Limited Time Only Refresh your wardrobe with modern
            essentials.
          </p>
        </div>
        <Link
          href="/shop"
          className="w-fit px-4 py-3 mb-11 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/80 transition"
        >
          Shop Now
        </Link>
      </div>

      <div className="w-full">
        <Image
          src="/images/shopNow1.png"
          alt="bag-image"
          width={1000}
          height={1000}
          className="w-full h-full bg-cover"
        />
      </div>
    </section>
  );
};

export default ShopNow;
