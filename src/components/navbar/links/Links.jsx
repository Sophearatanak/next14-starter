"use client"
import React, { useState } from "react";
import Link from "next/link";
import "./link.scss"
import NavLink from "../navLink/NavLink";

const Links = () => {

  const links = [
    {
      title: "Home Page",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    // {
    //     title: "Home Page",
    //     path: "/",
    // },
    // {
    //     title: "Home Page",
    //     path: "/",
    // },
  ]

  const [open, setOpen] = useState(false);

  // TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <div className="link-container">
      {links.map((link) => {
        return (
          <NavLink item={link} key={link?.title} />
        )
      })}
    </div>
  );
};

export default Links;
