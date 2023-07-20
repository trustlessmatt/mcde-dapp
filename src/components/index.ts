import dynamic from "next/dynamic";

// @icons
const Discord = dynamic(() => import("./@icons/Discord"));
const Twitter = dynamic(() => import("./@icons/Twitter"));

// atoms
const TLDR = dynamic(() => import("./atoms/TLDR"));
const TraitCard = dynamic(() => import("./atoms/TraitCard"));

// molecules
const Nav = dynamic(() => import("./molecules/Nav"));

// templates
const AboutView = dynamic(() => import("./templates/AboutView"));
const LandingView = dynamic(() => import("./templates/LandingView"));

export {
  // @icons
  Discord,
  Twitter,
  // atoms
  TLDR,
  TraitCard,
  // molecules
  Nav,
  // templates
  AboutView,
  LandingView,
};
