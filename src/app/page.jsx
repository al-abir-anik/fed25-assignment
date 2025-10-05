import BestSellers from "@/components/home/BestSellers";
import CategoryShop from "@/components/home/CategoryShop";
import HeroSection from "@/components/home/HeroSection";
import ShopNow from "@/components/home/ShopNow";
import Testimonial from "@/components/home/Testimonial";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <CategoryShop />
      <BestSellers />
      <Testimonial />
      <ShopNow />
    </div>
  );
}
