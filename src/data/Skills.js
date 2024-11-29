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
    icon : React.createElement(FaHtml5, {color : 'purple', size : "4vw"})
  },
  {
    name: 'CSS3',
    level: 90,
    icon: React.createElement(IoLogoCss3, { color: 'purple', size: '4vw' }),
  },
  {
    name: 'JavaScript/ES6',
    level: 70,
    icon: React.createElement(IoLogoJavascript, { color: 'purple', size: '4vw' }),
  },
  {
    name: 'ReactJS',
    level: 50,
    icon: React.createElement(FaReact, { color: 'purple', size: '4vw' }),
  },
  {
    name: 'Framer Motion',
    level: 50,
    icon: React.createElement(PiFramerLogoFill, { color: 'purple', size: '4vw' }),
  },
  {
    name: 'Java',
    level: 40,
    icon: React.createElement(FaJava, { color: 'purple', size: '4vw' }),
  },
  {
    name: 'Python',
    level: 40,
    icon: React.createElement(FaPython, { color: 'purple', size: '4vw' }),
  },
  {
    name : 'C',
    level : 40
  }
]

export default skills;