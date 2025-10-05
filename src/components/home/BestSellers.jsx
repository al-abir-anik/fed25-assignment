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
    <div className="container mx-auto px-8 py-20">
      <div className="w-full mx-auto lg:w-2/5 space-y-4 mb-10 lg:mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
          Handpicked Highlights
        </h2>
        <p className="text-sm sm:text-base text-[#6b7280]">
          There are many variations of available but the majority have suffered
          alteration in some form.
        </p>
      </div>

      {bestProducts.length === 0 ? (
        <p className="min-h-[40vh] text-xl text-gray-700 flex items-center justify-center">
          No products found!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12">
          {bestProducts.slice(0, 5).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BestSellers;
