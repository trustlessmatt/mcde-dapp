import {
  AboutView,
  Footer,
  GradientTransition,
  LandingView,
  LinksView,
  MembersView,
  MenuView,
  CollabsView,
  WalkInCooler,
} from "@/components";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <LandingView />
      <AboutView />
      <MembersView />
      <MenuView />
      <LinksView />
      <GradientTransition />
      <CollabsView />
      <WalkInCooler />
      <Footer />
    </div>
  );
}
