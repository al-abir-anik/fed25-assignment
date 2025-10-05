import { categoryShop } from "@/assets/assets";
import Image from "next/image";

const CategoryShop = () => {
  return (
    <div className="w-full bg-[#f3f4f6] text-customBlack">
      <div className="container mx-auto px-8 py-20">
        {/* Heading */}
        <div className="w-full lg:w-2/5 space-y-4 mb-10 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Shop by Category
          </h2>
          <p className="text-sm sm:text-base text-[#6b7280]">
            Explore our curated selection of products across premium categories,
            from everyday essentials to exclusive limited collections.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {categoryShop.map((category) => (
            <div key={category.name} className="sm:p-4 rounded-xl bg-white">
              <div className="relative w-full pb-[110%] flex items-center justify-center group bg-[#f6f7fb] rounded-lg overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  className="absolute top-0 left-0 w-full h-full p-5 object-contain transition-transform duration-300 group-hover:scale-105"
                  width={800}
                  height={100}
                />
              </div>
              <div className="p-3 space-y-1 text-center">
                <h2 className="font-semibold text-sm sm:text-base md:text-lg">
                  {category.name}
                </h2>
                <p className="text-xs sm:text-sm text-[#6B7280]">
                  {category.totalProduct} Products
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryShop;
