import { FeaturedWorkSection } from "@/components/home/FeaturedWorkSection";
import { HeroSection } from "@/components/home/HeroSection";
import { MediaSection } from "@/components/home/MediaSection";
import { ServicesSection } from "@/components/home/ServicesSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturedWorkSection />
      <MediaSection />
    </>
  );
}
