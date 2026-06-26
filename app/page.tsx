import { PageShell } from "@/components/site/PageShell";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { VisionMission } from "@/components/site/VisionMission";
import { Experiences } from "@/components/site/Experiences";
import { Theme } from "@/components/site/Theme";
import { Attend } from "@/components/site/Attend";
import { GuestMinisters } from "@/components/site/GuestMinisters";
import { CTA } from "@/components/site/CTA";
// import ExperienceSection from "@/components/site/ExperienceSection";

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      {/* <ExperienceSection /> */}
      <About />
      <VisionMission />
      <Experiences />
      <Theme />
      <Attend />
      <GuestMinisters />
    </PageShell>
  );
}
