"use client"

import React from "react";
import Link from "next/link";
import "./navlink.scss";
import { usePathname } from "next/navigation";

const navLink = ({ item }) => {

  const pathName = usePathname();

  return (
    <Link href={item?.path}
      className={pathName === item?.path ? "active" : "in-active"}
    >
      {item?.title}
    </Link>
  );
};

export default navLink;
