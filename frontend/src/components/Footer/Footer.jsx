import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Stephen Bunty Gomes. I am a Full-Stack Developer and I work with MERN Stack Technologies.
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/stevenBuntyGomes/" target="black">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/steven_into_multiverse/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/steven-gomes-848823238/" target="black">
          <BsLinkedin />
        </a>
        <a href="https://www.facebook.com/buntys.gomes/" target="black">
          <BsFacebook />
        </a>
      </div>
    </div>
  );
};

export default Footer;
