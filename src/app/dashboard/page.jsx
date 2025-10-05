"use client";
import { useSession } from "next-auth/react";

const DashboardPage = () => {
  const { data: session, status } = useSession();

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">Hello! {session?.user?.name}</h2>
      <p className="text-[#6B7280]">
        From your account dashboard, you can view and manage your recent orders,
        explore detailed product information, and track your business
        performance through real-time statistics.
      </p>
    </div>
  );
};

export default DashboardPage;
