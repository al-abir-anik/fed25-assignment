"use client";
import Loader from "@/components/Loader";
import ProductCard from "@/components/ProductCard";
import { useAppContext } from "@/contexts/AppContext";
import { useEffect, useState } from "react";

const Shop = () => {
  const { search } = useAppContext(); // ✅ get search term from context
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setAllProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle category filter
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategories((prev) =>
      checked ? [...prev, value] : prev.filter((c) => c !== value)
    );
  };

  // Filter products by category and search term
  const filteredProducts = allProducts.filter((product) => {
    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const matchSearch =
      search.trim() === "" ||
      product.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const productCategories = [
    "Audio",
    "Watch",
    "Accessories",
    "Security",
    "Home decor",
  ];

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto min-h-[80vh] px-8 flex flex-col lg:flex-row gap-6 sm:gap-10 mt-4 lg:mt-12 mb-16">
      {/* Filter Section */}
      <div className="w-full sm:min-w-60 sm:w-60">
        <p className="my-2 text-xl font-medium flex items-center gap-2 sm:mb-4">
          FILTERS
        </p>

        <div className="px-5 py-3 mt-6 border border-gray-300">
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="space-y-3 text-sm font-light text-gray-700">
            {productCategories.map((cat) => (
              <label key={cat} className="flex gap-2">
                <input
                  className="w-3 cursor-pointer"
                  type="checkbox"
                  value={cat}
                  checked={selectedCategories.includes(cat)}
                  onChange={handleCategoryChange}
                />
                {cat}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex-1">
        <div className="flex justify-between mb-5">
          <div className="flex flex-col">
            <p className="text-base sm:text-2xl font-medium">All Collection</p>
            <div className="w-28 h-0.5 bg-primary mt-2"></div>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <p className="min-h-[40vh] text-xl text-gray-700 flex items-center justify-center">
            No products found!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-12 gap-y-12">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
