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
      <div className="w-full md:w-1/3 flex-1 flex justify-start items-center gap-3 py-2 px-4 border-gray-600/20">
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
    <div className="w-full max-w-5xl text-primary my-10">
      <div className="flex w-full max-w-sm rounded-t-md overflow-hidden">
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
      <div className="flex flex-col md:flex-row bg-white/[85%] rounded-b-md rounded-tr-md overflow-hidden drop-shadow-md">
        <div className="flex-1 flex-wrap flex py-2 px-4 divide-y-[1px] divide-gray-400/60 md:divide-x-[1px] md:divide-y-0">
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
        <div className="bg-primary text-white px-5 py-3 justify-center flex items-center font-semibold cursor-pointer">
          <Link href="/explore">Cari</Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
