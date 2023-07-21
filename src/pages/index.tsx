import { AboutView, Footer, LandingView, MembersView } from "@/components";

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center overflow-x-hidden">
      <LandingView />
      <AboutView />
      <MembersView />
      <Footer />
    </div>
  );
}
