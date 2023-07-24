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
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
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
