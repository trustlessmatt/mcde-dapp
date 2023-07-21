import dynamic from "next/dynamic";

// @icons
const Discord = dynamic(() => import("./@icons/Discord"));
const OpenSea = dynamic(() => import("./@icons/OpenSea"));
const Twitter = dynamic(() => import("./@icons/Twitter"));

// atoms
const Button = dynamic(() => import("./atoms/Button"));
const MemberCard = dynamic(() => import("./atoms/MemberCard"));
const SeasonSelector = dynamic(() => import("./atoms/SeasonSelector"));
const TLDR = dynamic(() => import("./atoms/TLDR"));
const TraitCard = dynamic(() => import("./atoms/TraitCard"));

// molecules
const Nav = dynamic(() => import("./molecules/Nav"));

// organisms
const Members = dynamic(() => import("./organisms/Members"));

// templates
const AboutView = dynamic(() => import("./templates/AboutView"));
const LandingView = dynamic(() => import("./templates/LandingView"));
const MembersView = dynamic(() => import("./templates/MembersView"));

export {
  // @icons
  Discord,
  OpenSea,
  Twitter,
  // atoms
  Button,
  MemberCard,
  SeasonSelector,
  TLDR,
  TraitCard,
  // molecules
  Nav,
  // organisms
  Members,
  // templates
  AboutView,
  LandingView,
  MembersView,
};
