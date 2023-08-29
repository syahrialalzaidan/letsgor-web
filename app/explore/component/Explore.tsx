"use client";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { BsCalendarDateFill } from "react-icons/bs";
import { BiSolidBasketball } from "react-icons/bi";
import Boxgor from "./Boxgor";
import { useRouter } from "next/navigation";

export default function Explore() {
  const router = useRouter();
  const data = [
    {
      name: "Pasaga",
      address: "Jl. Cisitu",
      distance: "3.0 Km",
      rating: "4.5/5.0",
      price: "65 rb",
      image: "/explore/basket.svg",
    },
    {
      name: "Saraga",
      address: "Jl. Cisitu",
      distance: "3.0 Km",
      rating: "4.5/5.0",
      price: "65 rb",
      image: "/explore/saraga.svg",
    },
    {
      name: "Taman Sport",
      address: "Jl. Cisitu",
      distance: "3.0 Km",
      rating: "4.5/5.0",
      price: "65 rb",
      image: "/explore/tamansport.svg",
    },
    {
      name: "Gor Cisitu",
      address: "Jl. Cisitu",
      distance: "3.0 Km",
      rating: "4.5/5.0",
      price: "65 rb",
      image: "/explore/gor cisitu.svg",
    },
    {
      name: "Gor PDAM",
      address: "Jl. Plesiran",
      distance: "3.0 Km",
      rating: "4.5/5.0",
      price: "65 rb",
      image: "/explore/gor pdam.svg",
    },
    {
      name: "OBC Sport Center",
      address: "Jl. Cimbel",
      distance: "3.0 Km",
      rating: "4.5/5.0",
      price: "65 rb",
      image: "/explore/obc.svg",
    },
  ];

  return (
    <div className="">
      <div className="bg-[url('/explore/atas.svg')] flex flex-col justify-center items-center gap-8 bg-cover h-72 w-full pt-20">
        <div className="text-white">
          <h1 className="font-semibold text-4xl">Temukan Lapangan Pilihanmu</h1>
          <p className="text-lg">
            Sekarang Anda dapat menemukan lapangan yang sesuai untukmu
          </p>
        </div>

        <div className="flex gap-3">
          <div className="flex">
            {/* <div className="bg-white text-[#0E8A76] flex w-72 p-3 gap-2 rounded-lg">
                        <IoLocationOutline className="text-2xl" />
                        <p>Nama Lapangan</p>
                    </div> */}
            <IoLocationOutline className="ml-2 text-2xl text-[#0E8A76] absolute self-center" />
            <input
              className="bg-white text-[#0E8A76] flex w-72 py-3 px-10 gap-2 rounded-lg placeholder-[#0E8A76]"
              type="text"
              placeholder="Nama Lapangan"
            />
          </div>

          <div className="flex">
            {/* <div className="bg-white text-[#0E8A76] flex w-72 p-3 gap-2 rounded-lg">
                        <IoLocationOutline className="text-2xl" />
                        <p>Nama Lapangan</p>
                    </div> */}
            <BsCalendarDateFill className="ml-2 text-2xl text-[#0E8A76] absolute self-center" />
            {/* <label className="absolute self-center text-[#0E8A76] ml-10">
              Tanggal
            </label> */}
            <input
              className="bg-white text-[#0E8A76] flex w-72 py-3 pl-10 pr-2 gap-2 rounded-lg"
              type="date"
            />
          </div>

          <div className="flex">
            {/* <div className="bg-white text-[#0E8A76] flex w-72 p-3 gap-2 rounded-lg">
                        <IoLocationOutline className="text-2xl" />
                        <p>Nama Lapangan</p>
                    </div> */}
            <BiSolidBasketball className="ml-2 text-2xl text-[#0E8A76] absolute self-center" />
            {/* <label className="absolute self-center text-[#0E8A76] ml-10">
              Olahraga
            </label> */}
            <select
              className="bg-white text-[#0E8A76] flex w-72 py-3 px-10 gap-2 rounded-lg"
              placeholder="Tanggal"
            >
              <option value="basket">Basket</option>
              <option value="futsal">Futsal</option>
              <option value="badminton">Badminton</option>
              <option value="tennis">Tennis</option>
              <option value="voli">Volley</option>
              <option value="pingpong">Pingpong</option>
              <option value="others">others</option>

              


        
              </select>
          </div>

          <button className="bg-[#0E8A76] text-white py-3 px-10 rounded-lg" onClick={()=> router.push("/explore/search")}>
            Cari
          </button>
        </div>
      </div>

      <div className="px-28">
        <h1 className="text-2xl font-semibold mt-8 mb-4">Last Seen</h1>
        <div className="flex gap-12 flex-wrap justify-center mb-9">
          {data.slice(0, 3).map((place, index) => (
            <Boxgor
              key={index}
              name={place.name}
              address={place.address}
              distance={place.distance}
              rating={place.rating}
              price={place.price}
              image={place.image}
            />
          ))}
        </div>

        <h1 className="font-bold text-5xl text-center text-[#0E8A76]">
          Rekomendasi Lapangan UntukMu
        </h1>
        <div className="flex flex-wrap gap-12 justify-center mt-12">
          {data.slice(3, 6).map((place, index) => (
            <Boxgor
              key={index}
              name={place.name}
              address={place.address}
              distance={place.distance}
              rating={place.rating}
              price={place.price}
              image={place.image}
            />
          ))}
          {data.map((place, index) => (
            <Boxgor
              key={index}
              name={place.name}
              address={place.address}
              distance={place.distance}
              rating={place.rating}
              price={place.price}
              image={place.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
