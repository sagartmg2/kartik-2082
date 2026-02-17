"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <ul className="flex gap-2">
      <li>
        <Link href={"/"}> Home </Link>
      </li>
      <li>
        <Link href={"/products"}> Products </Link>
      </li>
      <li>
        <Link href={"/auth/login"}> login </Link>
      </li>
    </ul>
  );
}

export default Header;
