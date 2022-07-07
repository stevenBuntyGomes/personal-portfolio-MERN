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
          Hey, my name is Stephen Gomes. I am a Full-Stack Developer and I work with MERN Stack Technologies.
          Contact Me: 
          Email: stevengomesfreelancer23@gmail.com 
          Social Media Links are given in the right side.
          Thank You.
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://www.instagram.com/steven_into_multiverse/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/stephen-gomes-848823238/" target="black">
          <BsLinkedin />
        </a>
        <a href="https://www.facebook.com/buntys.gomes/" target="black">
          <BsFacebook />
        </a>

        <a href="https://github.com/stevenBuntyGomes/" target="black">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
