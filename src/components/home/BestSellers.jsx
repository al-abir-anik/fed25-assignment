"use client";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

const BestSellers = () => {
  const [bestProducts, setBestProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setBestProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex justify-center py-10">
        <p className="text-gray-500 font-medium">Loading products...</p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 xl:px-8 py-16 sm:py-18 md:py-20 lg:py-24 xl:py-28 space-y-11 md:space-y-16 text-customBlack">
      {/* heading */}
      <div className="w-full sm:w-[640px] mx-auto text-center space-y-3 md:space-y-4">
        <h2 className="text-4xl lg:text-5xl font-semibold">
          Handpicked Highlights
        </h2>
        <p className="text-[#6b7280]">
          There are many variations of available but the majority have suffered
          alteration in some form.
        </p>
      </div>

      {bestProducts.length === 0 ? (
        <p className="min-h-[40vh] text-xl text-gray-700 flex items-center justify-center">
          No products found!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {bestProducts.slice(0, 4).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default BestSellers;
