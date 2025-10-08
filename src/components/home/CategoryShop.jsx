import { categoryShop } from "@/assets/assets";
import Image from "next/image";

const CategoryShop = () => {
  return (
    <section className="w-full py-16 sm:py-18 md:py-20 lg:py-24 xl:py-28 bg-[#f3f4f6] text-customBlack">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 xl:px-8 space-y-11 md:space-y-16">
        {/* Heading */}
        <div className="w-full lg:w-1/2 space-y-3 md:space-y-4">
          <h2 className="text-4xl lg:text-5xl font-semibold">
            Shop by Category
          </h2>
          <p className="text-[#6b7280]">
            Explore our curated selection of products across premium categories,
            from everyday essentials to exclusive limited collections.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-6">
          {categoryShop.map((category) => (
            <div key={category.name} className="p-2 rounded-xl bg-white">
              <div className="relative w-full pb-[100%] flex items-center justify-center rounded-lg overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden"
                  width={800}
                  height={100}
                />
              </div>
              <div className="p-3 space-y-1 text-center">
                <h2 className="font-semibold">
                  {category.name}
                </h2>
                <p className="font-medium text-[#6B7280]">
                  {category.totalProduct} Products
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShop;
