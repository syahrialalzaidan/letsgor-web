"use client";
import { useState } from "react";
import Cookies from "universal-cookie";

interface JamProps {
  name: string;
  jam: string;
  full: boolean;
  setBookdata: React.Dispatch<
    React.SetStateAction<
      {
        lapangan: string;
        jam: string;
      }[]
    >
  >;
}

export default function Jam(props: JamProps) {
  const cookies = new Cookies();

  const [selected, setSelected] = useState(false);
  function handleclick() {
    if (props.full) {
      //do nothing
    } else {
      setSelected(!selected);
        if (selected) {
            props.setBookdata((prev) => {
                return prev.filter((item) => item.jam !== props.jam);
            });
        } else {
            props.setBookdata((prev) => {
                return [...prev, { lapangan: props.name, jam: props.jam }];
            });
        }
    }
  }

  return (
    <div
      className={`cursor-pointer py-3 px-16 border border-gray-200 w-44 flex font-bold justify-center ${
        props.full
          ? "bg-[#D9D9D9] text-white border-none"
          : selected
          ? "bg-[#0E8A76] text-white border-none"
          : "bg-white border-[#9F9F9F]"
      } items-center rounded-lg`}
      onClick={handleclick}
    >
      {props.jam}
    </div>
  );
}
