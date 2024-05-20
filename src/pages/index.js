import HeroPage from "@/components/Hero";
import Resume from "@/components/Resume";


export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroPage/>
      <Resume/>
    </div>
  );
}
