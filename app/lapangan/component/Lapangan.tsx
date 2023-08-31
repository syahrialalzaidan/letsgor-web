"use client";
import { AiOutlineLeft } from "react-icons/ai";
import Jadwal from "./Jadwal";
import Bookdetails from "./Bookdetails";
import { useState } from "react";
import Cookies from "universal-cookie";
import Link from "next/link";

export default function Lapangan() {
  const cookies = new Cookies();

  const [bookdata, setBookdata] = useState([
    {
      lapangan: "",
      jam: "",
    },
  ]);
  console.log(bookdata);

  return (
    <div>
      <div className="flex items-center gap-6 mb-10">
        <Link href="/detail">
          <AiOutlineLeft className="lg:text-5xl text-lg font-bold" />
        </Link>
        <div>
          <p className="font-bold text-lg lg:text-xl">GOR Cisitu 55</p>
          <p>7 Juni 2023</p>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <Jadwal name="Lapangan 1" setBookdata={setBookdata} />
        <Jadwal name="Lapangan 2" setBookdata={setBookdata} />
      </div>

      {bookdata.length > 1 && <Bookdetails details={bookdata} />}
    </div>
  );
}
