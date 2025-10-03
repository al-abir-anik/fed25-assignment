"use client";
import Loader from "@/components/Loader";
import { useSession } from "next-auth/react";
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
  return (
    <div className="max-w-[1280px] mx-auto">
      <h1>Welcome, {session?.user?.name}</h1>
      <p>Email: {session?.user?.email}</p>
    </div>
  );
};

export default Dashboard;
