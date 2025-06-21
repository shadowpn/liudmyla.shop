import HeroSection from "@/components/HeroSection/HeroSection";
import MiniProductCard from '@/components/ProductCard/MiniProductCard';
//import HeroSection from "@/components/HeroSection";
//import AboutSection from "@/components/AboutSection";
//import ProductGrid from "@/components/ProductGrid";
import "@/styles/globals.css";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
      <MiniProductCard />
      </div>
    </>
    
  );
}