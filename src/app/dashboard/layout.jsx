"use client";
import Loader from "@/components/Loader";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const DashboardLayout = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

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
    <div className="max-w-[1280px] mx-auto mt-4 lg:mt-12 mb-16 flex flex-col lg:flex-row justify-between items-start gap-6 text-customBlack px-4">
      {/* Left menu */}
      <div className="w-full lg:w-[25%] bg-[#f9fafb] rounded-xl lg:sticky top-10">
        <div className="p-4 flex gap-4 items-center border-b border-gray-300">
          <div className="w-12 h-12 rounded-full grid place-items-center bg-primary/10">
            <img src="/Vector.png" alt="user" />
          </div>
          <div className="space-y-1">
            <p className="md:font-medium break-all">
              {session?.user?.email}
            </p>
            <p className="text-xs text-[#6b7280]">Member Since Sep 2025</p>
          </div>
        </div>

        <div className="p-4 lg:p-6 flex flex-wrap gap-3 sm:gap-4">
          {dashboardMenu.map((m) => (
            <Link
              key={m.menu}
              href={m.route}
              className={`w-fit lg:w-full py-3 px-4 text-sm md:text-base text-center sm:text-left rounded-lg transition-colors duration-200 ${
                pathname === m.route
                  ? "bg-primary/20 text-primary"
                  : "bg-primary/5 hover:bg-primary/20 hover:text-primary"
              }`}
            >
              {m.menu}
            </Link>
          ))}
        </div>
      </div>

      {/* Right side */}
      <div className="w-full lg:w-[72%] min-h-[50vh] p-4 sm:p-6 bg-[#f9fafb] rounded-xl">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
