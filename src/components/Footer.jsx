import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill, RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { LuHeadset } from "react-icons/lu";

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
    <footer className="w-full bg-[#f3f4f6]">
      {/* upper footer */}
      <div className="container mx-auto py-20 px-6 flex flex-col lg:flex-row gap-12 lg:justify-between">
        {/* 1 - Brand */}
        <div className="lg:w-[32%] flex flex-col justify-between space-y-8">
          <div className="space-y-7">
            <Image src="/logo.png" alt="logo" width={120} height={28} />
            <p className="text-[#6b7280] text-sm sm:text-base">
              TailGrids comes with all the essential UI components you need to
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

        {/* 2 - Links & Newsletter */}
        <div className="flex flex-wrap gap-10 sm:gap-16 lg:w-[60%] justify-between">
          {/* Clothing */}
          <div className="space-y-5">
            <h2 className="text-lg sm:text-xl font-semibold">Clothing</h2>
            <ul className="space-y-2 text-sm sm:text-base">
              {clothing.map((link) => (
                <li key={link} className="font-medium text-[#6b7280]">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Shoes */}
          <div className="space-y-5">
            <h2 className="text-lg sm:text-xl font-semibold">Shoes</h2>
            <ul className="space-y-2 text-sm sm:text-base">
              {shoes.map((link) => (
                <li key={link} className="font-medium text-[#6b7280]">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6 w-full sm:w-[80%] lg:w-auto">
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-semibold">Newsletter</h2>
              <p className="text-[#6b7280] text-sm sm:text-base">
                Signup for the latest news and insights from TailGrids
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
        <div className="container mx-auto px-6 flex flex-col">
          {/* 1 */}
          <div className="py-8 flex flex-col md:flex-row gap-8 md:justify-between md:items-center">
            {/* Contact */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 grid place-items-center bg-[#F3F4F6] text-2xl text-[#374151] rounded-lg">
                <LuHeadset />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-[#6b7280]">8:30 AM - 10:30 PM</p>
                <p className="font-semibold">+16283998030</p>
              </div>
            </div>

            {/* Apps */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-5">
              <div className="space-y-1 mb-3 sm:mb-0">
                <h3 className="text-lg font-semibold">Download Now on</h3>
                <p className="text-sm text-[#6B7280]">
                  Free home delivery on your first purchase
                </p>
              </div>
              <div className="py-1 flex gap-2.5 flex-wrap">
                <img
                  src="/google play.png"
                  alt="google play"
                  className="w-32"
                />
                <img src="/app store.png" alt="app store" className="w-32" />
              </div>
            </div>

            {/* Payment */}
            <div className="space-y-3">
              <h3 className="font-medium">We Support</h3>
              <div className="flex flex-wrap gap-4">
                <img src="/mastercard logo.png" alt="card" className="w-10" />
                <img src="/visa logo.png" alt="card" className="w-10" />
                <img src="/paypal logo.png" alt="card" className="w-10" />
                <img src="/amex logo.png" alt="card" className="w-10" />
                <img src="/westernunion logo.png" alt="card" className="w-10" />
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="py-5 flex flex-col sm:flex-row justify-between items-center border-t border-[#F3F4F6] text-center sm:text-left gap-3">
            <p className="text-sm">© Copyright 2025 - TailGrids.</p>
            <span className="text-[#6b7280] space-x-4 text-sm">
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
