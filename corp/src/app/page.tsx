import homeImg from "/public/home.jpg";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <Hero imgData={homeImg} alt="Car Factory" title="Professional Cloud Hosting" />
  );
}
