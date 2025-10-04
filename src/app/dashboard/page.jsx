"use client";
import Loader from "@/components/Loader";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      toast.error("Login required to access Dashboard.", { id: "auth-error" });
      router.push("/api/auth/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <Loader />;
  }

  const dashboardMenu = [
    { menu: "Dashboard", route: "/dashboard" },
    { menu: "Stats", route: "/dashboard/stats" },
    { menu: "Products", route: "/dashboard/products" },
    { menu: "Orders", route: "/dashboard/orders" },
  ];

  return (
    <div className="max-w-[1280px] mx-auto mt-4 lg:mt-12 mb-16 flex justify-between items-start text-customBlack">
      {/* left menu */}
      <div className="w-[25%] h-fit bg-[#f9fafb] rounded-xl sticky top-10">
        <div className="p-4 flex gap-5 border-b border-gray-300">
          <div className="w-12 h-12 rounded-full grid place-items-center bg-primary/10">
            <img src="/Vector.png" alt="user" />
          </div>
          <div className="space-y-1">
            <p className="font-medium">{session?.user?.email}</p>
            <p className="text-xs text-[#6b7280]">Member Since Sep 2025</p>
          </div>
        </div>

        <div className="p-4 lg:p-6 flex flex-col gap-4">
          {dashboardMenu.map((m) => (
            <Link key={m.menu} href={m.route} className="w-full py-3 px-4 bg-primary/5 hover:bg-primary/20 hover:text-primary rounded-lg">
              {m.menu}
            </Link>
          ))}
        </div>
      </div>

      {/* Right side */}
      <div className="w-[72%] p-6 bg-amber-200 rounded-xl">ge</div>
    </div>
  );
};

export default Dashboard;
