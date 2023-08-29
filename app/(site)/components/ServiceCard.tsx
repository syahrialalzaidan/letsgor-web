import { BsFillCalendarWeekFill } from "react-icons/bs";

const ServiceCard = () => {
  return (
    <div className="bg-white shadow-lg w-full lg:w-[30%] cursor-pointer text-primary flex flex-col justify-center items-center py-14 px-10 gap-2 text-center rounded-lg group hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition">
      <h1 className="font-semibold text-[1.7rem]">LetsBook</h1>
      <div className="text-white bg-primary p-4 rounded-full flex justify-center my-2 group-hover:bg-white group-hover:text-primary transition">
        <BsFillCalendarWeekFill size={38} />
      </div>
      <p className="text-sm">
        Memesan lapangan dengan cepat tanpa perlu menunggu dan mencari kontak
        pemilik lapangan
      </p>
    </div>
  );
};

export default ServiceCard;
