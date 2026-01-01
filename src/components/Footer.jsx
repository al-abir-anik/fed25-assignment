import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill, RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { LuHeadset } from "react-icons/lu";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    <FaFacebook key="fb" />,
    <RiTwitterXFill key="tw" />,
    <RiInstagramFill key="ig" />,
    <FaLinkedin key="li" />,
  ];

  const clothing = [
    "Tops",
    "Tops & Blouses",
    "Dresses",
    "Outerwear",
    "Accessories",
    "New Arrivals",
  ];
  const shoes = [
    "Heels Shoes",
    "Running Shoes",
    "Sandals",
    "Ballet Pumps",
    "Slingback",
    "Sale",
  ];

  return (
    <footer className="w-full pt-5 lg:pt-0 bg-[#f3f4f6]">
      {/* upper footer */}
      <div className="max-w-7xl w-full mx-auto py-11 lg:py-28 px-4 lg:px-8 flex flex-col lg:flex-row gap-12 lg:justify-between">
        {/* 1 - Brand */}
        <div className="w-full sm:w-[378px] flex flex-col justify-between space-y-8">
          <div className="space-y-7">
            <Link
              href="/"
              className="text-3xl font-black text-primary text-shadow-primary"
            >
              G<span className="text-2xl text-[#1F2937]">IZMO</span>
            </Link>
            <p className="mt-4 text-[#6b7280] leading-6 tracking-[-0.2px]">
              Gizmo comes with all the essential UI components you need to
              create beautiful websites based on Tailwind CSS.
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-[#6b7280] font-medium">Follow us on</p>
            <span className="flex gap-5 text-2xl">
              {socialLinks.map((link, index) => (
                <button
                  key={index}
                  className="text-customBlack/30 hover:text-customBlack/90 transition-colors"
                >
                  {link}
                </button>
              ))}
            </span>
          </div>
        </div>

        {/*  Clothing & Shoes & news */}
        <div className="flex flex-col lg:flex-row gap-11 lg:gap-20">
          {/* clothing */}
          <div className="space-y-5">
            <h2 className="text-xl font-semibold">Clothing</h2>
            <ul className="space-y-2">
              {clothing.map((link) => (
                <li
                  key={link}
                  className="font-medium text-[#6b7280] hover:underline cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* shoes */}
          <div className="space-y-5">
            <h2 className="text-xl font-semibold">Shoes</h2>
            <ul className="space-y-2">
              {shoes.map((link) => (
                <li
                  key={link}
                  className="font-medium text-[#6b7280] hover:underline cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6 w-full sm:w-[364px]">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Newsletter</h2>
              <p className="text-base text-[#6b7280]">
                Signup for latest news and insights from Gizmo.
              </p>
            </div>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email address"
                className="w-full py-2.5 px-4 border border-[#d1d5db] outline-primary rounded-xl"
              />
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-primary text-white font-medium rounded-xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* lower footer */}
      <div className="w-full bg-white">
        <div className="max-w-7xl w-full mx-auto px-6 flex flex-col">
          {/* 1 */}
          <div className="flex flex-col lg:flex-row md:justify-between md:items-center">
            {/* Contact */}
            <div className="py-6 flex flex-col lg:flex-row items-center gap-3 border-b border-[#F3F4F6]">
              <div className="w-10 h-10 grid place-items-center bg-[#F3F4F6] text-2xl text-[#374151] rounded-lg">
                <LuHeadset />
              </div>
              <div className="space-y-1">
                <p className="text-xs md:text-sm text-[#6b7280]">
                  8:30 AM - 10:30 PM
                </p>
                <p className="font-semibold">+16283998030</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row">
              {/* Payment */}
              <div className="block lg:hidden py-6 space-y-3 border-b border-[#F3F4F6]">
                <h3 className="text-sm font-medium text-[#6B7280] text-center">
                  We Support
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <img
                    src="/mastercard logo.png"
                    alt="card"
                    className="bg-contain"
                  />
                  <img src="/visa logo.png" alt="card" className="bg-contain" />
                  <img
                    src="/paypal logo.png"
                    alt="card"
                    className="bg-contain"
                  />
                  <img src="/amex logo.png" alt="card" className="bg-contain" />
                  <img
                    src="/westernunion logo.png"
                    alt="card"
                    className="bg-contain"
                  />
                </div>
              </div>

              {/* Apps */}
              <div className="py-6 flex flex-col lg:flex-row items-center justify-center gap-3">
                <div className="space-y-1 text-center">
                  <h3 className="font-semibold">Download Now on</h3>
                  <p className="text-xs md:text-sm text-[#6B7280]">
                    Free home delivery on your first purchase
                  </p>
                </div>
                <div className="flex gap-2.5">
                  <img
                    src="/google play.png"
                    alt="google play"
                    className="w-full sm:w-32"
                  />
                  <img
                    src="/app store.png"
                    alt="app store"
                    className="w-full sm:w-32"
                  />
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="hidden lg:block py-6 space-y-3 border-b border-[#F3F4F6]">
              <h3 className="text-sm font-medium text-[#6B7280] text-center">
                We Support
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <img
                  src="/mastercard logo.png"
                  alt="card"
                  className="bg-contain"
                />
                <img src="/visa logo.png" alt="card" className="bg-contain" />
                <img src="/paypal logo.png" alt="card" className="bg-contain" />
                <img src="/amex logo.png" alt="card" className="bg-contain" />
                <img
                  src="/westernunion logo.png"
                  alt="card"
                  className="bg-contain"
                />
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="py-5 flex flex-col-reverse md:flex-row justify-between items-center gap-5 border-t border-[#F3F4F6] text-[#6b7280] text-center sm:text-left">
            <p className="">© Copyright 2025 - Gizmo.</p>
            <span className="flex flex-col sm:flex-row gap-3">
              <button>Refund Policy</button>
              <button>Terms of Services</button>
              <button>Shipping Policy</button>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
