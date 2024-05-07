import React from "react";
import Link from "next/link";

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
  return (
    <div>
        {links.map((link,index)=>(
            <Link href={link.path} key={index}>{link.title}</Link>
        ))}
    </div>
  );
};

export default Links;
