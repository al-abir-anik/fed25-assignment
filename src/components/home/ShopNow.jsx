import Link from "next/link";

const ShopNow = () => {
  return (
    <div className="w-full text-customBlack">
      <div className="container mx-auto px-8 py-14 flex flex-col lg:flex-row gap-6">
        <div className="flex gap-6">
          <div>
            <img src="/images/shop_now1.jpg" alt="" />
          </div>
          <div className="lg:hidden">
            <img src="/images/shop_now2.jpg" alt="" />
          </div>
        </div>

        <div className="px-3 lg:px-10 py-8 lg:py-6 flex flex-col justify-center items-center gap-5 bg-[#F3F4F6] rounded-2xl">
          <div className="text-center space-y-3">
            <h2 className="text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl font-semibold">
              Don’t Miss Out <br />
              50% OFF
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280]">
              Get 50% Off – Limited Time Only Refresh your wardrobe with modern
              essentials.
            </p>
          </div>
          <Link
            href="/shop"
            className="w-fit px-4 py-3 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/80 transition"
          >
            Shop Now
          </Link>
        </div>

        <div className="hidden lg:block"> 
          <img src="/images/shop_now2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ShopNow;
