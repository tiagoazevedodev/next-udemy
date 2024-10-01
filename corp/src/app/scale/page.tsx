import scaleImg from "/public/scale.jpg";
import Hero from "@/components/hero";

export default function ScalePage() {
  return (
    <Hero imgData={scaleImg} alt="steel Factory" title="Scale your app to infinity" />
  );
}
