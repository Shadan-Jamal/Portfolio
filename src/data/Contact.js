import React from "react"
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { RiDiscordLine } from "react-icons/ri";

const contact = [
    {
        icon: React.createElement(CiLinkedin, { size: "3rem", color: "white" }),
        link: "https://www.linkedin.com/in/shadan-jamal-99696824b/",
    },
    {
        icon: React.createElement(CiInstagram, { size: "3rem", color: "white" }),
        link: "https://www.instagram.com/bca_coffee_waale/",
    },
    {
        icon: React.createElement(FaGithub, { size: "3rem", color: "white" }),
        link : "https://github.com/Shadan-Jamal"
    },
    {
        icon: React.createElement(CiFacebook, { size: "3rem", color: "white" }),
        link: "https://www.facebook.com/shadan.jamal.395",
    },
    {
        icon: React.createElement(MdEmail, { size: "3rem", color: "white" }),
        link : "mailto:shadowfrost1470@example.com",
        onclick: () => console.log("clicked")
    },
    {
        icon: React.createElement(FaWhatsapp, { size: "3rem", color: "white" }),
        link : "",
        onclick: () => console.log("clicked")
    },
];

export default contact;