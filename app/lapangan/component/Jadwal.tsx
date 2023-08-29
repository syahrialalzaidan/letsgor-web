import Image from "next/image";
import Jam from "./Jam";

interface JadwalProps {
  name: string;
  setBookdata: React.Dispatch<
    React.SetStateAction<
      {
        lapangan: string;
        jam: string;
      }[]
    >
  >;
}

export default function Jadwal(props: JadwalProps) {
  const data = [
    {
      jam: "08.00",
      full: true,
    },
    {
      jam: "09.00",
      full: false,
    },
    {
      jam: "10.00",
      full: true,
    },
    {
      jam: "11.00",
      full: true,
    },
    {
      jam: "12.00",
      full: false,
    },
    {
      jam: "13.00",
      full: false,
    },
    {
      jam: "14.00",
      full: false,
    },
    {
      jam: "15.00",
      full: false,
    },
    {
      jam: "16.00",
      full: false,
    },
    {
      jam: "17.00",
      full: true,
    },
    {
      jam: "18.00",
      full: true,
    },
    {
      jam: "19.00",
      full: true,
    },
    {
      jam: "20.00",
      full: false,
    },
    {
      jam: "21.00",
      full: false,
    },
  ];

  
  return (
    <div className="bg-[#FEFEFE] rounded-2xl shadow-xl">
      <Image
        src="/lapangan/basket-wide.svg"
        width={1000}
        height={500}
        className="w-full object-cover mb-8"
        alt="basket"
      />
      <div className="px-14 pb-28">
        <div className="flex justify-between">
          <p className="text-2xl font-bold mb-7">{props.name}</p>
          <p className="text-2xl font-bold text-[#9F9F9F]">Rp. 50.000</p>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {data.map((jam, index) => (
            <Jam key={index} name={props.name} jam={jam.jam} full={jam.full} setBookdata={props.setBookdata} />
          ))}
        </div>
      </div>
    </div>
  );
}
