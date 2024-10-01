import performanceImg from "/public/performance.jpg";
import Hero from "@/components/hero";

export default function PerformancePage() {
  return (
    <Hero imgData={performanceImg} alt="Welding Process" title="We serve high performance applications" />
  );
}
