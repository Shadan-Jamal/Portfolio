import React from "react"
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const contact = [
    {
        icon: React.createElement(CiLinkedin, { className : "text-white text-[10vw] md:text-[3rem]" }),
        link: "https://www.linkedin.com/in/shadan-jamal-99696824b/",
    },
    {
        icon: React.createElement(CiInstagram, { className : "text-white text-[10vw] md:text-[3rem]" }),
        link: "https://www.instagram.com/bca_coffee_waale/",
    },
    {
        icon: React.createElement(FaGithub, { className : "text-white text-[10vw] md:text-[3rem]" }),
        link : "https://github.com/Shadan-Jamal"
    },
    {
        icon: React.createElement(CiFacebook, { className : "text-white text-[10vw] md:text-[3rem]" }),
        link: "https://www.facebook.com/shadan.jamal.395",
    },
    {
        icon: React.createElement(MdEmail, { className : "text-white text-[10vw] md:text-[3rem]" }),
        link : "mailto:shadowfrost1470@example.com",
    },
];

export default contact;