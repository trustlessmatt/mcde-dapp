import dynamic from "next/dynamic";

// @icons
const Discord = dynamic(() => import("./@icons/Discord"));
const OpenSea = dynamic(() => import("./@icons/OpenSea"));
const Twitter = dynamic(() => import("./@icons/Twitter"));

// atoms
const Button = dynamic(() => import("./atoms/Button"));
const TLDR = dynamic(() => import("./atoms/TLDR"));
const TraitCard = dynamic(() => import("./atoms/TraitCard"));
const SeasonSelector = dynamic(() => import("./atoms/SeasonSelector"));

// molecules
const Nav = dynamic(() => import("./molecules/Nav"));

// templates
const AboutView = dynamic(() => import("./templates/AboutView"));
const LandingView = dynamic(() => import("./templates/LandingView"));

export {
  // @icons
  Discord,
  OpenSea,
  Twitter,
  // atoms
  Button,
  TLDR,
  TraitCard,
  SeasonSelector,
  // molecules
  Nav,
  // templates
  AboutView,
  LandingView,
};
