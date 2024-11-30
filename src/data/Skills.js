import React from "react"
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { PiFramerLogoFill } from "react-icons/pi";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

const skills = [
  {
    name : 'HTML5',
    level : 90,
    icon : React.createElement(FaHtml5, {className : "text-purple-500 text-[12vw] md:text-[5vw]"})
  },
  {
    name: 'CSS3',
    level: 90,
    icon: React.createElement(IoLogoCss3, { className : "text-purple-500 text-[12vw] md:text-[5vw]"}),
  },
  {
    name: 'JavaScript/ES6',
    level: 70,
    icon: React.createElement(IoLogoJavascript, { className : "text-purple-500 text-[12vw] md:text-[5vw]"}),
  },
  {
    name: 'ReactJS',
    level: 50,
    icon: React.createElement(FaReact, { className : "text-purple-500 text-[12vw] md:text-[5vw]"}),
  },
  {
    name: 'Framer Motion',
    level: 50,
    icon: React.createElement(PiFramerLogoFill, { className : "text-purple-500 text-[12vw] md:text-[5vw]"}),
  },
  {
    name: 'Java',
    level: 40,
    icon: React.createElement(FaJava, { className : "text-purple-500 text-[12vw] md:text-[5vw]"}),
  },
  {
    name: 'Python',
    level: 40,
    icon: React.createElement(FaPython, { className : "text-purple-500 text-[12vw] md:text-[5vw]"}),
  },
  {
    name : 'C',
    level : 40
  }
]

export default skills;