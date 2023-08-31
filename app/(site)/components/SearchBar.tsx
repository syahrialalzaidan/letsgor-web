"use client";

import { BiMap, BiBasketball } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { IconType } from "react-icons";
import { useState } from "react";
import Link from "next/link";

const SearchBar = () => {
  const [isLapangan, setIsLapangan] = useState(true);

  const InputElement = ({
    placeholder,
    icon: Icon,
  }: {
    placeholder: string;
    icon: IconType;
  }) => {
    return (
      <div className="flex-1 flex justify-start items-center gap-3 py-2 px-4 border-r-2 border-gray-600/20">
        <Icon size={22} />
        <input
          type="text"
          placeholder={placeholder}
          className="bg-transparent placeholder:text-primary focus:outline-none focus:placeholder:text-transparent"
        />
      </div>
    );
  };
  return (
    <div className="w-10/12 text-primary my-10">
      <div className="flex w-1/4 rounded-t-md overflow-hidden">
        <div
          className={`py-2 flex-1 cursor-pointer ${
            isLapangan ? "bg-white/[85%]" : "bg-white/[50%]"
          } transition`}
          onClick={() => setIsLapangan(true)}
        >
          Lapangan
        </div>
        <div
          className={`py-2 flex-1 cursor-pointer ${
            isLapangan ? "bg-white/[50%]" : "bg-white/[85%]"
          } transition`}
          onClick={() => setIsLapangan(false)}
        >
          Partner
        </div>
      </div>
      <div className="flex bg-white/[85%] rounded-b-md rounded-tr-md overflow-hidden drop-shadow-md">
        <div className="flex-1 flex py-2">
          {isLapangan ? (
            <>
              <InputElement placeholder="Nama Lapangan" icon={BiMap} />
              <InputElement placeholder="Tanggal" icon={AiOutlineCalendar} />
              <InputElement placeholder="Olahraga" icon={BiBasketball} />
            </>
          ) : (
            <>
              <InputElement placeholder="Lokasi" icon={BiMap} />
              <InputElement placeholder="Olahraga" icon={BiBasketball} />
            </>
          )}
        </div>
        <div className="bg-primary text-white px-5 flex items-center font-semibold cursor-pointer">
          <Link href="/explore">Cari</Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
