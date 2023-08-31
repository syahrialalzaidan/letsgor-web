import { IoLocationOutline } from "react-icons/io5";
import { BsCalendarDateFill } from "react-icons/bs";
import { BiSolidBasketball } from "react-icons/bi";
import { FaFilter, FaSort } from "react-icons/fa";
import Boxgor from "@/app/explore/component/Boxgor";

export default function Search() {
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
    <div>
      <div className="pt-20 flex flex-col justify-center items-center py-8 bg-[url('/search/atas-search.svg')] lg:h-52 bg-cover w-full">
      <div className="flex flex-col lg:flex-row gap-3">
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

          <button className="bg-[#0E8A76] text-white py-3 px-10 rounded-lg">
            Cari
          </button>
        </div>
      </div>

      <div className="lg:px-20 px-4 mt-5">
        <div className="flex justify-start flex-row gap-6">
          <div className="flex">
            <FaFilter className="ml-2 text-lg lg:text-2xl text-[#0E8A76] absolute self-center" />
            <select
              className="bg-[#D0E3E0] text-[#0E8A76] flex w-32 lg:w-40 py-3 px-7 lg:px-10 gap-2 rounded-lg"
              placeholder="Tanggal"
            >
              <option value="basket">Basket</option>
              <option value="futsal">Futsal</option>
              <option value="badminton">Badminton</option>
            </select>
          </div>

          <div className="flex">
            <FaSort className="ml-2 text-lg lg:text-2xl text-[#0E8A76] absolute self-center" />
            <select
              className="bg-[#D0E3E0] text-[#0E8A76] flex w-32 lg:w-40 py-3 px-7 lg:px-10 gap-2 rounded-lg"
              placeholder="Tanggal"
            >
              <option value="basket">Price</option>
              <option value="futsal">Distance</option>
              <option value="badminton">Rating</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center mt-8 gap-12">
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
