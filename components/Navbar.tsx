"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathName = usePathname();
  const [isTop, setIsTop] = useState(true);

  const handleScroll = () => {
    setIsTop(window.scrollY < 5);
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
      link: "/404",
    },
    {
      label: "LetsCommunity",
      link: "/404",
    },
    {
      label: "Tentang",
      link: "/404",
    },
  ];
  return (
    <div
      className={`fixed top-0 inset-x-0 ${
        isTop
          ? "bg-transparent"
          : "bg-gradient-to-r from-primary to-[170%] to-secondary"
      } py-4 z-40 transition duration-400`}
    >
      <div className="w-full h-full flex justify-between items-center px-[5%]">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src="/logo/Logo.svg" alt="Logo" width={30} height={30} />
            <p className="font-semibold text-lg text-white">LetsGOR</p>
          </div>
        </Link>
        <div className="flex gap-7 items-center">
          {navbarData.map((item) => {
            return (
              <Link href={item.link} key={item.label}>
                <p
                  className={`text-white cursor-pointer ${
                    pathName === item.link && "font-semibold"
                  }`}
                >
                  {item.label}
                </p>
              </Link>
            );
          })}
          <div className="px-7 py-2 bg-white text-primary font-bold cursor-pointer">
            MASUK
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
