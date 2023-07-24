import dynamic from "next/dynamic";

// @icons
const Discord = dynamic(() => import("./@icons/Discord"));
const DiscordFooter = dynamic(() => import("./@icons/DiscordFooter"));
const OpenSea = dynamic(() => import("./@icons/OpenSea"));
const Twitter = dynamic(() => import("./@icons/Twitter"));
const TwitterFooter = dynamic(() => import("./@icons/TwitterFooter"));

// atoms
const Button = dynamic(() => import("./atoms/Button"));
const GradientTransition = dynamic(() => import("./atoms/GradientTransition"));
const MemberCard = dynamic(() => import("./atoms/MemberCard"));
const MovingText = dynamic(() => import("./atoms/MovingText"));
const SeasonSelector = dynamic(() => import("./atoms/SeasonSelector"));
const TLDR = dynamic(() => import("./atoms/TLDR"));
const TraitCard = dynamic(() => import("./atoms/TraitCard"));

// molecules
const Footer = dynamic(() => import("./molecules/Footer"));
const LinkItem = dynamic(() => import("./molecules/LinkItem"));
const MEButton = dynamic(() => import("./molecules/MEButton"));
const MenuItem = dynamic(() => import("./molecules/MenuItem"));
const Nav = dynamic(() => import("./molecules/Nav"));
const Partner = dynamic(() => import("./molecules/Partner"));

// organisms
const Members = dynamic(() => import("./organisms/Members"));
const MenuItems = dynamic(() => import("./organisms/MenuItems"));
const Partners = dynamic(() => import("./organisms/Partners"));
const StakeCTA = dynamic(() => import("./organisms/StakeCTA"));

// templates
const AboutView = dynamic(() => import("./templates/AboutView"));
const LandingView = dynamic(() => import("./templates/LandingView"));
const LinksView = dynamic(() => import("./templates/LinksView"));
const MembersView = dynamic(() => import("./templates/MembersView"));
const MenuView = dynamic(() => import("./templates/MenuView"));
const WalkInCooler = dynamic(() => import("./templates/WalkInCooler"));

export {
  // @icons
  Discord,
  DiscordFooter,
  OpenSea,
  Twitter,
  TwitterFooter,
  // atoms
  Button,
  GradientTransition,
  MemberCard,
  MovingText,
  SeasonSelector,
  TLDR,
  TraitCard,
  // molecules
  Footer,
  LinkItem,
  MEButton,
  MenuItem,
  Nav,
  Partner,
  // organisms
  Members,
  MenuItems,
  Partners,
  StakeCTA,
  // templates
  AboutView,
  LandingView,
  LinksView,
  MembersView,
  MenuView,
  WalkInCooler,
};
