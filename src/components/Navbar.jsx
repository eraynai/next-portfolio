"use client";
import NavLink from "./Navlink";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import MenuOverlay from "./MenuOverlay";
import { SunIcon } from "./Icon";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  return (
    <div className="w-full p-4 px-10 flex items-center justify-between border border-[#33353f] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 fixed">
      <Link
        className="text-lg md:text-5xl border border-purple-900 p-4 text-white font-semibold"
        href={"/"}
      >
        ELLI RAYNAI
      </Link>
      <nav className="w-max py-3 px-8 rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-gray backdrop-blur-sm">
        <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
        <button className="px-4">
          <SunIcon />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
