"use client";
import { useEffect, useState } from "react";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("/api/orders");
        if (!res.ok) throw new Error("Failed to fetch orders");
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading)
    return (
      <div className="text-center py-20 text-gray-500">Loading orders...</div>
    );

  if (error)
    return (
      <div className="text-center py-20 text-red-500">⚠️ Error: {error}</div>
    );

  return (
    <div className="overflow-x-auto">
      <h2 className="mb-4 text-xl font-semibold">
        Orders <span className="text-sm font-medium">({orders.length})</span>
      </h2>

      <table className="w-full text-sm lg:text-base text-left">
        <thead className="text-sm uppercase bg-white">
          <tr>
            <th className="px-4 py-4">ID</th>
            <th className="px-4 py-4">Customer</th>
            <th className="px-4 py-4">Amount ($)</th>
            <th className="px-4 py-4">Status</th>
          </tr>
        </thead>
        <tbody className="text-[#6b7280]">
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-t border-gray-200 hover:bg-primary/5"
            >
              <td className="py-4 px-4">{order.id}</td>
              <td className="py-4 px-4">{order.customer}</td>
              <td className="py-4 px-8">{order.amount}</td>
              <td
                className={`py-4 px-4 font-medium ${
                  order.status === "Completed"
                    ? "text-green-600"
                    : order.status === "Pending"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
