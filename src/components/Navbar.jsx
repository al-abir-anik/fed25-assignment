"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Search from "./Search";
import toast from "react-hot-toast";
import { RiMenu2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { GoGlobe } from "react-icons/go";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <div className="w-full border-b border-[#e5e7eb]">
      {/* upper nav */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-[1280px] mx-auto px-4 py-2 md:py-3 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
          {/* currency */}
          <div className="w-full md:w-fit flex justify-between">
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1.5">
                <GoGlobe className="text-base" />
                <p className="text-sm">English</p>
                <IoIosArrowDown className="text-base" />
              </span>
              <span className="flex items-center gap-1.5">
                <Image src="/US.png" alt="us flag" width={16} height={16} />
                <p className="text-sm">USD</p>
                <IoIosArrowDown className="text-base" />
              </span>
            </div>

            {/* Login / Logout */}
            <div className="flex md:hidden items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(0 0 0)"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.4337 6.35C16.4337 8.74 14.4937 10.69 12.0937 10.69L12.0837 10.68C9.69365 10.68 7.74365 8.73 7.74365 6.34C7.74365 3.95 9.70365 2 12.0937 2C14.4837 2 16.4337 3.96 16.4337 6.35ZM14.9337 6.34C14.9337 4.78 13.6637 3.5 12.0937 3.5C10.5337 3.5 9.25365 4.78 9.25365 6.34C9.25365 7.9 10.5337 9.18 12.0937 9.18C13.6537 9.18 14.9337 7.9 14.9337 6.34Z"
                  fill="#fff"
                />
                <path
                  d="M12.0235 12.1895C14.6935 12.1895 16.7835 12.9395 18.2335 14.4195V14.4095C20.2801 16.4956 20.2739 19.2563 20.2735 19.4344L20.2735 19.4395C20.2635 19.8495 19.9335 20.1795 19.5235 20.1795H19.5135C19.0935 20.1695 18.7735 19.8295 18.7735 19.4195C18.7735 19.3695 18.7735 17.0895 17.1535 15.4495C15.9935 14.2795 14.2635 13.6795 12.0235 13.6795C9.78346 13.6795 8.05346 14.2795 6.89346 15.4495C5.27346 17.0995 5.27346 19.3995 5.27346 19.4195C5.27346 19.8295 4.94346 20.1795 4.53346 20.1795C4.17346 20.1995 3.77346 19.8595 3.77346 19.4495L3.77345 19.4448C3.77305 19.2771 3.76646 16.506 5.81346 14.4195C7.26346 12.9395 9.35346 12.1895 12.0235 12.1895Z"
                  fill="#fff"
                />
              </svg>

              {status === "authenticated" ? (
                <button
                  onClick={() => {
                    signOut({ callbackUrl: "/" });
                    toast.success("Logout Successful");
                  }}
                  className="text-sm text-red-500 hover:underline"
                >
                  Logout
                </button>
              ) : (
                <span className="text-sm flex gap-2">
                  <Link href="/api/auth/login" className="hover:underline">
                    Login
                  </Link>
                  /
                  <Link href="/api/auth/login" className="hover:underline">
                    Register
                  </Link>
                </span>
              )}
            </div>
          </div>

          <p className="text-sm text-center md:text-base">
            Flash Sale Live <span className="font-medium">– 30% Off</span>{" "}
            Everything
          </p>

          {/* Login / Logout */}
          <div className="hidden md:flex items-center gap-3">
            <svg
              width="18"
              height="18"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(0 0 0)"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.4337 6.35C16.4337 8.74 14.4937 10.69 12.0937 10.69L12.0837 10.68C9.69365 10.68 7.74365 8.73 7.74365 6.34C7.74365 3.95 9.70365 2 12.0937 2C14.4837 2 16.4337 3.96 16.4337 6.35ZM14.9337 6.34C14.9337 4.78 13.6637 3.5 12.0937 3.5C10.5337 3.5 9.25365 4.78 9.25365 6.34C9.25365 7.9 10.5337 9.18 12.0937 9.18C13.6537 9.18 14.9337 7.9 14.9337 6.34Z"
                fill="#fff"
              />
              <path
                d="M12.0235 12.1895C14.6935 12.1895 16.7835 12.9395 18.2335 14.4195V14.4095C20.2801 16.4956 20.2739 19.2563 20.2735 19.4344L20.2735 19.4395C20.2635 19.8495 19.9335 20.1795 19.5235 20.1795H19.5135C19.0935 20.1695 18.7735 19.8295 18.7735 19.4195C18.7735 19.3695 18.7735 17.0895 17.1535 15.4495C15.9935 14.2795 14.2635 13.6795 12.0235 13.6795C9.78346 13.6795 8.05346 14.2795 6.89346 15.4495C5.27346 17.0995 5.27346 19.3995 5.27346 19.4195C5.27346 19.8295 4.94346 20.1795 4.53346 20.1795C4.17346 20.1995 3.77346 19.8595 3.77346 19.4495L3.77345 19.4448C3.77305 19.2771 3.76646 16.506 5.81346 14.4195C7.26346 12.9395 9.35346 12.1895 12.0235 12.1895Z"
                fill="#fff"
              />
            </svg>

            {status === "authenticated" ? (
              <button
                onClick={() => {
                  signOut({ callbackUrl: "/" });
                  toast.success("Logout Successful");
                }}
                className="text-sm text-red-500 hover:underline"
              >
                Logout
              </button>
            ) : (
              <span className="text-sm flex gap-2">
                <Link href="/api/auth/login" className="hover:underline">
                  Login
                </Link>
                /
                <Link href="/api/auth/login" className="hover:underline">
                  Register
                </Link>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* main nav */}
      <div className="py-4">
        <nav className="container mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
              className="p-1 text-2xl text-[#323544] block lg:hidden"
            >
              {openMobileMenu ? <IoClose /> : <RiMenu2Fill />}
            </button>
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={120} height={28} />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-7 font-medium text-base text-[#1F2937]">
            <Link
              href="/"
              className={`hover:text-primary transition ${
                pathname === "/" && "text-primary font-semibold"
              }`}
            >
              Home
            </Link>

            <Link
              href="/shop"
              className={`flex items-center gap-1 hover:text-primary transition ${
                pathname === "/shop" && "text-primary font-semibold"
              }`}
            >
              Shop{" "}
              <p className="w-fit px-2 text-sm font-normal rounded-full text-[#1d4ed8] bg-[#eff6ff]">
                20% OFF
              </p>
            </Link>

            <Link
              href="/dashboard"
              className={`hover:text-primary transition ${
                pathname === "/dashboard" && "text-primary font-semibold"
              }`}
            >
              Dashboard
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="hidden md:block">
              <Search />
            </div>

            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(0 0 0)"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.4337 6.35C16.4337 8.74 14.4937 10.69 12.0937 10.69L12.0837 10.68C9.69365 10.68 7.74365 8.73 7.74365 6.34C7.74365 3.95 9.70365 2 12.0937 2C14.4837 2 16.4337 3.96 16.4337 6.35ZM14.9337 6.34C14.9337 4.78 13.6637 3.5 12.0937 3.5C10.5337 3.5 9.25365 4.78 9.25365 6.34C9.25365 7.9 10.5337 9.18 12.0937 9.18C13.6537 9.18 14.9337 7.9 14.9337 6.34Z"
                  fill="#343C54"
                />
                <path
                  d="M12.0235 12.1895C14.6935 12.1895 16.7835 12.9395 18.2335 14.4195V14.4095C20.2801 16.4956 20.2739 19.2563 20.2735 19.4344L20.2735 19.4395C20.2635 19.8495 19.9335 20.1795 19.5235 20.1795H19.5135C19.0935 20.1695 18.7735 19.8295 18.7735 19.4195C18.7735 19.3695 18.7735 17.0895 17.1535 15.4495C15.9935 14.2795 14.2635 13.6795 12.0235 13.6795C9.78346 13.6795 8.05346 14.2795 6.89346 15.4495C5.27346 17.0995 5.27346 19.3995 5.27346 19.4195C5.27346 19.8295 4.94346 20.1795 4.53346 20.1795C4.17346 20.1995 3.77346 19.8595 3.77346 19.4495L3.77345 19.4448C3.77305 19.2771 3.76646 16.506 5.81346 14.4195C7.26346 12.9395 9.35346 12.1895 12.0235 12.1895Z"
                  fill="#343C54"
                />
              </svg>
            </button>
            <div className="relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(0 0 0)"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.8227 4.77124L12 4.94862L12.1773 4.77135C14.4244 2.52427 18.0676 2.52427 20.3147 4.77134C22.5618 7.01842 22.5618 10.6616 20.3147 12.9087L13.591 19.6324C12.7123 20.5111 11.2877 20.5111 10.409 19.6324L3.6853 12.9086C1.43823 10.6615 1.43823 7.01831 3.6853 4.77124C5.93237 2.52417 9.5756 2.52417 11.8227 4.77124ZM10.762 5.8319C9.10073 4.17062 6.40725 4.17062 4.74596 5.8319C3.08468 7.49319 3.08468 10.1867 4.74596 11.848L11.4697 18.5718C11.7625 18.8647 12.2374 18.8647 12.5303 18.5718L19.254 11.8481C20.9153 10.1868 20.9153 7.49329 19.254 5.83201C17.5927 4.17072 14.8993 4.17072 13.238 5.83201L12.5304 6.53961C12.3897 6.68026 12.199 6.75928 12 6.75928C11.8011 6.75928 11.6104 6.68026 11.4697 6.53961L10.762 5.8319Z"
                  fill="#343C54"
                />
              </svg>
              <span className="absolute -top-2 -right-3 bg-primary text-[10px] font-medium text-white rounded-full py-0.5 px-1.5 border border-white">
                3
              </span>
            </div>
            <div className="relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(0 0 0)"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.56641 4C1.56641 3.58579 1.90219 3.25 2.31641 3.25H3.49696C4.61854 3.25 5.56885 4.07602 5.72504 5.18668L5.7862 5.62161H19.7507C21.3714 5.62161 22.4605 7.28344 21.8137 8.76953L19.1464 14.8979C18.789 15.719 17.9788 16.25 17.0833 16.25L7.72179 16.25C6.60021 16.25 5.6499 15.424 5.49371 14.3133L4.23965 5.39556C4.18759 5.02534 3.87082 4.75 3.49696 4.75H2.31641C1.90219 4.75 1.56641 4.41421 1.56641 4ZM5.99714 7.12161L6.9791 14.1044C7.03116 14.4747 7.34793 14.75 7.72179 14.75L17.0833 14.75C17.3818 14.75 17.6519 14.573 17.771 14.2993L20.4383 8.17092C20.6539 7.67556 20.2909 7.12161 19.7507 7.12161H5.99714Z"
                  fill="#343C54"
                />
                <path
                  d="M6.03418 19.5C6.03418 18.5335 6.81768 17.75 7.78418 17.75C8.75068 17.75 9.53428 18.5335 9.53428 19.5C9.53428 20.4665 8.75078 21.25 7.78428 21.25C6.81778 21.25 6.03418 20.4665 6.03418 19.5Z"
                  fill="#343C54"
                />
                <path
                  d="M16.3203 17.75C15.3538 17.75 14.5703 18.5335 14.5703 19.5C14.5703 20.4665 15.3538 21.25 16.3203 21.25C17.2868 21.25 18.0704 20.4665 18.0704 19.5C18.0704 18.5335 17.2868 17.75 16.3203 17.75Z"
                  fill="#343C54"
                />
              </svg>

              <span className="absolute -top-2 -right-3 bg-primary text-[10px] font-medium text-white rounded-full py-0.5 px-1.5 border border-white">
                3
              </span>
            </div>
          </div>

          {/* Small screen menus */}
          <div
            className={`${
              openMobileMenu ? "flex" : "hidden"
            } absolute top-30 left-0 w-full text-white bg-primary shadow-md py-5 flex-col items-center gap-4 px-5 md:hidden z-999`}
          >
            <div className="block sm:hidden">
              <Search />
            </div>

            <Link
              href="/"
              onClick={() => setOpenMobileMenu(false)}
              className="block"
            >
              Home
            </Link>
            <Link
              href="/shop"
              onClick={() => setOpenMobileMenu(false)}
              className="block"
            >
              Shop
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setOpenMobileMenu(false)}
              className="block"
            >
              Dashboard
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
