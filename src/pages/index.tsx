import {
  AboutView,
  Footer,
  GradientTransition,
  LandingView,
  LinksView,
  MembersView,
  MenuView,
} from "@/components";

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center overflow-x-hidden">
      <LandingView />
      <AboutView />
      <MembersView />
      <MenuView />
      <LinksView />
      <GradientTransition />
      <Footer />
    </div>
  );
}
