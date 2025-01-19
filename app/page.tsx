import Gallery from "@/sections/Gallery";
import Hero from "@/sections/Hero";
import {MemoryTimeline} from "@/sections/MemoryTimeline";
import SpecialMessage from "@/sections/SpecialMessage";

export default function Home() {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <MemoryTimeline/>
      </section>
      <section>
        <SpecialMessage />
      </section>
      <section>
        <Gallery/>
      </section>
    </div>
  );
}
