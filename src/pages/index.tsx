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
  PageHead,
} from "@/components";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <PageHead
        title="Mickey DeGods"
        description="The original DeGods sub-community."
        url="https://mickeydegods.com/"
        twitter="MickeyDeGods"
      />
      <LandingView />
      <AboutView />
      <MembersView />
      <MenuView />
      <LinksView />
      {/* <GradientTransition /> */}
      <CollabsView />
      {/* <WalkInCooler /> */}
      <Footer />
    </div>
  );
}
