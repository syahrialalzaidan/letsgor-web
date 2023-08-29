import { IoLocationOutline } from "react-icons/io5";
import { BsCalendarDateFill } from "react-icons/bs";
import { BiSolidBasketball } from "react-icons/bi";
import { useRouter } from "next/navigation";
import Boxgor from "../component/Boxgor";

const Page = () => {
  return (
    <div>
      <div className="bg-[url('/explore/atas.svg')] flex flex-col justify-center items-center gap-8 bg-cover h-64 w-full pt-14">
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
              value={"Pasaga"}
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
              value={"2023-09-10"}
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
              value={"Basket"}
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
      <div className="min-h-screen bg-[#F0FDF9]">
        <div className="container mx-auto py-20">
          <Boxgor
            name="Pasaga"
            address="Jl. Cisitu"
            distance="3.0 Km"
            rating="4.5/5.0"
            price="65 rb"
            image="/explore/basket.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
