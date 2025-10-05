"use client";
import { useEffect, useState } from "react";

const DashboardProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="text-center py-20 text-gray-500">Loading products...</div>
    );

  if (error)
    return (
      <div className="text-center py-20 text-red-500">⚠️ Error: {error}</div>
    );

  return (
    <div className="rounded-xl overflow-x-auto">
      <h2 className="mb-4 text-xl font-semibold">
        Products{" "}
        <span className="text-sm font-medium">({products.length})</span>
      </h2>

      <table className="w-full text-sm lg:text-base text-left">
        <thead className="text-sm uppercase bg-white">
          <tr>
            <th className="px-6 py-4">ID</th>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Price ($)</th>
            <th className="px-6 py-4">Stock</th>
            <th className="px-6 py-4">Category</th>
          </tr>
        </thead>

        <tbody className="text-[#6b7280]">
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-t border-gray-200 hover:bg-primary/5"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                {product.id}
              </th>
              <td className="px-6 py-4">{product.name}</td>
              <td className="px-8 py-4">{product.price}</td>
              <td
                className={`px-8 py-4 font-medium ${
                  product.stock < 3
                    ? "text-red-500"
                    : product.stock < 5
                    ? "text-yellow-500"
                    : "text-green-600"
                }`}
              >
                {product.stock}
              </td>
              <td className="px-6 py-4">{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardProductsPage;
