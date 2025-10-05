"use client";
import { useEffect, useState } from "react";

const StatsPage = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/stats");
        if (!res.ok) throw new Error("Failed to fetch stats");
        const data = await res.json();
        setStats(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex justify-center py-10">
        <p className="text-gray-500 font-medium">Loading stats...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex justify-center py-10">
        <p className="text-red-500 font-medium">{error}</p>
      </div>
    );
  }

  return (
    <div className="">
      <h2 className="mb-4 text-xl font-semibold">Statistics</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Total Orders */}
        <div className="p-6 rounded-xl bg-primary/5">
          <p className="text-sm text-gray-500">Total Orders</p>
          <h3 className="mt-2 text-2xl font-semibold text-gray-800">
            {stats.totalOrders}
          </h3>
        </div>

        {/* Revenue */}
        <div className="p-6 rounded-xl bg-primary/5">
          <p className="text-sm text-gray-500">Revenue</p>
          <h3 className="mt-2 text-2xl font-semibold text-gray-800">
            ${stats.revenue}
          </h3>
        </div>

        {/* Customers */}
        <div className="p-6 rounded-xl bg-primary/5">
          <p className="text-sm text-gray-500">Customers</p>
          <h3 className="mt-2 text-2xl font-semibold text-gray-800">
            {stats.customers}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
