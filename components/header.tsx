"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();

  const navLinks = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Posts",
      link: "/post",
    },
    {
      label: "Create Post",
      link: "/create-post",
    },
  ] as const;
  return (
    <header
      className="flex justify-between py-4 px-7 
    items-center border-b border-gray-200 bg-white shadow-md"
    >
      <Link href="/">
        <Image
          src="https://bytegrad.com/course-assets/youtube/example-logo.png"
          alt="logo"
          className="width-35 height-35"
          width={35}
          height={35}
        />
      </Link>
      <nav className="">
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <Link
                className={` hover:text-blue-900 ${
                  pathName === navLink.link ? "text-zinc-900" : "text-zinc-400"
                }`}
                href={navLink.link}
              >
                {navLink.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
