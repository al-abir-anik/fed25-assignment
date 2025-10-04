import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    <FaFacebook />,
    <RiTwitterXFill />,
    <RiInstagramFill />,
    <FaLinkedin />,
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
    "Hills shoed",
    "Running Shoes",
    "Sandals",
    "Ballet Pumps",
    "Slingback",
    "Sale",
  ];

  return (
    <footer className="w-full bg-[#f3f4f6]">
      {/* upper footer */}
      <div className="container mx-auto py-28 px-8 flex justify-between">
        {/* 1 */}
        <div className="">
          <div className="space-y-7">
            <Image src="/logo.png" alt="logo" width={120} height={28} />
            <p className="text-[#6b7280]">
              TailGrids comes with all the essential UI components you need to
              create beautiful websites based on Tailwind CSS.
            </p>
          </div>
          <div>
            <p className="text-[#6b7280]">Follow us on</p>
            <span className="space-x-2">
              {socialLinks.map((link, index) => (
                <button
                  key={index}
                  className="text-2xl text-customBlack/30 hover:text-customBlack/90 "
                >
                  {link}
                </button>
              ))}
            </span>
          </div>
        </div>

        {/* 2 */}
        <div>
          <h2 className="text-xl font-semibold">Clothing</h2>
          <ul>
            {clothing.map((link) => (
              <li>{link}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* lower footer */}
      <div></div>
    </footer>
  );
};

export default Footer;
