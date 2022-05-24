import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../Images/logo.png";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <ReactNavbar
      navColor1="white"
      navColor2="hsl(219, 48%, 8%)"
      burgerColor="hsl(250, 100%, 75%)"
      burgerColorHover="hsl(250, 100%, 75%)"
      logo={logo}
      logoWidth="250px"
      logoHoverColor="hsl(250, 100%, 75%)"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="Home"
      link2Text="About"
      link3Text="Projects"
      link4Text="Contact"
      link1Url="/"
      link2Url="/about"
      link3Url="/projects"
      link4Url="/contact"
      link1ColorHover="white"
      link1Color="HSL(250, 100%, 75%)"
      link1Size="1.5rem"
      link1Padding="3vmax"
      profileIcon={true}
      ProfileIconElement={FaUserAlt}
      profileIconColor="HSL(250, 100%, 75%)"
      profileIconColorHover="white"
      nav1Transition= "0.4"
      nav2Transition= "0.4"
      nav3Transition= "0.4"
      nav4Transition= "0.4"
      logoTransition= "0.4"
      link1Transition= "0.4"
      link2Transition= "0.4"
      link3Transition= "0.4"
      link4Transition= "0.4"
      link1AnimationTime= "0.4"
      link2AnimationTime= "0.4"
      link3AnimationTime= "0.4"
      link4AnimationTime= "0.4"
      profileIconAnimationTime= "0.4"
    />
  );
};

export default Header;
