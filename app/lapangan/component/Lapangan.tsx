"use client";
import { AiOutlineLeft } from "react-icons/ai";
import Jadwal from "./Jadwal";
import Bookdetails from "./Bookdetails";
import { useState } from "react";
import Cookies from "universal-cookie";

export default function Lapangan() {
    const cookies = new Cookies();

    const [bookdata, setBookdata] = useState([{
        lapangan: "",
        jam: "",
    }]);
    console.log(bookdata)


  return (
    <div>
      <div className="flex items-center gap-6 mb-10">
        <AiOutlineLeft className="text-5xl font-bold" />
        <div>
          <p className="font-bold text-xl">GOR Cisitu 55</p>
          <p>7 Juni 2023</p>
        </div>
      </div>

      <Jadwal name="Lapangan 1" setBookdata={setBookdata} />
      <Jadwal name="Lapangan 2" setBookdata={setBookdata} />

    {bookdata.length > 1 && <Bookdetails details={bookdata} />}
      
    </div>
  );
}
