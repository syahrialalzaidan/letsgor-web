"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const pathName = usePathname();
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    setIsTop(window.scrollY < 5);
  };

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarData = [
    {
      label: "Beranda",
      link: "/",
    },
    {
      label: "LetsGOR",
      link: "/explore",
    },
    {
      label: "LetsHealthy",
      link: "/soon",
    },
    {
      label: "LetsCommunity",
      link: "/soon",
    },
    {
      label: "Tentang",
      link: "/soon",
    },
  ];
  return (
    <div
      className={`fixed top-0 inset-x-0 ${
        isTop
          ? "bg-transparent"
          : "bg-gradient-to-r from-primary to-[170%] to-secondary"
      } py-4 z-40 transition-colors duration-500`}
    >
      <div className="w-full h-full flex justify-between items-center px-[5%]">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src="/logo/Logo.svg" alt="Logo" width={30} height={30} />
            <p className="font-semibold text-lg text-white">LetsGOR</p>
          </div>
        </Link>
        <div className="hidden md:flex gap-7 items-center">
          {navbarData.map((item) => {
            return (
              <Link href={item.link} key={item.label}>
                <p
                  className={`text-white cursor-pointer hover:underline ${
                    pathName === item.link && "font-semibold"
                  }`}
                >
                  {item.label}
                </p>
              </Link>
            );
          })}
          <div className="px-7 py-2 bg-white text-primary font-bold cursor-pointer transition-colors duration-500 hover:bg-primary hover:text-white">
            MASUK
          </div>
        </div>
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={handleOpen}
        >
          <HiMenu size={30} />
        </div>
        <div
          className={`absolute w-screen h-screen top-0 left-full bg-white ${
            isOpen ? "-translate-x-full" : "translate-x-0"
          } transition`}
        >
          <div className="px-[7%] py-7 w-full h-full">
            <div>
              <IoCloseSharp
                size={30}
                className="text-black cursor-pointer ml-auto"
                onClick={handleOpen}
              />
            </div>
            <div className="flex flex-col gap-3 text-xl my-7">
              {navbarData.map((item) => (
                <Link href={item.link} key={item.label} onClick={handleOpen}>
                  <p className="hover:underline">{item.label}</p>
                </Link>
              ))}
              <div className="px-7 py-2 bg-primary text-white font-bold cursor-pointer transition-colors duration-500 w-[150px] text-center mt-5 hover:underline">
                MASUK
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
